function ContactForm() {
  return (
    <div className="bg-transparent text-black flex flex-col lg:flex-row lg:justify-around gap-10 p-5">
      {/* Left Side (Title + Subtitle) */}
      <div className="w-full lg:w-1/2 pl-8">
        <div className="flex items-center gap-3 pt-10">
          <div className="w-10 h-[2px] bg-red-900"></div>
          <h1 className="text-black text-3xl sm:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
        <p className="text-gray-600 mt-2 sm:text-2xl">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>
      {/* Form */}
      <form className="bg-transparent p-6 rounded-xl w-full max-w-lg flex flex-col gap-4">
        {/* First + Last Name */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="bg-#cfe9f0 text-black border border-gray-600 py-3 rounded-lg font-semibold 
                     hover:bg-gray-400 hover:scale-105 
                     transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
