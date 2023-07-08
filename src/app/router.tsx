import { createHashRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { SettingsPage } from "@/pages/settings";

export function initRouter() {
  return createHashRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <h1>Index</h1>,
        },
        {
          path: "/gzip",
          element: <h1>to Gzip</h1>,
        },
        {
          path: "/zip",
          element: <h1>to Zip</h1>,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
      ],
    },
  ]);
}
