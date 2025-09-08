import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Interlink Shop */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/interlink-logo.png" alt="Interlink Shop Logo" className="h-8 w-auto mr-3"/>
              <span className="text-white font-bold text-xl">Interlink Shop</span>
            </div>
            <p className="text-sm mb-4">
              ผู้จัดจำหน่ายอุปกรณ์เครือข่ายชั้นนำของไทย พร้อมให้บริการลูกค้าด้วยสินค้าคุณภาพสูง
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">ฝ่ายบริการลูกค้า</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">ศูนย์ช่วยเหลือ</a></li>
              <li><a href="#" className="hover:text-white">วิธีการซื้อ</a></li>
              <li><a href="#" className="hover:text-white">การชำระเงิน</a></li>
              <li><a href="#" className="hover:text-white">ข้อกำหนดและเงื่อนไข</a></li>
              <li><a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">เกี่ยวกับเรา</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">เกี่ยวกับ Interlink</a></li>
              <li><a href="#" className="hover:text-white">ร่วมงานกับเรา</a></li>
              <li><a href="#" className="hover:text-white">ข่าวสาร</a></li>
              <li><a href="#" className="hover:text-white">บทความเทคนิค</a></li>
              <li><a href="#" className="hover:text-white">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">ติดต่อเรา</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-gray-400"/>
                <span>123/45 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-gray-400"/>
                <span>02-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-gray-400"/>
                <span>info@interlink.co.th</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">เวลาทำการ</h4>
              <div className="text-sm">
                <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
                <p>เสาร์: 9:00 - 16:00</p>
                <p>อาทิตย์: ปิด</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p className="mb-2 md:mb-0">© 2024 Interlink Shop สงวนลิขสิทธิ์</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="hover:text-white">เงื่อนไขการใช้งาน</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
