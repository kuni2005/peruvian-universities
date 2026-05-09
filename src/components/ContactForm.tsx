"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola, soy ${form.name} (${form.email}). ${form.message}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full border-b border-neutral-300 py-3 text-sm font-body bg-transparent placeholder:text-neutral-400 focus:outline-none focus:border-pu-dark transition-colors";

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Contact number"
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="text"
        name="company"
        placeholder="Company name"
        value={form.company}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className={`${inputClass} resize-none`}
      />
      <button
        type="button"
        onClick={handleWhatsApp}
        className="bg-neutral-900 text-white font-condensed font-bold uppercase text-sm px-8 py-3 rounded-full hover:bg-pu-dark transition-colors"
      >
        Escríbenos por WhatsApp
      </button>
    </div>
  );
}
