import { Separator } from "@/shared/ui/separator";
import { ThemeRadioGroup } from "./ui/ThemeRadioGroup";

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your settings.</p>
      </div>
      <Separator />
      <ThemeRadioGroup />
    </div>
  );
}
