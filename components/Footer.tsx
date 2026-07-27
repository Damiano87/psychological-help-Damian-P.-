import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full transition-colors duration-300 font-jost uppercase tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-600 text-center">
          <span>
            Miejsce Spotkań ZMIANA | Damian Piwowarczyk &copy;{" "}
            {new Date().getFullYear()}. All Rights Reserved
          </span>
          {/* <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">
            |
          </span>
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
          >
            Regulamin i Polityka Prywatności
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
