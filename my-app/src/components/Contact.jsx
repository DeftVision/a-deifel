

export default function Contact() {
    return (
        <section id="contact" className="section">
            <h2>Contact</h2>

            <form
                className="contact__form"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thanks! We will be in touch soon.');
                }}
            >
                <label>
                    Name
                    <input type="text" placeholder="Your name" required />
                </label>

                <label>
                    Email
                    <input type="email" placeholder="you@example.com" required />
                </label>

                <label>
                    Message
                    <textarea rows="4" placeholder="Tell us about your project…" />
                </label>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
