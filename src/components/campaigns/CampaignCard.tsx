import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, User, Calendar, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  category: string;
  creatorName: string;
  imageUrl?: string;
  daysLeft?: number;
  isLiked?: boolean;
  onLike?: () => void;
  className?: string;
}

const CampaignCard = ({
  id,
  title,
  description,
  goalAmount,
  currentAmount,
  category,
  creatorName,
  imageUrl,
  daysLeft,
  isLiked = false,
  onLike,
  className,
}: CampaignCardProps) => {
  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);
  const isUrgent = daysLeft && daysLeft <= 7;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className={cn("campaign-card group cursor-pointer", className)}>
      <Link to={`/campaigns/${id}`}>
        {/* Campaign Image */}
        <div className="relative overflow-hidden rounded-t-lg h-48">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
              <Target className="h-12 w-12 text-white/80" />
            </div>
          )}
          
          {/* Category Badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-white/90 text-foreground"
          >
            {category}
          </Badge>

          {/* Urgent Badge */}
          {isUrgent && (
            <Badge 
              variant="destructive" 
              className="absolute top-3 right-3 bg-warning text-warning-foreground"
            >
              {daysLeft} day{daysLeft !== 1 ? 's' : ''} left
            </Badge>
          )}

          {/* Like Button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "absolute bottom-3 right-3 h-8 w-8 p-0 glass opacity-0 group-hover:opacity-100 transition-opacity",
              isLiked && "opacity-100"
            )}
            onClick={(e) => {
              e.preventDefault();
              onLike?.();
            }}
          >
            <Heart 
              className={cn(
                "h-4 w-4",
                isLiked ? "fill-red-500 text-red-500" : "text-white"
              )} 
            />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/campaigns/${id}`}>
          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Creator */}
          <div className="flex items-center gap-2 mb-4">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">by {creatorName}</span>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{formatCurrency(currentAmount)}</span>
              <span className="text-muted-foreground">of {formatCurrency(goalAmount)}</span>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{progressPercentage.toFixed(1)}% funded</span>
              {daysLeft && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{daysLeft} days left</span>
                </div>
              )}
            </div>
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/campaigns/${id}`} className="w-full">
          <Button className="w-full btn-gradient">
            Support Campaign
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;