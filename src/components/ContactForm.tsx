"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

export default function ContactForm() {
  const { t } = useI18n();
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
      `${t.contactForm.greeting} ${form.name} (${form.email}). ${form.message}`
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
          placeholder={t.contactForm.name}
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder={t.contactForm.email}
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder={t.contactForm.phone}
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
      />
      <input
        type="text"
        name="company"
        placeholder={t.contactForm.company}
        value={form.company}
        onChange={handleChange}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder={t.contactForm.message}
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
        {t.contactForm.submit}
      </button>
    </div>
  );
}
