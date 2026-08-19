import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import NewsLetter from './components/newsLetter/NewsLetter';
import Explorar from './components/explorar/Explorar';
import Catalogo from './components/catalogo/Catalogo';

export default function App(){
    return (
        <>
            <Header/>
            <Hero/>
            <Catalogo/>
            <Explorar/>
            <Testimonials/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}