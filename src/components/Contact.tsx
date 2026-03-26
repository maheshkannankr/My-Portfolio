'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      
      {/* 🔥 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-16 text-center"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* 📍 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <p className="text-gray-600">
            I’m open to opportunities, collaborations, or just a friendly chat.
            Feel free to reach out anytime.
          </p>

          {/* Contact Items */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span>maheshkannankr@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 97889 79892</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Anthiyur, Erode, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-4">
            <a className="px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              LinkedIn
            </a>
            <a className="px-4 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 🧊 RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div
            className="
              relative
              px-6 py-6
              rounded-2xl

              bg-white/5
              backdrop-blur-xl

              border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            "
          >
            <form className="space-y-5">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 border border-white/10
                  outline-none
                  focus:ring-2 focus:ring-primary/40
                "
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 border border-white/10
                  outline-none
                  focus:ring-2 focus:ring-primary/40
                "
              />

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Your Message"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 border border-white/10
                  outline-none
                  focus:ring-2 focus:ring-primary/40
                "
              />

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full py-3 rounded-xl
                  bg-primary text-white font-medium
                  hover:opacity-90 transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}