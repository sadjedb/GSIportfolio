import { LanguageProvider } from "@/app/context/LanguageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";

export default function MainLayout({ children }) {
  return (
    <LanguageProvider>
      <Header />
      <Socials />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
