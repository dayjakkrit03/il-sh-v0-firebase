import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: "lan-cable",
    name: "LAN CABLE",
    image: "/category-lan-cable.jpg",
    textColor: "text-blue-600",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "fiber-optic",
    name: "FIBER OPTIC",
    image: "/category-fiber-optic.jpg",
    textColor: "text-orange-500",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "ethernet-cable",
    name: "ETHERNET CABLE",
    image: "/category-ethernet-cable.jpg",
    textColor: "text-red-500",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "data-center",
    name: "DATA CENTER",
    image: "/category-data-center.jpg",
    textColor: "text-green-600",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "coaxial-rg6",
    name: "COAXIAL RG6",
    image: "/category-coaxial-rg6.jpg",
    textColor: "text-purple-600",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "telephone-cable",
    name: "Telephone CABLE",
    image: "/category-telephone-cable.jpg",
    textColor: "text-indigo-600",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "solar-cable",
    name: "SOLAR CABLE",
    image: "/category-solar-cable.jpg",
    textColor: "text-red-600",
    textSize: "text-xs sm:text-sm",
  },
  {
    id: "security-control",
    name: "SECURITY AND CONTROL",
    image: "/category-security-control.jpg",
    textColor: "text-pink-600",
    textSize: "text-xs sm:text-sm",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 text-foreground">หมวดหมู่สินค้า</h2>
        <p className="text-center text-muted-foreground mb-12 text-sm md:text-base">
          ค้นหาสินค้าตามหมวดหมู่ที่คุณต้องการ เพื่อความสะดวกในการเลือกซื้อ
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-card overflow-hidden"
            >
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 group-hover:rotate-3 transition-transform duration-300">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className={`font-medium leading-tight ${category.textColor} ${category.textSize}`}>
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
