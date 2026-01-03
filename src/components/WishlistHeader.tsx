import { Heart, Trash2, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const WishlistHeader = () => {
  const { totalItems, clearWishlist } = useWishlist();
  const { toast } = useToast();

  const handleClearAll = () => {
    clearWishlist();
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Wishlist link has been copied to clipboard",
    });
  };

  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-[1600px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">My Wishlist</h1>
              <p className="text-sm text-muted-foreground">
                {totalItems} {totalItems === 1 ? "item" : "items"} saved
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </Button>

            {totalItems > 0 && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Clear all</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear wishlist?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove all {totalItems} items from your wishlist.
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleClearAll}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Clear all
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
