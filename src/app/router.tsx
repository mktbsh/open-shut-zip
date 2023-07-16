import { createHashRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { ZipPage } from "@/pages/zip";
import { lazy } from "react";

const UnzipPage = lazy(() => import("@/pages/unzip"));
const SettingsPage = lazy(() => import("@/pages/settings"));

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
          path: "/unzip",
          element: <UnzipPage />,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
      ],
    },
  ]);
}
