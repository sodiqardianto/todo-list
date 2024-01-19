import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
