import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App.tsx';
import { AppHtmlElementAdapter } from '@/app/AppHtmlElementAdapter.ts';

createRoot(new AppHtmlElementAdapter().getMainRootElement()).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
