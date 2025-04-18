import s1 from '../assets/21.png';
import s2 from '../assets/22.png';
import s3 from '../assets/23.png';
import s4 from '../assets/21.png';



export default function Services() {
    const data = [
        { img: s1, title: 'Flake Garage Floors', text: '' },
        { img: s2, title: 'Stamped Concrete Sealing', text: '' },
        { img: s3, title: 'Decorative Overlays', text: '' },
        { img: s4, title: 'Metallic Coatings', text: 'Metallic epoxy creates a completely custom, one-of-a-kind look for your surface. It is incredibly durable, completely unique and eye-popping.  You can turn a garage into a literal showroom.  Perfect for residential and commercial spaces, including basements, garages, showrooms, bathrooms, kitchens, entryways and lobbies.' },
    ];

    return (
        <section id="services" className="section">
            <h2>Services</h2>

            <div className="cards">
                {data.map(({ img, title, text }) => (
                    <article className="card" key={title}>
                        <img src={img} alt={title} />
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
