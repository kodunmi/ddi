import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/azino-icons.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "swiper/swiper-bundle.min.css";
import store from '../store'
import { Provider } from 'react-redux'
// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
