"use client";

import { containerVariants, itemVariants } from "@/lib/constants";
import { motion } from "framer-motion";
import { useActionState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactSchema } from "./contactSchema";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

const initialState: FormState = {
  status: "idle",
  errors: {},
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // initialize emailjs
  useEffect(() => {
    emailjs.init({
      publicKey: PUBLIC_KEY,
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);

  // send email action
  async function contactAction(
    _prevState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    const raw = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(raw);

    if (!result.success) {
      return {
        status: "idle",
        errors: result.error.flatten().fieldErrors,
      };
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, result.data);
      formRef.current?.reset();
      return { status: "success", errors: {} };
    } catch {
      return { status: "error", errors: {} };
    }
  }

  const [state, formAction, pending] = useActionState(
    contactAction,
    initialState,
  );

  return (
    <motion.form
      ref={formRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      action={formAction}
      className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-6 sm:p-10 space-y-6"
    >
      {/* Name and Last Name */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-neutral-700 font-roboto mb-2"
        >
          Imię i nazwisko <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          placeholder="Jan Kowalski"
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
            state.errors.name
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
              : "border-neutral-200 focus:ring-teal-500/40 focus:border-teal-500"
          }`}
        />
        {state.errors.name && (
          <p className="mt-1.5 text-sm text-red-500 font-roboto">
            {state.errors.name[0]}
          </p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="contact-email"
          className="block text-sm font-semibold text-neutral-700 font-roboto mb-2"
        >
          Adres e-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          placeholder="jan@example.com"
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
            state.errors.email
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
              : "border-neutral-200 focus:ring-teal-500/40 focus:border-teal-500"
          }`}
        />
        {state.errors.email && (
          <p className="mt-1.5 text-sm text-red-500 font-roboto">
            {state.errors.email[0]}
          </p>
        )}
      </motion.div>

      {/* Telefon (opcjonalny) */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-semibold text-neutral-700 font-roboto mb-2"
        >
          Telefon{" "}
          <span className="text-neutral-400 font-normal">(opcjonalnie)</span>
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          placeholder="+48 123 456 789"
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all duration-200"
        />
      </motion.div>

      {/* Wiadomość */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-neutral-700 font-roboto mb-2"
        >
          Wiadomość <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="W czym mogę Ci pomóc?"
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-y min-h-30 ${
            state.errors.message
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
              : "border-neutral-200 focus:ring-teal-500/40 focus:border-teal-500"
          }`}
        />
        {state.errors.message && (
          <p className="mt-1.5 text-sm text-red-500 font-roboto">
            {state.errors.message[0]}
          </p>
        )}
      </motion.div>

      {/* Submit button */}
      <motion.div variants={itemVariants} className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto px-10 py-3.5 rounded-full text-base font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-roboto"
        >
          {pending ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Wysyłanie…
            </span>
          ) : (
            "Wyślij wiadomość"
          )}
        </button>
      </motion.div>

      {/* Status messages */}
      {state.status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-roboto text-sm"
        >
          <svg
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Wiadomość została wysłana pomyślnie! Skontaktuję się z Tobą wkrótce.
        </motion.div>
      )}

      {state.status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-roboto text-sm"
        >
          <svg
            className="h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się
          telefonicznie.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
