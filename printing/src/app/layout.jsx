import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Печатный центр Subli.by",
    description: "Generated by create next app???",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={mont.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
