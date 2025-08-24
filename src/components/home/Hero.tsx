import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn Your Ideas Into
              <span className="block text-white/90">Reality</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of creators and supporters in the world's most trusted 
              crowdfunding platform. Fund your dreams, support others, and make a difference.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/create-campaign">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/campaigns">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Browse Campaigns
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="glass rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">$2.5M+</div>
              <div className="text-white/80 text-sm">Successfully Funded</div>
            </div>
            
            <div className="glass rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">15K+</div>
              <div className="text-white/80 text-sm">Active Supporters</div>
            </div>
            
            <div className="glass rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">850+</div>
              <div className="text-white/80 text-sm">Success Stories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl animate-bounce-slow" />
    </section>
  );
};

export default Hero;