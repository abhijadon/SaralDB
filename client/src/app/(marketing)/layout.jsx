import Footer from "../../components/layout/Footer";
import Header from '../../components/layout/Header';

export default function MarketingLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}