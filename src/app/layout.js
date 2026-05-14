import "./globals.css";

export const metadata = {
  title: "Rodri_OS | Portafolio",
  description: "Sistema Operativo Personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}