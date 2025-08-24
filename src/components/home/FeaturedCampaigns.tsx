import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import CampaignCard from "@/components/campaigns/CampaignCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import communityGardenImg from "@/assets/community-garden.jpg";
import waterPurificationImg from "@/assets/water-purification.jpg";
import educationScholarshipImg from "@/assets/education-scholarship.jpg";
import mentalHealthImg from "@/assets/mental-health.jpg";
import urbanBeekeepingImg from "@/assets/urban-beekeeping.jpg";
import artMuseumImg from "@/assets/art-museum.jpg";

// Mock data - will be replaced with API calls
const mockCampaigns = [
  {
    id: "1",
    title: "Help Build a Community Garden",
    description: "Transform an empty lot into a thriving community garden that will provide fresh produce for local families and create a gathering space for our neighborhood.",
    goalAmount: 15000,
    currentAmount: 8750,
    category: "Community",
    creatorName: "Maria Rodriguez",
    imageUrl: communityGardenImg,
    daysLeft: 15,
    isLiked: false,
  },
  {
    id: "2",
    title: "Revolutionary Water Purification Device",
    description: "Developing an affordable, portable water purification system that can provide clean drinking water to communities without access to safe water sources.",
    goalAmount: 50000,
    currentAmount: 32100,
    category: "Technology",
    creatorName: "Dr. James Chen",
    imageUrl: waterPurificationImg,
    daysLeft: 23,
    isLiked: true,
  },
  {
    id: "3",
    title: "Scholarship Fund for Underprivileged Students",
    description: "Creating opportunities for bright students from low-income families to pursue higher education and break the cycle of poverty through learning.",
    goalAmount: 25000,
    currentAmount: 18900,
    category: "Education",
    creatorName: "Education First Foundation",
    imageUrl: educationScholarshipImg,
    daysLeft: 8,
    isLiked: false,
  },
  {
    id: "4",
    title: "Mental Health Support Center",
    description: "Establishing a community mental health center that provides free counseling and support groups for individuals struggling with mental health challenges.",
    goalAmount: 40000,
    currentAmount: 12300,
    category: "Medical",
    creatorName: "Hope & Healing Initiative",
    imageUrl: mentalHealthImg,
    daysLeft: 30,
    isLiked: false,
  },
  {
    id: "5",
    title: "Urban Beekeeping Project",
    description: "Promoting biodiversity and honey production in urban areas while educating the community about the importance of bees in our ecosystem.",
    goalAmount: 8000,
    currentAmount: 6200,
    category: "Environment",
    creatorName: "Green City Collective",
    imageUrl: urbanBeekeepingImg,
    daysLeft: 12,
    isLiked: true,
  },
  {
    id: "6",
    title: "Local Art Museum Renovation",
    description: "Renovating our historic art museum to preserve cultural heritage and create new exhibition spaces for local and visiting artists.",
    goalAmount: 75000,
    currentAmount: 45600,
    category: "Arts",
    creatorName: "Heritage Arts Foundation",
    imageUrl: artMuseumImg,
    daysLeft: 45,
    isLiked: false,
  },
];

const categories = ["All", "Education", "Medical", "Technology", "Environment", "Community", "Arts"];

const FeaturedCampaigns = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedCampaigns, setLikedCampaigns] = useState<Set<string>>(
    new Set(mockCampaigns.filter(c => c.isLiked).map(c => c.id))
  );

  const handleLike = (campaignId: string) => {
    setLikedCampaigns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(campaignId)) {
        newSet.delete(campaignId);
      } else {
        newSet.add(campaignId);
      }
      return newSet;
    });
  };

  const filteredCampaigns = selectedCategory === "All" 
    ? mockCampaigns 
    : mockCampaigns.filter(campaign => campaign.category === selectedCategory);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Campaigns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing projects and help bring them to life. Every contribution makes a difference.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="outline" asChild>
            <a href="/campaigns">
              View All Campaigns
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCampaigns.slice(0, 6).map((campaign) => (
            <CampaignCard
              key={campaign.id}
              {...campaign}
              isLiked={likedCampaigns.has(campaign.id)}
              onLike={() => handleLike(campaign.id)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-gradient">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;