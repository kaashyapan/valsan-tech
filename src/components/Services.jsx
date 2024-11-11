export default function Hero() {
  return (
  <section id="services" className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="mb-6 max-w-xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">We have expertise across domains</h2>
        <p className="mb-16 max-w-lg mx-auto text-center text-gray-600 text-lg">Our Leadership team is led by industry veterans with many years of service working with industry leading firms</p>
        <div className="flex flex-wrap m-8">
          <div className="w-full md:w-1/3 p-8">
              <div className="mb-9 overflow-hidden rounded-2xl"><img className="transform hover:scale-110 w-full transition ease-out duration-500" src="assets/debt.jpg" alt /></div>
              <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">Debt Recovery & Collections</h3>
              <p className="mb-5 text-gray-600 text-base">Debt Recovery and collections</p>
              <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" /></div>
          <div className="w-full md:w-1/3 p-8">
              <div className="mb-9 overflow-hidden rounded-2xl"><img className="transform hover:scale-110 w-full transition ease-out duration-500" src="assets/customer-services.jpg" alt /></div>
              <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">Call center Service</h3>
              <p className="mb-5 text-gray-600 text-base">Customer acquisition and Sales leads</p>
              <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" /></div>
          <div className="w-full md:w-1/3 p-8">
              <div className="mb-9 overflow-hidden rounded-2xl"><img className="transform hover:scale-110 w-full transition ease-out duration-500" src="assets/payroll.jpeg" alt /></div>
              <h3 className="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline">Backoffice & Payroll</h3>
              <p className="mb-5 text-gray-600 text-base">Backoffice & Payroll</p>
              <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500" /></div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-md mx-auto mb-20">
          <h2 className="mb-5 font-heading font-semibold text-center text-5xl sm:text-6xl text-gray-900">Grow fast, with us</h2>
          <p className="text-base text-center text-gray-600">Keep your customers happy and satisfied at all times with our Customer Support Services</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center -m-6 md:-m-16 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="w-full md:w-1/2 p-6 md:p-16">
              <h2 className="mb-3 font-heading font-bold text-12xl sm:text-13xl md:text-14xl xl:text-15xl text-center text-transparent bg-clip-text bg-gradient-blue">98%</h2>
              <h3 className="mb-3 font-heading font-semibold text-center text-gray-900 text-lg">Average Satisfaction Rate</h3>
              <p className="text-center text-gray-600">We consistently score high on customer KPIs</p>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-16">
              <h2 className="mb-3 font-heading font-bold text-12xl sm:text-13xl md:text-14xl xl:text-15xl text-center text-transparent bg-clip-text bg-gradient-purple">117%</h2>
              <h3 className="mb-3 font-heading font-semibold text-center text-gray-900 text-lg">Average Conversion Rate</h3>
              <p className="text-center text-gray-600">Customer satisfaction is the ultimate KPI</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
