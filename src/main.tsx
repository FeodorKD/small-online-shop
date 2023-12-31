import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import {Provider} from "react-redux";
import {setupStore} from "./App/store";


const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
