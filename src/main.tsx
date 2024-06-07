import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import BlockingGrandparent, { loader as blockingGrandparentLoader } from "./routes/blocking.grandparent";
import BlockingParent, { loader as blockingParentLoader } from "./routes/blocking.grandparent.parent";
import BlockingChild, { loader as blockingChildLoader } from "./routes/blocking.grandparent.parent.child";
import WaterfallGrandparent, { loader as waterfallGrandparentLoader } from "./routes/waterfall.grandparent";
import WaterfallParent, { loader as waterfallParentLoader } from "./routes/waterfall.grandparent.parent";
import WaterfallChild, { loader as waterfallChildLoader } from "./routes/waterfall.grandparent.parent.child";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/blocking/grandparent", 
        element: <BlockingGrandparent />,
        loader: blockingGrandparentLoader,
        children: [
          {
            path: "/blocking/grandparent/parent", 
            element: <BlockingParent />,
            loader: blockingParentLoader,
            children: [
              {
                path: "/blocking/grandparent/parent/child", 
                element: <BlockingChild />,
                loader: blockingChildLoader,
              },
            ]
          },
        ]
      },
      {
        path: "/waterfall/grandparent", 
        element: <WaterfallGrandparent />,
        loader: waterfallGrandparentLoader,
        children: [
          {
            path: "/waterfall/grandparent/parent", 
            element: <WaterfallParent />,
            loader: waterfallParentLoader,
            children: [
              {
                path: "/waterfall/grandparent/parent/child", 
                element: <WaterfallChild />,
                loader: waterfallChildLoader,
              },
            ]
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
