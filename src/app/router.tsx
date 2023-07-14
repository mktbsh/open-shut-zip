import { createHashRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { SettingsPage } from "@/pages/settings";
import { ZipPage } from "@/pages/zip";

export function initRouter() {
  return createHashRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <ZipPage />,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
      ],
    },
  ]);
}
