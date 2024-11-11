export default function Hero() {
  return (
  <section id="contact" className="relative py-36 bg-black overflow-hidden"><img className="absolute left-0 bottom-0" src="assets/contact/radial2.svg" alt />
  <div className="relative z-10 container mx-auto px-4">
    <div className="flex flex-wrap -m-6">
      <div className="w-full md:w-1/2 p-6">
        <div className="md:max-w-lg mb-14">
          <h2 className="mb-7 font-heading font-semibold text-6xl sm:text-7xl text-white">Get in touch</h2>
          <p className="text-gray-400 text-lg">We’d love to hear about your current business needs and where you’re headed</p>
        </div>
        <div className="flex flex-wrap -m-10">
          <div className="w-full p-10">
            <div className="md:max-w-xs">
              <h3 className="mb-4 font-heading font-medium text-xl text-white">Sales</h3>
              <p className="text-lg text-gray-400">info@valsan-tech.com</p>
              <p className="text-lg text-gray-400">+91 99538 93995</p>
            </div>
          </div>
          <div className="w-full p-10">
            <div className="md:max-w-xs">
              <h3 className="mb-4 font-heading font-medium text-xl text-white">Support</h3>
              <p className="text-lg text-gray-400">support@valsan-tech.com</p>
              <p className="text-lg text-gray-400">+91 99538 93995</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <div className="p-8 max-w-lg mx-auto bg-gray-800 rounded-10">
          <div className="flex flex-wrap max-w-xl mx-auto">
            <div className="w-full mb-5">
              <input className="w-full px-5 py-4 text-gray-400 text-base bg-transparent border border-gray-700 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-400 rounded" type="text" placeholder="Your full name" />
            </div>
            <div className="w-full mb-5">
              <input className="w-full px-5 py-4 text-gray-400 text-base bg-transparent border border-gray-700 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-400 rounded" type="text" placeholder="Your email address" />
            </div>
            <div className="w-full mb-5">
              <textarea className="w-full h-40 px-5 py-4 text-gray-400 text-base bg-transparent border border-gray-700 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-400 resize-none rounded" type="text" placeholder="Write message" defaultValue={""} />
            </div>
            <div className="w-full mb-5">
              <div className="group relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-cyan2 opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300" />
                <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                  <div className="relative p-5 px-11 bg-gradient-cyan2 overflow-hidden rounded-md">
                    <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                    <p className="relative z-10">Send message</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full">
              <p className="max-w-xs mx-auto text-sm text-gray-400 text-center">By clicking the send button, you agree with our Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
