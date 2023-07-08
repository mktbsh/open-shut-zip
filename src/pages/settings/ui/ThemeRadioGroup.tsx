import { Theme, useTheme } from "@/features/theme/model";
import { capitalize } from "@/shared/lib/utils";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";

const themes: ReadonlyArray<Theme> = ["light", "dark", "system"];

export function ThemeRadioGroup() {
  const [theme, setTheme] = useTheme();

  function handleChange(value: string) {
    setTheme(value as Theme);
  }

  return (
    <RadioGroup
      className="flex flex-col space-y-1"
      onValueChange={handleChange}
      defaultValue={theme}
    >
      <Label>Theme</Label>
      {themes.map(theme => (
        <div key={theme} className="flex items-center space-x-2">
          <RadioGroupItem value={theme} />
          <Label>{capitalize(theme)}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
