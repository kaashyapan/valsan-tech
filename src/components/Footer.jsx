export default function Footer() {
  return (
      <section className="relative py-12 bg-black overflow-hidden">
      <img className="absolute bottom-0 right-0" src="assets/contact/radial.svg" alt />
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap lg:items-center m-6">
      <div className="w-48 p-6">
                <img src="assets/valsan_logo.svg" alt /></div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-wrap -m-5">
          <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="/#about">About</a></li>
          <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="/#industries">Industries</a></li>
          <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="/#services">Services</a></li>
          <li className="p-5"><a className="font-heading text-base text-white hover:text-gray-200" href="/#clients">Clients</a></li>
        </ul>
      </div>
      <div className="w-auto md:ml-auto p-6">
        <div className="flex flex-wrap items-center -m-1.5">
          <div className="w-auto p-1.5">
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="w-auto p-1.5">
            <h3 className="font-heading font-medium text-base text-white">info@valsan-tech.com</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="py-9">
      <div className="border-b border-gray-400" />
    </div>
    <div className="flex flex-wrap items-center justify-between -m-6">
      <div className="w-auto p-6">
        <p className="text-sm text-gray-300">© Copyright 2024. All Rights Reserved by Valsan Tech.</p>
      </div>
      <div className="w-auto p-6">
        <div className="flex flex-wrap -m-6">
          <div className="w-auto p-6"><a className="text-gray-300 hover:text-gray-400 text-sm" href="/privacy">Privacy Policy</a></div>
          <div className="w-auto p-6"><a className="text-gray-300 hover:text-gray-400 text-sm" href="/terms">Terms &amp; Conditions</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
