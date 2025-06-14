// Profile/routers/ProfileRoutes.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MyProjects from "../pages/MyProjects";
import Experiments from "../pages/Experiments";
import Events from "../pages/Events";
import Publications from "../pages/Publications";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const ProfileRoutes = [
  <Route index element={<Navigate to="dashboard" replace />} key="index" />,
  <Route path="dashboard" element={<Dashboard />} key="dashboard" />,
  <Route path="my-projects" element={<MyProjects />} key="my-projects" />,
  <Route path="experiments" element={<Experiments />} key="experiments" />,
  <Route path="events" element={<Events />} key="events" />,
  <Route path="publications" element={<Publications />} key="publications" />,
  <Route path="settings" element={<Settings />} key="settings" />,
  <Route path="*" element={<NotFound />} key="notfound" />,
];

export default ProfileRoutes;
  