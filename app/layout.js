import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import MainLayout from "./(main)/layout";

export const metadata = {
  title: "GSI Ascenseurs",
  description: "Elevating standards with premium lift installations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
