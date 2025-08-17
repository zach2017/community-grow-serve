import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, TrendingUp, Users } from "lucide-react";
import communityImage from "@/assets/community-cooking.jpg";
import farmerImage from "@/assets/farmer-harvest.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Community Members" },
  { icon: Leaf, value: "50+", label: "Local Farms" },
  { icon: Heart, value: "1000+", label: "Meals Delivered" },
  { icon: TrendingUp, value: "95%", label: "Satisfaction Rate" }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Building Stronger Communities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FreshGreenMarketMeals isn't just an app—it's a movement to reimagine food access, strengthen communities, and bring people back to the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Empowering Local Agriculture
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We connect local farmers directly with their community, ensuring fair prices and reducing food miles. Our platform provides transparency and support for sustainable farming practices.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                <span className="text-foreground">Direct farmer-to-consumer sales</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                <span className="text-foreground">Transparent supply chain tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
                <span className="text-foreground">Support for sustainable practices</span>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Support Local Farmers
            </Button>
          </div>
          <div className="relative">
            <img 
              src={farmerImage} 
              alt="Local farmer harvesting fresh vegetables" 
              className="rounded-2xl shadow-fresh w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 lg:order-1">
            <img 
              src={communityImage} 
              alt="Community volunteers cooking together" 
              className="rounded-2xl shadow-fresh w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground">
              Community-Powered Food Access
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our volunteer network ensures that everyone has access to fresh, healthy meals. From cooking to delivery, our community comes together to support one another.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full"></div>
                <span className="text-foreground">Volunteer cooking teams</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full"></div>
                <span className="text-foreground">Community delivery network</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-warm-orange rounded-full"></div>
                <span className="text-foreground">EBT and inclusive payment options</span>
              </div>
            </div>
            <Button variant="warm" size="lg">
              Join as Volunteer
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="bg-nature-green-light rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-fresh-green" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;