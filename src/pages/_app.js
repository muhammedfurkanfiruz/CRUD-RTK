import '../styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "../features/Users"
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})

export default function App({ Component, pageProps }) {
 return  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
}
