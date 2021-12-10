import '../style/main.scss';
import { store } from '../store/index'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

