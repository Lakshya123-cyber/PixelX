import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PixelX",
  description: "NFT Web App",
};

const myArray = [
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div className="lines">
          <div className="line-1">
            <div className="shapes">
              {myArray.map((shape, i) => (
                <div key={i} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-2">
            <div className="shapes">
              {myArray.map((shape, i) => (
                <div key={i} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-3">
            <div className="shapes">
              {myArray.map((shape, i) => (
                <div key={i} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-4">
            <div className="shapes">
              {myArray.map((shape, i) => (
                <div key={i} className={shape}></div>
              ))}
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
