import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Sprout } from "lucide-react";

const userTypes = [
  {
    icon: Sprout,
    title: "I'm a Farmer",
    description: "Sell your fresh produce directly to customers and markets",
    buttonText: "Start Selling",
    buttonVariant: "hero" as const
  },
  {
    icon: Users,
    title: "I'm a Customer", 
    description: "Shop for fresh, local produce and meal kits",
    buttonText: "Start Shopping",
    buttonVariant: "warm" as const
  },
  {
    icon: Users,
    title: "I'm a Volunteer",
    description: "Help your community with cooking and delivery",
    buttonText: "Join Community",
    buttonVariant: "earth" as const
  }
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-fresh-green mb-4">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold">Ready to Get Started?</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Join the Fresh Food Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a farmer, customer, or volunteer, there's a place for you in our community-powered food system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {userTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="group hover:shadow-fresh transition-all duration-300 border-border text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-nature-green-light rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-fresh-green group-hover:text-primary-foreground transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-fresh-green group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                  <Button variant={type.buttonVariant} className="w-full group-hover:scale-105 transition-transform duration-300">
                    {type.buttonText}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-fresh rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Food Experience?
          </h3>
          <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of community members who are already enjoying fresh, local food while supporting their neighbors and local economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-white text-fresh-green hover:bg-white/90">
              Download App
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-fresh-green">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;