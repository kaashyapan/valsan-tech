/*
  import { useLocation } from "@solidjs/router";
  const location = useLocation();
  const active = (path) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  export default function Nav() {
    return (
      <nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
          <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
            <a href="/">Home</a>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
*/

export default function Nav() {
  return (
        <section className="relative bg-gradient-white background-animate overflow-hidden">
          <div className="flex items-center justify-between px-8 py-5">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-48 mr-14"><a href="#"><img src="assets/valsan_logo.svg" alt /></a></div>
                <div className="w-auto hidden lg:block">
                  <ul className="flex items-center mr-10">
                    <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a href="#about">About</a></li>
                    <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a href="#industries">Industries</a></li>
                    <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a href="#services">Services</a></li>
                    <li className="font-heading text-gray-900 hover:text-gray-700 text-lg"><a href="#clients">Clients</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <div className="flex flex-wrap">
                    <div className="w-auto">
                    </div>
                    <a href="#contact" className="w-auto">
                      <button className="group relative font-heading block py-2 px-5 text-lg text-gray-900 border-2 border-gray-900 overflow-hidden rounded-10">
                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500" />
                        <p className="relative z-10 group-hover:text-white">Contact Us</p>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="w-auto lg:hidden">
                  <button>
                    <svg className="text-gray-800" width={51} height={51} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width={56} height={56} rx={28} fill="currentColor" />
                      <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
