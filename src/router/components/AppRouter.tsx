import { type ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { ResumePage } from '@/pages/ResumePage.tsx';
import { SandboxPage } from '@/pages/SandboxPage.tsx';
import { RoutePath } from '@/router/constants/RoutePath.ts';

export function AppRouter(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutePath.Root}
          element={<Navigate to={RoutePath.Resume} replace={true} />}
        />
        <Route path={RoutePath.Resume} element={<ResumePage />} />
        <Route path={RoutePath.Sandbox} element={<SandboxPage />} />
        <Route
          path="*"
          element={<Navigate to={RoutePath.Root} replace={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
