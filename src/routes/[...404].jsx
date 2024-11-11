import { A } from "@solidjs/router";
import Footer from "~/components/Footer";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700">
                <section className="relative pt-24 pb-28 bg-black overflow-hidden">
  <div className="relative z-10 container mx-auto px-4">
    <h2 className="mb-12 max-w-lg mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-white">You appear lost</h2>
    <div className="mb-9 md:max-w-lg mx-auto">
      <div className="p-1 flex flex-col md:flex-row bg-white focus-within:ring-4 focus-within:ring-indigo-500 overflow-hidden rounded-md">
        <input className="block flex-1 px-5 py-4 md:py-0 text-base text-gray-500 bg-transparent outline-none placeholder-gray-500 rounded-tl-xl rounded-bl-xl" type="text" placeholder="Enter email to get started" />
        <button className="group relative font-heading font-semibold w-full md:w-auto py-5 px-8 text-xs text-white bg-gray-900 uppercase overflow-hidden rounded-md tracking-px">
          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500 bg-gradient-fuchsia" />
          <p className="relative z-10">Connect now</p>
        </button>
      </div>
    </div>
    <p className="text-gray-500 text-sm text-center"><span>Or, learn more </span><a className="text-white hover:text-gray-200" href="/">about Valsan Tech</a></p>
  </div><img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="assets/contact/radial.svg" alt />
</section>
      <Footer />

    </main>
  );
}
