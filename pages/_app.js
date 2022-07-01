import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import DefaultLayout from "../components/DefaultLayout";

function MyApp({ Component, pageProps }) {
  const title = Component?.title || "SaneSource";
  const AppLayout = Component?.wrapper || DefaultLayout;

  return (
    <ThemeProvider enableSystem attribute="data-theme">
      <AppLayout title={title}>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
