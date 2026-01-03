import { useEffect } from "react";
import { WishlistHeader } from "@/components/WishlistHeader";
import { WishlistGrid } from "@/components/WishlistGrid";
import { useWishlist } from "@/contexts/WishlistContext";

// Sample products to add to wishlist for demo
const sampleProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    title: "O-Cedar EasyWring Spin Mop & Bucket System with Foot Pedal Handle...",
    rating: 3.2,
    reviewCount: 452,
    soldCount: "1.3k+",
    price: 27.75,
    originalPrice: 41.40,
    savePercent: 17,
    offerEndsIn: "3h 45m",
    freeDeliveryMin: 50,
    deliveryDate: "Dec 22 - Jan 8",
    seller: "Karimax",
    badges: ["bestseller", "trending"] as ("bestseller" | "trending")[],
    colorVariants: ["#6B46C1", "#3B82F6", "#1E3A8A"],
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=400&h=400&fit=crop",
    title: "Electric Spin Scrubber - Cordless Cleaning Brush with Digital Display I...",
    rating: 4.1,
    reviewCount: 2300,
    soldCount: "736+",
    price: 45.23,
    originalPrice: 75.00,
    savePercent: 15,
    offerEndsIn: "1h 45m",
    stockLeft: 3,
    freeDeliveryMin: 50,
    deliveryDate: "Mon, Nov 29",
    seller: "ElectroSLab Company",
    badges: ["bestseller"] as ("bestseller" | "trending")[],
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    title: "BISSELL Little Green Mini Portable Carpet and Upholstery As Cleaning...",
    rating: 4.3,
    reviewCount: 100,
    soldCount: "2.5k+",
    price: 203.49,
    freeDeliveryMin: 50,
    deliveryDate: "Mon, Nov 24",
    seller: "Younes Leader House",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    title: "11Pcs Crevice Cleaning Brush Set, Hard Bristle Cleaning Supplies for Y...",
    rating: 0,
    reviewCount: 0,
    price: 10.05,
    originalPrice: 15.23,
    savePercent: 22,
    stockLeft: 4,
    freeDeliveryMin: 50,
    deliveryDate: "Mon, Nov 24",
    seller: "Beirut ElectroCity",
    badges: ["bestseller", "trending"] as ("bestseller" | "trending")[],
  },
];

const Index = () => {
  const { items, addItem } = useWishlist();

  // Add sample items on first load if wishlist is empty
  useEffect(() => {
    if (items.length === 0) {
      sampleProducts.forEach((product) => {
        addItem(product);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <WishlistHeader />
      <main className="max-w-[1600px] mx-auto">
        <WishlistGrid />
      </main>
    </div>
  );
};

export default Index;
