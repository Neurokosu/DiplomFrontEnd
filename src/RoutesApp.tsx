// AppRouter.tsx
import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "./containers/app/App";
import { Login } from "./containers/login/Login";

export const RoutesApp: FC = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={isAuthenticated ? <App /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};
