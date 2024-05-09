import { Button } from "@/shared/components";
import { cn } from "@/shared/lib/utils";
import { Heart, Network, Share2 } from "lucide-react";

type CardActionsProps = {
  className?: string;
};

export function CardActions({ className }: CardActionsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      <Button>
        Песочница{" "}
        <Network className="ml-1 w-5" strokeWidth={1.7} absoluteStrokeWidth />
      </Button>
      <Button size="icon" variant="outline">
        <Heart className="w-5" strokeWidth={1.5} absoluteStrokeWidth />
      </Button>
      <Button size="icon" variant="outline">
        <Share2 className="w-5" strokeWidth={1.5} absoluteStrokeWidth />
      </Button>
    </div>
  );
}
