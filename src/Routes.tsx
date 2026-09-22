import { createBrowserRouter, redirect } from "react-router";

import { lazy, Suspense } from "react";
import PageSkeleton from "./skeletons/PageSkeleton/PageSkeleton";
import UsersPage from "./pages/UsersPage/page";
import ArticlesPage from "./pages/ArticlesPage/page";
import CoursesPage from "./pages/CoursesPage/page";

const DashboardLayout = lazy(
  () => import("./Components/Layouts/DashboardLayout/DashboardLayout"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("users"),
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "articles",
        element: <ArticlesPage />,
      },

      {
        path: "course",
        element: <CoursesPage />,
      },
    ],
  },
]);

export default router;
