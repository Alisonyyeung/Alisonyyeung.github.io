import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>If you would like to reach out, feel free to contact me through the form below or via email.</p>
            <form action="#" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
            <h3>Contact Information</h3>
            <p>Email: your.email@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    );
};

export default ContactPage;