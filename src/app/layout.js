import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",          // Anton n’a qu’un seul poids
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata = {
  title: "Amour Pigalle",
  description: "Amour Pigalle est une curiosité qui se dévoilera d'ici peu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={anton.variable}>
        {children}
      </body>
    </html>
  );
}
