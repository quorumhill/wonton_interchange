import * as wonton_interchange_protobufs from 'wonton_interchange_protobufs';
import Long from 'long';

type ValueOf<T> = T[keyof T];

function clampNumber(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

type PledgeConditionStatusDescriptor = {
  satisfied: {
    progress: 1;
  };
  unsatisfied: {
    progress: number;
  };
};

type PledgeConditionStatus = {
  [Status in keyof PledgeConditionStatusDescriptor]: {
    status: Status;
  } & PledgeConditionStatusDescriptor[Status];
}[keyof PledgeConditionStatusDescriptor];

function pledgeConditionStatusSatisfied(): PledgeConditionStatus {
  return {
    status: 'satisfied',
    progress: 1,
  };
}

function pledgeConditionStatusUnsatisfied(
  progress: number,
): PledgeConditionStatus {
  if (progress < 0 || progress >= 1) {
    throw 'Invalid progress value.';
  }

  return {
    status: 'unsatisfied',
    progress: progress,
  };
}

function evaluateCombiner<T>(
  combiner: wonton_interchange_protobufs.com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum,
  clauses: T[],
  extractor: (clause: T) => PledgeConditionStatus,
): PledgeConditionStatus {
  if (clauses.length === 0) {
    return pledgeConditionStatusUnsatisfied(0);
  }

  switch (combiner) {
    case wonton_interchange_protobufs.com.quorumhill.wonton
      .PledgeConditionCombinerFunction.Enum.UNKNOWN: {
      return pledgeConditionStatusUnsatisfied(0);
    }
    case wonton_interchange_protobufs.com.quorumhill.wonton
      .PledgeConditionCombinerFunction.Enum.AND: {
      const status = clauses
        .map(extractor)
        .reduce<PledgeConditionStatus | null>((prev, curr) => {
          if (!prev) {
            return curr;
          }

          return prev.status === 'satisfied' && curr.status === 'satisfied'
            ? pledgeConditionStatusSatisfied()
            : pledgeConditionStatusUnsatisfied(prev.progress + curr.progress);
        }, null)!;
      if (status.status === 'unsatisfied') {
        status.progress = clampNumber(status.progress / clauses.length, 0, 1);
      }
      return status;
    }
    case wonton_interchange_protobufs.com.quorumhill.wonton
      .PledgeConditionCombinerFunction.Enum.OR: {
      const status = clauses
        .map(extractor)
        .reduce<PledgeConditionStatus | null>((prev, curr) => {
          if (!prev) {
            return curr;
          }

          return prev.status === 'satisfied' || curr.status === 'satisfied'
            ? pledgeConditionStatusSatisfied()
            : pledgeConditionStatusUnsatisfied(
                Math.max(prev.progress, curr.progress),
              );
        }, null)!;
      if (status.status === 'unsatisfied') {
        status.progress = clampNumber(status.progress, 0, 1);
      }
      return status;
    }
  }
}
function evaluateComparator<T>(
  comparator: wonton_interchange_protobufs.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum,
  left: T,
  right: T,
  extractor: (side: T) => number,
): PledgeConditionStatus {
  switch (comparator) {
    case wonton_interchange_protobufs.com.quorumhill.wonton
      .PledgeConditionComparatorFunction.Enum.UNKNOWN:
      return pledgeConditionStatusUnsatisfied(0);
    case wonton_interchange_protobufs.com.quorumhill.wonton
      .PledgeConditionComparatorFunction.Enum.GREATER_EQUAL:
      const leftValue = extractor(left);
      const rightValue = extractor(right);
      return leftValue >= rightValue
        ? pledgeConditionStatusSatisfied()
        : pledgeConditionStatusUnsatisfied(
            clampNumber(leftValue / rightValue, 0, 1),
          );
  }
}

interface PledgeEvaluationContext {
  pledge: {
    [pledgeId: string]: {
      domainName: string;
      commitmentValueUsd: Long;
    };
  };
  university: {
    [domainName: string]: {
      enabled: boolean;
      countryCode: string;
      commitmentValueUsd: Long;
    };
  };
  country: {
    [countryCode: string]: {
      commitmentValueUsd: Long;
    };
  };
}

function evaluatePledgeWhere(
  where: wonton_interchange_protobufs.com.quorumhill.wonton.PledgeConditionWhere,
  context: PledgeEvaluationContext,
  pledgeInfo: PledgeEvaluationContext['pledge'][keyof PledgeEvaluationContext['pledge']],
): PledgeConditionStatus {
  if (!where.where) {
    return pledgeConditionStatusSatisfied();
  }

  const universityInfo = context.university[pledgeInfo.domainName];
  if (!universityInfo) {
    return pledgeConditionStatusUnsatisfied(0);
  }

  const countryInfo = context.country[universityInfo!.countryCode];
  if (!countryInfo) {
    return pledgeConditionStatusUnsatisfied(0);
  }

  switch (where.where) {
    case 'whereCombiner':
      return evaluateCombiner(
        where.whereCombiner!.combiner,
        where.whereCombiner!.clauses,
        (clause) => evaluatePledgeWhere(clause, context, pledgeInfo),
      );
    case 'whereUniversityName':
      return where.whereUniversityName!.domainName === pledgeInfo.domainName
        ? pledgeConditionStatusSatisfied()
        : pledgeConditionStatusUnsatisfied(0);
    case 'whereCountryName':
      return where.whereCountryName!.countryCode === universityInfo!.countryCode
        ? pledgeConditionStatusSatisfied()
        : pledgeConditionStatusUnsatisfied(0);
    case 'whereCommitmentValue':
      let referenceCommitmentValueUsd = Long.MAX_VALUE;
      switch (where.whereCommitmentValue!.aggregationSlice) {
        case wonton_interchange_protobufs.com.quorumhill.wonton
          .PledgeConditionWhereCommitmentValueSlice.Enum.UNKNOWN:
          return pledgeConditionStatusUnsatisfied(0);
        case wonton_interchange_protobufs.com.quorumhill.wonton
          .PledgeConditionWhereCommitmentValueSlice.Enum.COUNTRY:
          referenceCommitmentValueUsd = countryInfo.commitmentValueUsd;
          break;
        case wonton_interchange_protobufs.com.quorumhill.wonton
          .PledgeConditionWhereCommitmentValueSlice.Enum.UNIVERSITY:
          referenceCommitmentValueUsd = universityInfo.commitmentValueUsd;
          break;
        case wonton_interchange_protobufs.com.quorumhill.wonton
          .PledgeConditionWhereCommitmentValueSlice.Enum.PLEDGE:
          referenceCommitmentValueUsd = pledgeInfo.commitmentValueUsd;
          break;
      }
      return evaluateComparator(
        where.whereCommitmentValue!.comparator,
        referenceCommitmentValueUsd,
        where.whereCommitmentValue!.commitmentValueUsd,
        (side) => side.toNumber(),
      );
  }
}

interface PledgeEvaluationMetrics {
  commitmentValueUsd: Long;
  universityCount: Long;
}

function evaluatePledgePredicate(
  predicate: wonton_interchange_protobufs.com.quorumhill.wonton.PledgeConditionPredicate,
  metrics: PledgeEvaluationMetrics,
): PledgeConditionStatus {
  if (!predicate.predicate) {
    return pledgeConditionStatusSatisfied();
  }

  switch (predicate.predicate) {
    case 'predicateCombiner':
      return evaluateCombiner(
        predicate.predicateCombiner!.combiner,
        predicate.predicateCombiner!.clauses,
        (clause) => evaluatePledgePredicate(clause, metrics),
      );
    case 'predicateUniversityCount':
      return evaluateComparator(
        predicate.predicateUniversityCount!.comparator,
        metrics.universityCount,
        predicate.predicateUniversityCount!.universityCount,
        (side) => side.toNumber(),
      );
    case 'predicateCommitmentValue':
      return evaluateComparator(
        predicate.predicateCommitmentValue!.comparator,
        metrics.commitmentValueUsd,
        predicate.predicateCommitmentValue!.commitmentValueUsd,
        (side) => side.toNumber(),
      );
  }
}

function evaluatePledgeStatus(
  pledgeInfo: ValueOf<Parameters<typeof evaluatePledgeStatuses>[0]>,
  context: PledgeEvaluationContext,
): PledgeConditionStatus {
  if (!pledgeInfo.commitmentConditionStructured.predicate?.predicate) {
    return pledgeConditionStatusSatisfied();
  }

  let commitmentValueUsd = Long.ZERO;
  const universityDomainNames = new Set<string>();
  for (const dependingPledgeInfo of Object.values(context.pledge)) {
    if (
      !!pledgeInfo.commitmentConditionStructured.where?.where &&
      evaluatePledgeWhere(
        pledgeInfo.commitmentConditionStructured.where!,
        context,
        dependingPledgeInfo,
      ).status !== 'satisfied'
    ) {
      continue;
    }

    commitmentValueUsd = commitmentValueUsd.add(
      dependingPledgeInfo.commitmentValueUsd,
    );
    universityDomainNames.add(dependingPledgeInfo.domainName);
  }

  return evaluatePledgePredicate(
    pledgeInfo.commitmentConditionStructured.predicate!,
    {
      commitmentValueUsd: commitmentValueUsd,
      universityCount: Long.fromNumber(universityDomainNames.size),
    },
  );
}

export function evaluatePledgeStatuses(
  pledgeInfos: {
    [pledgeId: string]: {
      domainName: string;
      commitmentConditionStructured: wonton_interchange_protobufs.com.quorumhill.wonton.PledgeCondition;
      commitmentValueUsd: Long;
    };
  },
  universityMetadata: {
    [domainName: string]: {
      enabled: boolean;
      countryCode: string;
    };
  },
): {
  [
    pledgeId: string
  ]: wonton_interchange_protobufs.com.quorumhill.wonton.PledgeStageStatusRegistered;
} {
  const context: PledgeEvaluationContext = {
    pledge: {},
    university: {},
    country: {},
  };
  for (const [pledgeKey, pledgeInfo] of Object.entries(pledgeInfos)) {
    context.pledge[pledgeKey] = {
      domainName: pledgeInfo.domainName,
      commitmentValueUsd: pledgeInfo.commitmentValueUsd,
    };

    const universityInfo = universityMetadata[pledgeInfo.domainName] || {
      enabled: false,
      countryCode: 'UNKNOWN',
    };

    if (!context.university[pledgeInfo.domainName]) {
      context.university[pledgeInfo.domainName] = {
        enabled: universityInfo.enabled,
        countryCode: universityInfo.countryCode,
        commitmentValueUsd: Long.ZERO,
      };
    }
    context.university[pledgeInfo.domainName]!.commitmentValueUsd =
      context.university[pledgeInfo.domainName]!.commitmentValueUsd.add(
        pledgeInfo.commitmentValueUsd,
      );

    if (!context.country[universityInfo.countryCode]) {
      context.country[universityInfo.countryCode] = {
        commitmentValueUsd: Long.ZERO,
      };
    }
    context.country[universityInfo.countryCode]!.commitmentValueUsd =
      context.country[universityInfo.countryCode]!.commitmentValueUsd.add(
        pledgeInfo.commitmentValueUsd,
      );
  }

  const pledgeStatuses: ReturnType<typeof evaluatePledgeStatuses> = {};
  for (const [pledgeId, pledgeInfo] of Object.entries(pledgeInfos)) {
    if (!(universityMetadata[pledgeInfo.domainName]?.enabled || false)) {
      pledgeStatuses[pledgeId] =
        new wonton_interchange_protobufs.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied(
          {
            conditionProgressEstimate: 0,
          },
        );
      continue;
    }

    const pledgeStatus = evaluatePledgeStatus(pledgeInfo, context);
    switch (pledgeStatus.status) {
      case 'satisfied':
        pledgeStatuses[pledgeId] =
          new wonton_interchange_protobufs.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied();
        break;
      case 'unsatisfied':
        new wonton_interchange_protobufs.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied(
          {
            conditionProgressEstimate: pledgeStatus.progress,
          },
        );
        break;
    }
  }

  if (
    !Object.values(pledgeStatuses).reduce(
      (prev, curr) =>
        prev && curr.conditionStatus === 'conditionStatusSatisfied',
      true,
    )
  ) {
    for (const [pledgeId, pledgeStatus] of Object.entries(
      evaluatePledgeStatuses(
        Object.entries(pledgeStatuses).reduce<
          Parameters<typeof evaluatePledgeStatuses>[0]
        >((prev, [pledgeId, pledgeStatus]) => {
          if (pledgeStatus.conditionStatus === 'conditionStatusSatisfied') {
            prev[pledgeId] = pledgeInfos[pledgeId]!;
          }
          return prev;
        }, {}),
        universityMetadata,
      ),
    )) {
      pledgeStatuses[pledgeId] = pledgeStatus;
    }
  }

  return pledgeStatuses;
}
