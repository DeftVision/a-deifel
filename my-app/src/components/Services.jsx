import s1 from '../assets/21.png';
import s2 from '../assets/22.png';
import s3 from '../assets/23.png';


export default function Services() {
    const data = [
        { img: s1, title: 'Flake Garage Floors' },
        { img: s2, title: 'Stamped Concrete Sealing' },
        { img: s3, title: 'Decorative Overlays' },
    ];

    return (
        <section id="services" className="section">
            <h2>Services</h2>

            <div className="cards">
                {data.map(({ img, title }) => (
                    <article className="card" key={title}>
                        <img src={img} alt={title} />
                        <h3>{title}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, tempora.</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
