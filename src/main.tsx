import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.tsx';
import { handlers } from './mocks/handlers.ts';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-problem",
        element: <>new-problem</>,
      },
      {
        path: "/problem/:slug",
        element: <>problem</>,
      },
      {
        path: "*",
        element: <>Not found</>,
      },
    ],
  },
]);

const queryClient = new QueryClient()

async function enableMocking() {
  if (!import.meta.env.DEV) return
  if (handlers.length === 0) return

  const { worker } = await import('./mocks/browsers.ts')
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
})