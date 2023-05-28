import "./_home.scss";
import SearchTrip from "../../Components/SearchTrip";
import Trips from "../../Components/Trips";
import Features from "../../Components/Features";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

export default function Home() {
    return (
        <body className="container">
            <Sidebar />
            <Header />
            <SearchTrip />
            <Trips />
            <Features />
            <Contact />
            <Footer />
        </body>
    )
}