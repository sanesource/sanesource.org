import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children, title }) {
  return (
    <>
      <Head title={title} />
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default DefaultLayout;
