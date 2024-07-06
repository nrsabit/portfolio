import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main/Main";
import Home from "./components/Pages/Home/Home/Home";
import Login from "./components/Pages/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import AddProject from "./components/Pages/Dashboard/AddProject/AddProject";
import AddSkill from "./components/Pages/Dashboard/AddSkill/AddSkill";
import AddExperience from "./components/Pages/Dashboard/AddExperience/AddExperience";
import AddBlog from "./components/Pages/Dashboard/AddBlog/AddBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "add-project",
        element: <AddProject />,
      },
      {
        path: "add-skill",
        element: <AddSkill />,
      },
      {
        path: "add-experience",
        element: <AddExperience />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
