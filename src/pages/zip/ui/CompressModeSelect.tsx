import { cn } from "@/shared/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { CompressMode } from "../types";

export type CompressModeSelectProps = React.HTMLAttributes<HTMLElement> & {
  defaultValue: CompressMode;
  onModeChange: (mode: CompressMode) => void;
};

export function CompressModeSelect({
  className,
  defaultValue = "zip",
  onModeChange,
}: CompressModeSelectProps) {
  return (
    <Tabs
      defaultValue={defaultValue}
      className={cn("h-full space-y-6", className)}
      onValueChange={v => onModeChange(v as CompressMode)}
    >
      <TabsList>
        <TabsTrigger value="zip">Zip</TabsTrigger>
        <TabsTrigger value="gzip" disabled>
          Gzip
        </TabsTrigger>
        <TabsTrigger value="zlib" disabled>
          Zlib
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
