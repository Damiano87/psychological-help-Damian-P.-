import { containerVariants, itemVariants } from "@/lib/constants";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const errors = {
    name:
      touched.name && !formData.name.trim()
        ? "Imię i nazwisko jest wymagane"
        : "",
    email:
      touched.email && !formData.email.trim()
        ? "Adres e-mail jest wymagany"
        : touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Podaj poprawny adres e-mail"
          : "",
    message:
      touched.message && !formData.message.trim()
        ? "Wiadomość jest wymagana"
        : "",
  };

  const isValid =
    formData.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    if (name in touched) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;

    setStatus("sending");

    // TODO: Podłączyć faktyczne wysyłanie formularza (np. API route, email service)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
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
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Jan Kowalski"
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
            errors.name
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
              : "border-neutral-200 focus:ring-teal-500/40 focus:border-teal-500"
          }`}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-500 font-roboto">
            {errors.name}
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
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="jan@example.com"
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
            errors.email
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
              : "border-neutral-200 focus:ring-teal-500/40 focus:border-teal-500"
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-500 font-roboto">
            {errors.email}
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
          value={formData.phone}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="W czym mogę Ci pomóc?"
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 font-roboto placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all duration-200 resize-y min-h-30 ${
            errors.message
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400"
              : "border-neutral-200 focus:ring-teal-500/40 focus:border-teal-500"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-500 font-roboto">
            {errors.message}
          </p>
        )}
      </motion.div>

      {/* Submit button */}
      <motion.div variants={itemVariants} className="pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto px-10 py-3.5 rounded-full text-base font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-roboto"
        >
          {status === "sending" ? (
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
      {status === "success" && (
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

      {status === "error" && (
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
