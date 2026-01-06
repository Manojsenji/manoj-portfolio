"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_c9qe2im", // ✅ Your EmailJS Service ID
        "template_3veay1g", // ✅ Your EmailJS Template ID
        formRef.current,
        "JCaYk5HSbWKeBmLU2" // ✅ Your Public Key
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (err) => {
          setError(true);
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <section id="contact" className="border-t border-softGray overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold  text-center mb-10 py-8">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4 text-gray-600 text-lg">
              <p className="flex items-center gap-3">
                <Mail className="text-primary" />
                manojsreenivas95@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-neutral-700" />
                +91 8179054207
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-primary" />
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl  p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition"
              />

              <button
                type="submit"
                className="relative overflow-hidden cursor-pointer py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 border border-gray-300 rounded-full group text-center mx-auto block transition-colors duration-300
             focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                  Send Message
                </span>
              </button>

              {/* Success / Error Messages */}
              {success && (
                <p className="text-green-600 font-medium text-center">
                  ✅ Message sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-600 font-medium text-center">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
