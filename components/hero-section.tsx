import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="bg-secondary/20 text-secondary-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded-full inline-block mb-4 text-xs lg:text-sm">
              ✨ Electronics Sale เริ่มต้นแล้ว
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-balance leading-tight">
              ซื้อปลอนไลน์
              <br />
              ง่ายๆ ที่ Interlink
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 lg:mb-8 text-primary-foreground/90 text-pretty max-w-lg mx-auto lg:mx-0">
              อุปกรณ์เครือข่ายคุณภาพสูง ส่งฟรี ทั่วไทย สำหรับ ออเดอร์ 24 ชม.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm lg:text-base"
              >
                ช้อปเลย
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-sm lg:text-base"
              >
                ดูสินค้าทั้งหมด
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative max-w-md lg:max-w-none">
              <img
                src="/networking-equipment-cables-switches-routers.jpg"
                alt="อุปกรณ์เครือข่าย"
                className="rounded-lg shadow-2xl w-full h-auto max-w-sm lg:max-w-none"
              />
              <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-card text-card-foreground p-3 lg:p-4 rounded-lg shadow-lg">
                <div className="text-xl lg:text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs lg:text-sm">บริการลูกค้า</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
