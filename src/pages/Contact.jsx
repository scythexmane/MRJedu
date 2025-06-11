import React from "react";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.4 }}>
      {/* Aside */}
      <aside
        className="order-[-1] lg:order-none w-full lg:w-[320px] shrink-0 py-8 px-5 lg:py-12 lg:px-10 text-white"
        style={{
          backgroundColor: '#121212',
          backgroundImage: 'url(/src/assets/lines.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      >
        <h2 className="text-2xl font-semibold tracking-wide">Get in touch</h2>
        <p className="text-sm text-[#E5E7EB] mt-2 leading-6">
          We're here to help and answer any question you might have.
        </p>

        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-3 text-[#F5F5F5]">
            <Phone size={18} />
            <span>+998 90 123 45 67</span>
          </div>
          <div className="flex items-center gap-3 text-[#F5F5F5]">
            <Mail size={18} />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-[#F5F5F5]">
            <MapPin size={18} />
            <span>123 Main St, Tashkent, UZ</span>
          </div>
          <div className="flex items-center gap-3 text-[#F5F5F5]">
            <Clock size={18} />
            <span>Mon–Fri, 9am–6pm</span>
          </div>
        </div>

        <div className="flex gap-6 mt-16">
          <a href="#" className="hover:opacity-75 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:opacity-75 transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:opacity-75 transition">
            <Instagram size={20} />
          </a>
        </div>
      </aside>

      {/* Form Section */}
      <section className="flex-1 py-16 px-5">
        <form
          className="max-w-[640px] mx-auto grid gap-8"
          onSubmit={handleSubmit}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-2">
                First name
              </label>
              <input
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="John"
                className="w-full border rounded-md border-[#F4F4F4] py-3 px-4 text-sm placeholder-[#A3A3A3] focus:ring-2 focus:ring-[#D92329]/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#111] mb-2">
                Last name
              </label>
              <input
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
                className="w-full border rounded-md border-[#F4F4F4] py-3 px-4 text-sm placeholder-[#A3A3A3] focus:ring-2 focus:ring-[#D92329]/40 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#111] mb-2">
              Email
            </label>
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-md border-[#F4F4F4] py-3 px-4 text-sm placeholder-[#A3A3A3] focus:ring-2 focus:ring-[#D92329]/40 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-[#111] mb-2">
              Phone number
            </label>
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+998 90 123 45 67"
              className="w-full border rounded-md border-[#F4F4F4] py-3 px-4 text-sm placeholder-[#A3A3A3] focus:ring-2 focus:ring-[#D92329]/40 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#111] mb-2">
              Message
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className="w-full border rounded-md border-[#F4F4F4] py-3 px-4 text-sm placeholder-[#A3A3A3] focus:ring-2 focus:ring-[#D92329]/40 focus:outline-none h-40 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#D92329] text-white font-medium px-10 py-3 rounded-md hover:bg-[#B71C1F] active:scale-95 transition ml-auto mt-8"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
