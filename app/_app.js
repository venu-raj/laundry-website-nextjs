// _app.js
import { Provider } from 'react-redux';
import store from '@/store'; // Adjust the path as needed

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
