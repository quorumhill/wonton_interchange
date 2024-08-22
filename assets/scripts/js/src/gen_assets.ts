import * as fs from 'fs';
import * as protobuf from 'protobufjs/minimal';
import * as util from 'util';
import * as wonton_interchange_protobufs from 'wonton_interchange_protobufs';

function findFiles(path: string, filter?: (path: string) => boolean): string[] {
  return fs
    .readdirSync(path, {
      recursive: true,
    })
    .map((p) => `${path}/${p.toString()}`)
    .filter(filter || (() => true));
}

function deleteFiles(paths: string[]): void {
  for (const path of paths) {
    fs.rmSync(path, { force: true });
  }
}

function genProto(): boolean {
  const protoDir = '../../assets';
  const protoJsonSuffix = '.pb.json';
  const protoEncodedSuffix = '.pb.encoded';

  const pathPrefixToProto: {
    [pathPrefix: string]: {
      encode(message: any, writer?: protobuf.Writer): protobuf.Writer;
      fromObject(object: { [k: string]: any }): any;
      toObject(
        message: any,
        options?: protobuf.IConversionOptions,
      ): { [k: string]: any };
    };
  } = {
    [`${protoDir}/content/backdrop`]:
      wonton_interchange_protobufs.com.quorumhill.wonton.BackdropInfo,
  };

  deleteFiles(findFiles(protoDir, (path) => path.endsWith(protoEncodedSuffix)));

  for (const path of findFiles(protoDir, (path) =>
    path.endsWith(protoJsonSuffix),
  )) {
    const protoJson = JSON.parse(fs.readFileSync(path).toString());

    let didEncodeProto = false;
    for (const [pathPrefix, protobufPrototype] of Object.entries(
      pathPrefixToProto,
    )) {
      if (!pathPrefix.startsWith(pathPrefix)) {
        continue;
      }

      const proto = protobufPrototype.fromObject(protoJson);

      if (
        !util.isDeepStrictEqual(
          protobufPrototype.toObject(proto, {
            longs: String,
            enums: String,
            bytes: String,
            defaults: false,
          }),
          protoJson,
        )
      ) {
        break;
      }

      fs.writeFileSync(
        path.substring(0, path.lastIndexOf(protoJsonSuffix)) +
          protoEncodedSuffix,
        protobufPrototype.encode(proto).finish(),
      );
      didEncodeProto = true;
    }
    if (!didEncodeProto) {
      return false;
    }
  }

  return true;
}

if (!genProto()) {
  throw 'Error generating proto files.';
}
