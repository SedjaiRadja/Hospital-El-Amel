function Footer() {
  return (
    <>
      <div className="w-full h-[1px] bg-slate-800"></div>
      <div className="p-5 z-50 bg-white/200 text-3xl backdrop-blur-sm border-t border-slate-200 shadow-sm flex flex-col md:flex-row justify-around">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
            Contact
          </h1>
          <h3 className="sm:text-xl text-slate-600 text-xl">
            Akid Lotfi ,Oran ,Algeria
          </h3>
          <h4 className="sm:text-xl text-slate-600 text-xl">
            +213.721.31.67.59
          </h4>
          <h4 className="sm:text-xl text-slate-600 text-xl">
            hospital.elamel@gmail.com
          </h4>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 lg:text-3xl">
            Opening Hours
          </h1>
          <h3 className="sm:text-xl text-slate-600 text-xl">
            Monday - Sunday : 24 hours / 7 days (including holidays)
          </h3>
        </div>
      </div>
      <div>
        <div className="w-full h-[1px] bg-slate-300"></div>

        <div className="text-center py-4 bg-white/200 backdrop-blur-sm text-slate-600 text-sm shadow-sm">
          © 2026 Hospital El-Amel . All rights reserved.
        </div>
      </div>
    </>
  );
}
export default Footer;
