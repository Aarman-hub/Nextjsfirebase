import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Provider } from '../context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header />
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
