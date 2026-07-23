import "./globals.css";

export const metadata = {
  title: "Rodri_OS | Portafolio",
  description: "Sistema Operativo Personal",
};

// Asegura el escalado correcto en celulares y fija el color de la barra del navegador.
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}