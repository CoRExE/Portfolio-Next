export function Contact() {
    return (
        <section id="contact" className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <form className="max-w-md mx-auto">
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="name">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" id="name" placeholder="Your name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" placeholder="Your email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="message">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea id="message" className="textarea textarea-bordered h-24" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </section>
    )
}
