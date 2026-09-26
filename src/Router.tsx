import { createBrowserRouter } from "react-router";
import UsersPage from "./pages/UsersPage/page";
import ArticlesPage from "./pages/ArticlesPage/page";
import CoursesPage from "./pages/CoursesPage/page";
import Home from "./pages/HomePage/Page";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DashboardLayout from "./components/Layouts/DashboardLayout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
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
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
