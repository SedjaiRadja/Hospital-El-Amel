import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white/200 text-3xl backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex w-full max-w-[1400px] lg:max-w-none flex-wrap items-center justify-around gap-4 px-6 py-4 lg:px-12 lg:py-5">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Hospital Logo"
              className="h-12 w-auto rounded-md shadow-sm lg:h-16"
            />
          </Link>

          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-slate-900 lg:text-3xl">
              Hospital El-Amel
            </p>
            <p className="text-sm text-slate-500 lg:text-base">
              Professional care
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-10 text-slate-900 text-base lg:text-lg font-medium lg:flex">
          <Link to="/" className="transition hover:text-slate-600">
            Home
          </Link>

          <Link to="/doctors" className="transition hover:text-slate-600">
            Doctors
          </Link>
          <Link to="/appointment" className="transition hover:text-slate-600">
            Appointment
          </Link>
          <Link to="/about" className="transition hover:text-slate-600">
            About
          </Link>
          <Link to="/contact" className="transition hover:text-slate-600">
            Contact
          </Link>
          <Link
            to="/signin"
            className="text-blue-900 text-base sm:text-xl transition hover:text-blue-700"
          >
            sign in
          </Link>
        </div>
      </div>
      <div className={`${isOpen ? "fixed" : "hidden"} inset-0 z-50 lg:hidden`}>
        <div
          className="absolute inset-0 bg-slate-900/40"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative mx-6 mt-[84px] max-h-[calc(100vh-84px)] overflow-auto rounded-3xl bg-white/98 p-4 shadow-2xl ring-1 ring-slate-200">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 text-base font-medium transition hover:bg-slate-50"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 text-base font-medium transition hover:bg-slate-50"
          >
            Doctors
          </Link>
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 text-base font-medium transition hover:bg-slate-50"
          >
            Appointment
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 text-base font-medium transition hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 text-base font-medium transition hover:bg-slate-50"
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className="block rounded-xl px-4 py-3 text-blue-900 text-base sm:text-xl transition hover:bg-slate-50 "
          >
            sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
