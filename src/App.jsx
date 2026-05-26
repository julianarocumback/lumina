import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testemunhos from "./components/testemunhos/Testemunhos";
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Explorar from "./components/explorar/Explorar";
import Catalogo from "./components/catalogo/Catalogo";

export default function App(){
    return (
        <>
            <Header />
            <Hero />
            <Catalogo />
            <Explorar />
            <Testemunhos />
            <NewsLetter />
            <Footer />
        </>
    )
}