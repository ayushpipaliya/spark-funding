import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Heart, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Create Your Campaign",
    description: "Set up your project with compelling story, clear goals, and engaging visuals to attract supporters.",
    step: "01"
  },
  {
    icon: Users,
    title: "Share & Promote",
    description: "Spread the word through social media, email, and our platform to reach potential backers worldwide.",
    step: "02"
  },
  {
    icon: Heart,
    title: "Receive Support",
    description: "Watch as supporters contribute to your campaign and help bring your vision to life.",
    step: "03"
  },
  {
    icon: Rocket,
    title: "Launch Your Project",
    description: "Once funded, use the resources to execute your project and keep supporters updated on progress.",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How <span className="gradient-text">FundFusion</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea to reality in four simple steps. Our platform makes it easy 
            to launch and support meaningful projects.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="campaign-card text-center relative overflow-hidden">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{step.step}</span>
                </div>
                
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of creators and supporters who are making their dreams come true through crowdfunding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient">
                Create Campaign
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;