// App.jsx
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
