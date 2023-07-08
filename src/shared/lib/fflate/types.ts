export type BinaryFileTree = {
  [fileOrDirname: string]: Uint8Array | BinaryFileTree;
};
