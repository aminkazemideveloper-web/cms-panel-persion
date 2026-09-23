import { createBrowserRouter } from "react-router";

import { lazy, Suspense } from "react";
import PageSkeleton from "./skeletons/PageSkeleton/PageSkeleton";
import UsersPage from "./pages/UsersPage/page";
import ArticlesPage from "./pages/ArticlesPage/page";
import CoursesPage from "./pages/CoursesPage/page";
import Home from "./pages/Home/Home";

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
        element: <Home />,
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
        path: "courses",
        element: <CoursesPage />,
      },
    ],
  },
]);

export default router;
