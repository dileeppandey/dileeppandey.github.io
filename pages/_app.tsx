import "../styles/global.css";
import { AppProps } from "next/app";

<link
  href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
  rel="stylesheet"
></link>;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
