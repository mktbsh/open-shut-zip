export type FileTree = {
  [fileOrDirname: string]: File | FileTree;
};
