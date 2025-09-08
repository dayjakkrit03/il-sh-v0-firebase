const stores = [
  {
    name: "CB Cotton IT Store",
    category: "IT & Network Solutions",
    image: "/store-cb-cotton.jpg",
    logoChar: "C",
  },
  {
    name: "CORRETTO SUITE",
    category: "Enterprise IT Equipment",
    image: "/store-combito.jpg",
    logoChar: "C",
  },
  {
    name: "Thailand Tech Plaza",
    category: "Network & Server Solutions",
    image: "/store-thailand-tech.jpg",
    logoChar: "T",
  },
  {
    name: "IN2IT Computer",
    category: "Colorful Tech Solutions",
    image: "/store-noit.jpg",
    logoChar: "I",
  },
  {
    name: "Smart Tech Shop",
    category: "Smart IT Solutions",
    image: "/store-smart-tech.jpg",
    logoChar: "S",
  },
  {
    name: "Quiescent Systems",
    category: "Professional IT Hardware",
    image: "/store-discount.jpg",
    logoChar: "Q",
  },
]

export function InterlinkMall() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">InterlinkMall</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-base">
            Shop More &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stores.map((store, index) => (
            <div key={index} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-auto aspect-[4/3] object-cover block"
                />
                <div className="absolute bottom-2 left-2 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md">
                  <span className="font-bold text-gray-700 text-sm">{store.logoChar}</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 truncate">{store.name}</h3>
                <p className="text-xs text-gray-500 truncate">{store.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
