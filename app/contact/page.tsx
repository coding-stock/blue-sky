'use client'

import { useState, FormEvent } from 'react'
import Navigation from '@/components/Navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    
      const finalMessage = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`
const emailURL = `mailto:blueskyleadershiprw@gmail.com?subject=Blue%20Sky%20Program%20Contact&body=${encodeURIComponent(finalMessage)}`
    
    window.open(emailURL, "_blank")
  }

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section className="contact">
          <div className="contact_info">
            <h1>Get in Touch</h1>
            <p>
              Have questions? Want to partner with us? We&apos;d love to hear from you! 
              Reach out and let&apos;s work together to empower the next generation of leaders.
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:blueskyleadershiprw@gmail.com">blueskyleadershiprw@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+250792870641">+250 792 870 641</a>
            </p>
          </div>
          
          <div className="contact_form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
        
        <footer>
          <p>© 2025 Blue Sky Youth Leadership Program. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
