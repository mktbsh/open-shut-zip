import { Separator } from "@/shared/ui/separator";
import { MobileHero } from "@/widgets/MobileHero";
import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "zip",
    href: "/",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

export function BaseLayout() {
  return (
    <>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Open Shut Zip</h2>
          <p className="text-muted-foreground">
            fflate's proof-of-concept project.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <Sidebar items={sidebarNavItems} />
          </aside>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
