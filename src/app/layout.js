import MyProviders from "./GlobalRedux/provider";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Chatter Hub",
  description: "Social Media Applicaton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProviders>
          <div>{children}</div>
        </MyProviders>
      </body>
    </html>
  );
}
