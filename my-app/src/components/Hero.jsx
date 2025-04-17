import heroFloor from '../assets/1.jpg';


export default function Hero() {
    return (
        <section id="top" className="hero">
            <img src={heroFloor} alt="Epoxy‑coated garage floor" className="hero__bg" />

            <div className="hero__overlay">
                <h1>We bring your concrete to life</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam libero risus, aliquet non commodo at.</p>

                <a href="#services" className="hero__cta">Our Services</a>
            </div>
        </section>
    );
}
