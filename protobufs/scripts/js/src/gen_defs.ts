import * as fs from 'fs';
import { pbjs, pbts } from 'protobufjs-cli';

function findFiles(path: string, filter?: (path: string) => boolean): string[] {
  return fs
    .readdirSync(path, {
      recursive: true,
    })
    .map((p) => `${path}/${p.toString()}`)
    .filter(filter || (() => true));
}

function resetDir(path: string): void {
  fs.rmSync(path, { recursive: true, force: true });
  fs.mkdirSync(path, {
    recursive: true,
  });
}

function genJs(protoFiles: string[]): boolean {
  const jsDir = '../../src/js/src';
  const jsFile = `${jsDir}/index.js`;
  const tsFile = `${jsDir}/index.d.ts`;

  resetDir(jsDir);

  return (
    !pbjs.main([
      '-t=static-module',
      '-w=es6',
      '-r=wonton_interchange_protobufs',
      '--force-long',
      '--force-message',
      '--no-create',
      '--no-verify',
      '--no-delimited',
      `-o=${jsFile}`,
      // Effectively the same as `$(find ../lib/proto -iname "*.proto")`.
      ...protoFiles,
    ]) && !pbts.main([`-o=${tsFile}`, jsFile])
  );
}

const protoFiles = findFiles('../../src/proto', (path) =>
  path.endsWith('.proto'),
);

if (!genJs(protoFiles)) {
  throw 'Error generating js files.';
}
