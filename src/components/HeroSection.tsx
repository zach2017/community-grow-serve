import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Truck } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-fresh-green">
                <Leaf className="h-6 w-6" />
                <span className="font-semibold">Farm-to-Table Marketplace</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Fresh Food,
                <span className="text-fresh-green"> Local Farmers</span>,
                Strong Communities
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with local growers, enjoy farm-fresh meals, and strengthen your community through our innovative sharing economy marketplace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Shopping
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="earth" size="xl">
                Join as Farmer
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-nature-green-light rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-fresh-green" />
                </div>
                <p className="font-semibold text-foreground">Local Farms</p>
                <p className="text-sm text-muted-foreground">Direct from source</p>
              </div>
              <div className="text-center">
                <div className="bg-nature-green-light rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Users className="h-6 w-6 text-fresh-green" />
                </div>
                <p className="font-semibold text-foreground">Community</p>
                <p className="text-sm text-muted-foreground">Volunteers & support</p>
              </div>
              <div className="text-center">
                <div className="bg-nature-green-light rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-fresh-green" />
                </div>
                <p className="font-semibold text-foreground">Delivery</p>
                <p className="text-sm text-muted-foreground">To your door</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Fresh farm vegetables and produce" 
                className="rounded-2xl shadow-fresh w-full h-[500px] object-cover animate-float"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-fresh rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;