import "./globals.css";

export const metadata = {
  title: "NixCodex",
  description: "Modern developer platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}