export default function AboutSection() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pt-12 !pb-0 ">
      <div data-aos="fade-up" className="flex items-center gap-3 mb-2">
        <div className="w-10 h-[2px] bg-red-900"></div>
        <h1 className="text-black text-2xl sm:text-3xl font-bold">About Us</h1>
      </div>

      {/* DESCRIPTION */}
      <p
        className="text-gray-600 mb-5 text-base sm:text-lg leading-relaxed max-w-2xl"
        data-aos="fade-up"
      >
        We provide high-quality healthcare with experienced doctors and modern
        technology.
      </p>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 gap-6">
        {/* LEFT */}
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 ">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Founded in 2008, Hospital El-Amel was created with a clear mission:
            to make quality healthcare accessible, reliable, and
            patient-centered. From the very beginning, we focused on combining
            medical expertise with human care to ensure every patient feels safe
            and supported.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Over the years, we have grown into a modern healthcare institution
            offering Cardiology, Pediatrics, Dentistry, Gynecology, and
            Neurology.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Today, we continue to evolve with 24/7 emergency care, online
            appointments, fast laboratory services, and patient support.
          </p>
        </div>
      </div>
    </div>
  );
}
