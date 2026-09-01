"use client";

import { motion } from "framer-motion";
import ContactForm from "../ContactForm";
import { ComponentType, SVGProps } from "react";
import { AddressIcon, EmailIcon, PhoneIcon } from "./Icons";

type ContactCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function ContactHeader() {
  return (
    <>
      <span className="text-sm font-semibold uppercase tracking-widest text-teal-600 font-roboto">
        Skontaktuj się
      </span>
      <h1 className="text-3xl sm:text-5xl font-bold font-jost text-neutral-900 mt-3 mb-4">
        Formularz kontaktowy
      </h1>
      <p className="text-neutral-600 max-w-xl mx-auto font-roboto leading-relaxed">
        Wypełnij formularz, a skontaktuję się z Tobą najszybciej jak to możliwe.
        Możesz również zadzwonić lub napisać bezpośrednio.
      </p>
    </>
  );
}

function ContactCard({ icon: Icon, title, description }: ContactCardProps) {
  return (
    <div className="flex md:basis-80 items-center gap-4 bg-white rounded-2xl border border-neutral-100 shadow-md p-5">
      <span className="shrink-0 w-11 h-11 rounded-full bg-teal-100 text-teal-400 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <p className="text-xs text-neutral-500 font-roboto">{title}</p>
        <p className="text-sm sm:text-base font-semibold text-neutral-800 font-roboto whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}

const ContactContent = () => {
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
          <ContactHeader />
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-10"
        >
          <ContactCard
            icon={PhoneIcon}
            title="Telefon"
            description="+48 881 720 676"
          />

          <ContactCard
            icon={EmailIcon}
            title="E-mail"
            description="dampiwowarczyk@gmail.com"
          />

          <ContactCard
            icon={AddressIcon}
            title="Adres"
            description={`Ostrowiec Świętokrzyski, \nul. Sandomierska 26A, \nIII piętro pok. 3.29`}
          />
        </motion.div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactContent;
