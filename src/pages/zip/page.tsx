import { CompressModeSelect } from "./ui/CompressModeSelect";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { CompressMode } from "./types";
import { Button } from "@/shared/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { byteToUnit } from "./lib/file";
import { toZip } from "@/shared/lib/fflate";

export function ZipPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<CompressMode>("zip");
  const [files, setFiles] = useState<File[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);

  const existFile = files.length > 0;
  const isDisabledDownloadButton = !existFile || isCompressing;

  const totalRow = useMemo(() => {
    if (files.length === 0) return;
    const totalSize = files.reduce<number>((total, file) => {
      total += file.size;
      return total;
    }, 0);

    return {
      name: "",
      type: "",
      size: byteToUnit(totalSize),
    };
  }, [files]);

  function handleDropFile(e: ChangeEvent<HTMLInputElement>) {
    const acceptedFiles: File[] = Array.from(e.target.files || []);
    setFiles(prev => [...prev, ...acceptedFiles]);
  }

  function handleClickAddFiles() {
    inputRef.current?.click();
  }

  async function downloadZip() {
    setIsCompressing(true);
    let zipFile: File | undefined = undefined;
    switch (mode) {
      case "zip":
        zipFile = await toZip({
          filename: `${Date.now()}.zip`,
          files: files,
        });
        setIsCompressing(false);
        break;
      case "gzip":
        setIsCompressing(false);
        return "";
      case "zlib":
        setIsCompressing(false);
        return "";
    }

    if (!zipFile) return;
    const a = document.createElement("a");
    const url = URL.createObjectURL(zipFile);
    a.href = url;
    a.download = zipFile.name;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function handleDownloadZip() {
    void downloadZip();
  }

  function handleClickDeleteFile(index: number) {
    return () => {
      setFiles(files => {
        return files.filter((_, idx) => idx !== index);
      });
    };
  }

  function handleClickDeleteAll() {
    setFiles([]);
  }

  return (
    <div className="h-full px-4 py-6 lg:px-8 space-y-6">
      <div className="justify-end flex items-center space-x-2">
        <CompressModeSelect
          defaultValue={mode}
          onModeChange={mode => setMode(mode)}
        />
        <Button className="h-full" onClick={handleClickAddFiles}>
          Add files
        </Button>
        <Button
          className="h-full"
          disabled={isDisabledDownloadButton}
          onClick={handleDownloadZip}
        >
          Download
        </Button>
        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          onChange={handleDropFile}
        />
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-xs">Filename</TableHead>
            <TableHead className="w-[272px]">Mime type</TableHead>
            <TableHead className="w-[108px]">File size</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {totalRow && (
            <TableRow>
              <TableCell className="font-medium truncate">
                {totalRow.name}
              </TableCell>
              <TableCell>{totalRow.type}</TableCell>
              <TableCell>{totalRow.size}</TableCell>
              <TableCell className="text-right">
                <Button
                  className="h-full"
                  variant="destructive"
                  onClick={handleClickDeleteAll}
                >
                  Delete all
                </Button>
              </TableCell>
            </TableRow>
          )}
          {files.map((file, index) => (
            <TableRow key={file.name}>
              <TableCell className="font-medium truncate">
                {file.name}
              </TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{byteToUnit(file.size)}</TableCell>
              <TableCell className="text-right">
                <Button
                  className="h-full"
                  variant="destructive"
                  onClick={handleClickDeleteFile(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
