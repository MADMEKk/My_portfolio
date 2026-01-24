import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedinIn, FaTiktok, FaTelegram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Components
import Section from '../components/Section';

// Data
import { profile } from '../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    setErrorMessage('');

    // Values from environment variables (vite prefix)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError(true);
      setErrorMessage('Email service is not configured. Please check environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters matching your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        time: new Date().toLocaleString(),
        message: formData.message,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(true);
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: profile.location,
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/AlaEddineMEKKAOUI', ariaLabel: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/alaeddine-mekkaoui/', ariaLabel: 'LinkedIn' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@alaeddine5744', ariaLabel: 'TikTok' },
    { icon: <FaTelegram />, url: 'https://t.me/AlaEddineMek', ariaLabel: 'Telegram' },
    { icon: <FaEnvelope />, url: 'mailto:aeddine360@gmail.com', ariaLabel: 'Email' },
  ];

  return (
    <div className="pt-5 pb-16">
      <Section
        title="Contact Me"
        subtitle="Have a question or want to work together? Feel free to reach out!"
        hideSectionNumber
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-light mb-6">Get in Touch</h3>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-secondary text-xl mt-1">{item.icon}</div>
                  <div className="ml-4">
                    <h4 className="text-light font-medium">{item.label}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-tertiary hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-tertiary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-light mb-4">Connect with Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="bg-dark p-3 rounded-full text-tertiary hover:text-secondary hover:border-secondary border border-tertiary border-opacity-20 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-light mb-6">Send a Message</h3>

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-accent/10 border border-secondary text-secondary p-4 rounded-md"
              >
                <p className="font-medium">Thank you for your message!</p>
                <p className="mt-1">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 text-sm underline hover:no-underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-light mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 bg-dark border border-tertiary border-opacity-30 rounded-md text-light focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-light mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 bg-dark border border-tertiary border-opacity-30 rounded-md text-light focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-light mb-2">Subject</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 bg-dark border border-tertiary border-opacity-30 rounded-md text-light focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-light mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full py-3 px-4 bg-dark border border-tertiary border-opacity-30 rounded-md text-light focus:border-secondary focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {submitError && (
                  <div className="text-red-400 text-sm">
                    {errorMessage || 'There was an error sending your message. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
