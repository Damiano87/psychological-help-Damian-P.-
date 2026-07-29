"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-teal-50 to-white min-h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-roboto">
            Skontaktuj się
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-jost text-neutral-900 mt-3 mb-4">
            Formularz kontaktowy
          </h1>
          <p className="text-neutral-600 max-w-xl mx-auto font-roboto leading-relaxed">
            Wypełnij formularz, a skontaktuję się z Tobą najszybciej jak to
            możliwe. Możesz również zadzwonić lub napisać bezpośrednio.
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <div className="flex-1 flex items-center gap-4 bg-white rounded-2xl border border-neutral-100 shadow-md p-5">
            <span className="shrink-0 w-11 h-11 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs text-neutral-500 font-roboto">Telefon</p>
              <p className="text-base font-semibold text-neutral-800 font-roboto">
                +48 881 720 676
              </p>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-4 bg-white rounded-2xl border border-neutral-100 shadow-md p-5">
            <span className="shrink-0 w-11 h-11 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <div>
              <p className="text-xs text-neutral-500 font-roboto">E-mail</p>
              <p className="text-[.85rem] sm:text-base font-semibold text-neutral-800 font-roboto">
                dampiwowarczyk@gmail.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
