import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import { ThemeProvider } from "../ui/utils/theme/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
