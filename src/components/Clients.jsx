export default function Clients() {
  return (
  <section id="clients" className="pt-28 pb-32 bg-black overflow-hidden">
  <div className="container mx-auto px-4">
    <p className="mb-16 font-heading font-semibold text-6xl sm:text-7xl text-white text-center">Trusted by leading corporates</p>
    <div className="flex flex-wrap justify-center items-center -m-10 pb-10 border-b border-gray-800">
      <div className="w-auto p-10"><img src="assets/logos/brand-light4.png" alt /></div>
      <div className="w-auto p-10"><img src="assets/logos/brand-light1.png" alt /></div>
      <div className="w-auto p-10"><img src="assets/logos/brand-light2.png" alt /></div>
      <div className="w-auto p-10"><img src="assets/logos/brand-light3.png" alt /></div>
    </div>
    <div className="mt-24 max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center -m-1 mb-10"><img className="p-1" src="assets/logos/star.svg" alt /><img className="p-1" src="assets/logos/star.svg" alt /><img className="p-1" src="assets/logos/star.svg" alt /><img className="p-1" src="assets/logos/star.svg" alt /><img className="p-1" src="assets/logos/star.svg" alt /></div>
      <p className="mb-5 text-xl text-gray-300">“You made it so simple. Our recoveries have improved 12x and efficiency is 1.5x.”</p>
      <p className="font-heading text-xl text-white">K.Ramamoorthy, Manager at Cholamandalam</p>
    </div>
  </div>
</section>

  );
}
