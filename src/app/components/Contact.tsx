"use client";

import React, {useState} from 'react';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:jules.langagne.pro@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    };

    return (
        <section id="contact" className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="name">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="input input-bordered w-full"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            className="input input-bordered w-full"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label" htmlFor="message">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea
                            id="message"
                            className="textarea textarea-bordered h-24"
                            placeholder="Your message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </section>
    );
}