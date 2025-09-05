import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground px-2 py-1.5 lg:px-3 lg:py-2 rounded font-bold text-sm lg:text-base">
                Interlink Shop
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              ผู้จำหน่ายอุปกรณ์เครือข่ายและอิเล็กทรอนิกส์ชั้นนำ มีสินค้าคุณภาพสูงและบริการหลังการขายที่ดีเยี่ยม
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded hover:bg-pink-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded hover:bg-blue-500 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 lg:mb-4 text-white text-sm lg:text-base">ลิงก์ด่วน</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  สินค้าทั้งหมด
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  โปรโมชั่น
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ข่าวสาร
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold mb-3 lg:mb-4 text-white text-sm lg:text-base">หมวดหมู่สินค้า</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  สายแลน (LAN Cable)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  สวิตช์ (Switch)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  อุปกรณ์เครือข่าย
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ไฟเบอร์ออปติก
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  อุปกรณ์รักษาความปลอดภัย
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-3 lg:mb-4 text-white text-sm lg:text-base">ติดต่อเรา</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-gray-300">123/45 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">02-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@interlink.co.th</span>
              </div>
            </div>

            <div className="mt-4 lg:mt-6">
              <h4 className="font-medium mb-2 text-white text-sm">เวลาทำการ</h4>
              <p className="text-gray-300 text-sm">
                จันทร์ - ศุกร์: 9:00 - 18:00
                <br />
                เสาร์: 9:00 - 16:00
                <br />
                อาทิตย์: ปิด
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4 text-xs lg:text-sm text-gray-400">
            <div className="text-center sm:text-left">© 2024 Interlink Shop ห้างหุ้นส่วนจำกัด สงวนลิขสิทธิ์</div>
            <div className="flex gap-4 lg:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="hover:text-white transition-colors">
                เงื่อนไขการใช้งาน
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
