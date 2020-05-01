import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as firebase from 'firebase'
import { firebaseConfig } from './config'
firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))
