import { Leaf, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-fresh-green" />
              <span className="font-bold text-foreground">FreshGreenMarketMeals</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting communities through fresh, local food. Building a sustainable future one meal at a time.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-fresh-green cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-fresh-green cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-fresh-green cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-fresh-green cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">For Farmers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-fresh-green transition-colors">Join as Seller</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Farmer Resources</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Pricing Guide</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Success Stories</a></li>
               <li><a href="/ftot01.pdf" className="hover:text-fresh-green transition-colors">Vision Plan 2025</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-fresh-green transition-colors">Browse Products</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Meal Planning</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Payment Options</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Delivery Areas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-fresh-green transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Impact Report</a></li>
              <li><a href="#" className="hover:text-fresh-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 FreshGreenMarketMeals. All rights reserved. Building stronger communities through fresh food.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
