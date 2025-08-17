import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, ShoppingCart, Users, Settings, CreditCard, MapPin } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "For Farmers & Growers",
    description: "List fresh produce, track inventory, and sell directly to consumers or bulk to markets.",
    benefits: ["Direct sales platform", "Transparent logistics", "Fair pricing", "Community connection"]
  },
  {
    icon: ShoppingCart,
    title: "For Customers", 
    description: "Shop with cash, credit, or EBT for fresh farm products mapped to delicious meal kits.",
    benefits: ["Multiple payment options", "Weekly meal menus", "Cook at home or delivery", "Seasonal produce"]
  },
  {
    icon: Users,
    title: "For Volunteers",
    description: "Join our community cooking and delivery network to support neighbors and earn rewards.",
    benefits: ["Flexible scheduling", "Community impact", "Recognition rewards", "Skill building"]
  },
  {
    icon: Settings,
    title: "Market Partners",
    description: "Purchase farm products in bulk and create curated micro-bundles for customers.",
    benefits: ["Bulk purchasing", "Inventory management", "Curated menus", "Partnership support"]
  },
  {
    icon: CreditCard,
    title: "Inclusive Payments",
    description: "Accept all payment methods including EBT to ensure food access for everyone.",
    benefits: ["EBT accepted", "Credit & debit", "Cash options", "Inclusive access"]
  },
  {
    icon: MapPin,
    title: "Community Dining",
    description: "Choose to cook at home, get delivery, or dine at partner community locations.",
    benefits: ["Multiple options", "Community spaces", "Volunteer delivery", "Local partnerships"]
  }
];

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            How FreshGreenMarketMeals Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform brings together farmers, customers, volunteers, and community partners in a seamless food ecosystem that benefits everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-fresh transition-all duration-300 border-border">
                <CardHeader className="text-center">
                  <div className="bg-nature-green-light rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-fresh-green group-hover:text-primary-foreground transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-fresh-green group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-fresh-green rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;