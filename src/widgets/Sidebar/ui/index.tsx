import { NavLink } from "react-router-dom";

import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button";

type SidebarProps = React.HTMLAttributes<HTMLElement> & {
  items: {
    href: string;
    title: string;
  }[];
};

export function Sidebar({ className, items, ...props }: SidebarProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map(item => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "ghost" }),
              isActive
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start",
            )
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
