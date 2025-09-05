"use client"

import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/20 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs lg:text-sm">
            <div className="flex items-center gap-2 lg:gap-4">
              <span>📞 02-123-4567</span>
              <span className="hidden lg:inline">📧 info@interlink.co.th</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="hidden lg:inline">ติดตามเรา:</span>
              <div className="flex gap-1 lg:gap-2">
                <span>📘</span>
                <span>📷</span>
                <span>🐦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-white text-primary px-2 py-1 lg:px-3 lg:py-2 rounded font-bold text-sm lg:text-base">
              Interlink Shop
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <Input
                placeholder="ค้นหาสินค้า..."
                className="w-full pl-4 pr-12 py-2 bg-white text-foreground text-sm lg:text-base"
              />
              <Button size="sm" className="absolute right-1 top-1 bg-secondary hover:bg-secondary/90">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <User className="h-4 w-4 lg:h-5 lg:w-5 lg:mr-2" />
              <span className="hidden lg:inline">เข้าสู่ระบบ</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10 relative"
            >
              <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5 lg:mr-2" />
              <span className="hidden lg:inline">ตรวจสอบ</span>
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center text-[10px] lg:text-xs">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary-foreground text-foreground border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 py-3 lg:py-4 text-sm lg:text-base">
                    <Menu className="h-4 w-4" />
                    <span className="hidden sm:inline">หมวดหมู่สินค้า</span>
                    <span className="sm:hidden">หมวดหมู่</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem>สายแลน (LAN Cable)</DropdownMenuItem>
                  <DropdownMenuItem>สวิตช์ (Switch)</DropdownMenuItem>
                  <DropdownMenuItem>อุปกรณ์เครือข่าย</DropdownMenuItem>
                  <DropdownMenuItem>อุปกรณ์รักษาความปลอดภัย</DropdownMenuItem>
                  <DropdownMenuItem>อุปกรณ์ไฟเบอร์ออปติก</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href="#" className="py-4 hover:text-primary transition-colors text-sm xl:text-base">
                หน้าแรก
              </a>
              <a href="#" className="py-4 hover:text-primary transition-colors text-sm xl:text-base">
                สินค้าใหม่
              </a>
              <a href="#" className="py-4 hover:text-primary transition-colors text-sm xl:text-base">
                โปรโมชั่น
              </a>
              <a href="#" className="py-4 hover:text-primary transition-colors text-sm xl:text-base">
                เกี่ยวกับเรา
              </a>
              <a href="#" className="py-4 hover:text-primary transition-colors text-sm xl:text-base">
                ติดต่อเรา
              </a>
            </div>

            <div className="text-xs lg:text-sm text-muted-foreground hidden md:block">
              <span className="lg:hidden">02-123-4567</span>
              <span className="hidden lg:inline">โทร: 02-123-4567</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
