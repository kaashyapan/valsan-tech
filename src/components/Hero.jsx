export default function Hero() {
  return (
      <section id="about" className="relative pt-8 bg-gradient-white background-animate overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap items-center -m-6 pt-32 lg:pt-0 pb-24">
            <div className="w-full lg:w-1/2 p-6">
              <div className="lg:max-w-xl">
                <h1 className="mb-8 font-heading text-8xl md:text-10xl text-gray-900 font-bold">Delight your customers with our support services</h1>
                <p className="mb-10 text-gray-600 text-xl">We are a Business Process Outsourcing firm committed to deliver our client’s strategic goals and enhance their business operations.
                </p>
                <p className="mb-2.5 font-heading font-semibold text-gray-900 text-lg">Trusted by top companies</p>
                <div className="flex m-2.5 mb-20">
                  <div className="w-auto p-2.5"><a href="#" /><img src="assets/logos/brand-light3.png" alt /></div>
                  <div className="w-auto p-2.5"><a href="#" /><img src="assets/logos/brand-light4.png" alt /></div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6"><img className="block mx-auto" src="assets/hero/bpo_bulb.png" alt /></div>
          </div>
        </div>
        <img className="absolute bottom-0 left-0" src="assets/hero/gradient.png" />
      </section>
  );
}
