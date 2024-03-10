import "reflect-metadata"
import {container} from "tsyringe";


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import store from "./store";
import {Api} from "../services/api.ts";

container.register('ApiService', {useClass: Api});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
