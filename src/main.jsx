import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {GlobalContext} from "./context/Context.jsx"
import LazyLoading from "./components/LazyLoading.jsx"
import "./App.css"
import React from 'react'

const App = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./App.jsx")),2000)
}))

createRoot(document.getElementById('root')).render(
    <GlobalContext>
        <BrowserRouter>
            <Suspense fallback={<LazyLoading/>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </GlobalContext>
)
