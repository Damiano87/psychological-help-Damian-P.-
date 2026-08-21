import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="font-roboto grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-teal-400">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Strona nie istnieje
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Przepraszamy, nie udało nam się odnaleźć szukanej strony. Sprawdź
            adres lub wróć do strony głównej.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-600 duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              Przejdź na stronę główną
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
