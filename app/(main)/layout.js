import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Socials />
      {children}
      <Footer />
    </>
  );
}
