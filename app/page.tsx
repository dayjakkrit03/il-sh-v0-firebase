import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { ProductGrid } from "@/components/product-grid"
import { FlashSale } from "@/components/flash-sale"
import { InterlinkMall } from "@/components/interlink-mall"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <ProductGrid />
      <FlashSale />
      <InterlinkMall />
      <Footer />
    </div>
  )
}
