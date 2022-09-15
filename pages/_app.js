import "../styles/globals.css";
import { MediumProvider } from "../context/mediumContext";

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}

export default MyApp;
