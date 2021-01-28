/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { DefaultLayout, AuthLayout } from "./layouts";

// Route Views

const Homeview = React.lazy(() => import("./views/Home/home"));
const AuthView = React.lazy(() => import("./views/Auth/Auth"));

export default [
  {
    path: "/",
    exact: true,
    layout: AuthLayout,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/auth",
    layout: AuthLayout,
    component: AuthView,
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Homeview,
  },
];
