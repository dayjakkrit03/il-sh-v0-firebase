import { Card, CardContent } from "@/components/ui/card"

const mallStores = [
  {
    name: "CB Cotton IT Store",
    image: "/store-cb-cotton.jpg",
    category: "คอมพิวเตอร์",
  },
  {
    name: "COMBITO SUITE",
    image: "/store-combito.jpg",
    category: "ซอฟต์แวร์",
  },
  {
    name: "Thailand Tech Plaza",
    image: "/store-thailand-tech.jpg",
    category: "เทคโนโลยี",
  },
  {
    name: "NOIT Computer",
    image: "/store-noit.jpg",
    category: "คอมพิวเตอร์",
  },
  {
    name: "Smart Tech Shop",
    image: "/store-smart-tech.jpg",
    category: "อุปกรณ์อัจฉริยะ",
  },
  {
    name: "Discount Systems",
    image: "/store-discount.jpg",
    category: "ระบบคอมพิวเตอร์",
  },
]

export function InterlinkMall() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">InterlinkMall</h2>
          <a href="#" className="text-primary hover:text-primary/80 font-medium text-sm md:text-base">
            Shop More →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mallStores.map((store, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={store.image || "/placeholder.svg"}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-sm text-card-foreground mb-1">{store.name}</h3>
                  <p className="text-xs text-muted-foreground">{store.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
