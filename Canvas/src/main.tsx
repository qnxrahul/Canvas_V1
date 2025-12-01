import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-react-pdfviewer/styles/material.css'
import '@syncfusion/ej2-react-documenteditor/styles/material.css'
import '@syncfusion/ej2-react-spreadsheet/styles/material.css'

import './index.css'

import ClassicCanvas from './pages/ClassicCanvas'
import FluentCanvas from './pages/FluentCanvas'
import WorkspaceCanvas from './pages/WorkspaceCanvas'
import WorkspaceNewBoard from './pages/WorkspaceNewBoard'
import NewBoard from './pages/NewBoard/NewBoard'
import DataExtraction from './pages/DataExtraction/DataExtraction'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import MappingPage from './pages/MappingPage'
import WorkpaperPage from './pages/WorkPaperPage'
import WorkpaperDetailPage from './pages/WorkPaperDetailPage'

function Layout() {
  return (
    <>
      <div className="app-nav">
        <Link to="/">Classic</Link>
        <Link to="/fluent">Fluent UI</Link>
        <Link to="/new-board">New Board</Link>
        <Link to="/workspace">Workspace UX</Link>
        <Link to="/workspace/new">Workspace New</Link>
      </div>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <WorkspaceCanvas /> },
      { path: '/fluent', element: <FluentCanvas /> },
      { path: '/workspace', element: <WorkspaceCanvas /> },
      { path: '/workspace/new', element: <WorkspaceNewBoard /> },
      { path: '/new-board', element: <NewBoard /> },
      { path: '/sample-documentation/extract', element: <DataExtraction /> },
      { path: '/mapping', element: <MappingPage /> },
      { path: '/workpaper', element: <WorkpaperPage /> },
      { path: '/workpaper-detail', element: <WorkpaperDetailPage /> }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)