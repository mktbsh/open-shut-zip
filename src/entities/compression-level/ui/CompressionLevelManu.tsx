"use client";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { CompressionLevel, LEVELS } from "../model";

type CompressionLevelMenuProps = {
  value: CompressionLevel;
  onChangeLevel: (value: CompressionLevel) => void;
};

export function CompressionLevelMenu({
  value,
  onChangeLevel,
}: CompressionLevelMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Comp Level</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Compression Level</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={value.toString()}
          onValueChange={value =>
            onChangeLevel(Number(value) as CompressionLevel)
          }
        >
          {LEVELS.map(level => (
            <DropdownMenuRadioItem
              key={`complevel-${level}`}
              value={level.toString()}
            >
              Level {level.toString()}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
