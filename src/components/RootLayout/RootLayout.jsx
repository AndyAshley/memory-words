import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import PageWrapper from "../PageWrapper/PageWrapper";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <PageWrapper>
      <Navigation />
      <main className="center-element">
        <Outlet />
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default RootLayout;
