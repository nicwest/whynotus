import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {App, GlobalStyles} from './App';
import {ErrorPage} from './ErrorPage';
import {store} from './store'
import { Provider } from 'react-redux'
import {Say} from './features/say/components'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
      path: "/say",
      element: <Say />,
  }
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
