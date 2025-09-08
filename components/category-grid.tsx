
const categories = [
  { id: "lan-cable", name: "LAN CABLE", image: "/category_pic/lan-cable.png" },
  { id: "fiber-optic", name: "FIBER OPTIC", image: "/category_pic/fiber-optic.png" },
  { id: "ethernet-cable", name: "ETHERNET CABLE", image: "/category_pic/ethernet-cable.png" },
  { id: "data-center", name: "DATA CENTER", image: "/category_pic/data-center.png" },
  { id: "coaxial-rg6", name: "COAXIAL RG6", image: "/category_pic/coaxial.png" },
  { id: "telephone-cable", name: "Telephone CABLE", image: "/category_pic/telephone-cable.png" },
  { id: "solar-cable", name: "SOLAR CABLE", image: "/category_pic/solar-cable.png" },
  { id: "security-control", name: "SECURITY AND CONTROL", image: "/category_pic/security-control.png" },
];

export function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800">
            หมวดหมู่สินค้า
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            ค้นหาสินค้าตามหมวดหมู่ที่คุณต้องการ เพื่อความสะดวกในการเลือกซื้อ
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-y-8 gap-x-4">
          {categories.map((category) => (
            <a href="#" key={category.id} className="group block text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md overflow-visible">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 scale-150 group-hover:scale-[2] group-hover:rotate-3"
                />
              </div>
              <h3 className="font-semibold text-xs md:text-sm text-gray-700 group-hover:text-blue-600">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
