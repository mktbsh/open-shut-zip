import { AsyncZipOptions, zip } from "fflate";
import { BinaryFileTree } from "./types";

type ToZipOptions = {
  filename: string;
  files: File[] | BinaryFileTree;
  compressOptions?: AsyncZipOptions;
};

export async function toZip({
  filename,
  files,
  compressOptions,
}: ToZipOptions): Promise<File> {
  const fileTree: BinaryFileTree = Array.isArray(files) ? {} : files;

  if (Array.isArray(files)) {
    await Promise.all(
      files.map(async file => {
        const buffer = await file.arrayBuffer();
        fileTree[file.name] = new Uint8Array(buffer);
      }),
    );
  }

  const zippedBuffer = await new Promise<Uint8Array>((resolve, reject) => {
    zip(fileTree, compressOptions || {}, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });

  return new File([zippedBuffer], filename);
}
