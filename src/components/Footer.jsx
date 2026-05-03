function Footer() {
  return (
    <>
      <div className="w-full h-[2px] bg-red-800"></div>
      <div className="p-5 z-50 bg-sky-100 text-3xl backdrop-blur-sm border-b border-slate-200 shadow-sm  flex flex-col md:flex-row justify-around">
        <div>
          <h1 className="sm:text-3xl mb-5 text-black text-2xl ">Contact</h1>
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
          <h1 className="sm:text-3xl mb-5 text-black text-2xl">
            Opening Hours
          </h1>
          <h3 className="sm:text-xl text-slate-600 text-xl">
            Monday - Sunday : 24 hours / 7 days (including holidays)
          </h3>
        </div>
      </div>
      <div>
        <div className="w-full h-[2px] bg-red-800"></div>
        <div className="text-center text-2xl pt-4 pb-2 bg-sky-100 text-slate-600 text-sm">
          © 2026 Hospital El-Amel . All rights reserved.
        </div>
      </div>
    </>
  );
}
export default Footer;
