import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = React.useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    message: '',
    type: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Sending...', type: 'info' })

    try {
      const result = await emailjs.sendForm(
        'service_2f1cyum',
        'template_5q85f1e',
        e.target,
        '1gEIx2c9-OtixqTE1'
      )

      console.log('Success:', result.text)

      setStatus({
        message: 'Message sent successfully!',
        type: 'success'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      })
    }

    // Clear status message after 5 seconds
    setTimeout(() => {
      setStatus({ message: '', type: '' })
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[var(--color-bg)] bg-opacity-95 backdrop-blur-sm" aria-hidden="true"></div>
      {/* Ensure content is above the background */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Contact <span className="text-[var(--color-primary)]">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="p-8 rounded-lg bg-[var(--color-card-bg)] border border-[var(--color-card-border)] transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Get in Touch</h3>
            <p className="opacity-90 mb-6 text-lg">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kenenisamekonnensori@gmail.com" className="text-[var(--color-primary)] hover:underline transition-colors">kenenisamekonnensori@gmai.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="https://www.linkedin.com/in/kenenisa-mekonnen-03414b34a/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] hover:underline transition-colors">linkedin.com/in/kenenisamekonnen</a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <a href="https://github.com/kenenisamekonnen" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline transition-colors">github.com/kenenisamekonnen</a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-lg bg-[var(--color-card-bg)] border border-[var(--color-card-border)] transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-secondary)]">Send a Message</h3>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 opacity-90">Name</label>
                <input 
                  type="text"
                  name="from_name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-card-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 opacity-90">Email</label>
                <input 
                  type="email"
                  name="from_email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-card-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors" 
                  placeholder="Your Email" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 opacity-90">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-card-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              {status.message && (
                <div className={`text-center p-3 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100' :
                  status.type === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100' :
                  'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100'
                }`}>
                  {status.message}
                </div>
              )}
              <button 
                type="submit" 
                className="w-full btn-primary py-3 px-6 rounded-lg transform hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;