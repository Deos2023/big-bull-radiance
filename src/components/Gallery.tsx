import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn, 
  Camera
} from "lucide-react";

export interface GalleryItem {
  id: number;
  src: string;
}

export const galleryImages: GalleryItem[] = [
  { id: 1, src: "/Gallery/Image1.jpeg" },
  { id: 2, src: "/Gallery/Image2.jpeg" },
  { id: 3, src: "/Gallery/Image3.jpeg" },
  { id: 4, src: "/Gallery/Image4.jpeg" },
  { id: 5, src: "/Gallery/Image5.jpeg" },
  { id: 6, src: "/Gallery/Image6.jpeg" },
  { id: 7, src: "/Gallery/Image7.jpeg" },
  { id: 8, src: "/Gallery/Image8.jpeg" },
  { id: 9, src: "/Gallery/Image9.jpeg" },
  { id: 10, src: "/Gallery/Image10.jpeg" },
  { id: 11, src: "/Gallery/Image11.jpeg" },
  { id: 12, src: "/Gallery/Image12.jpeg" }
];

interface GalleryProps {
  limit?: number;
}

const Gallery = ({ limit }: GalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev !== null && prev < displayedImages.length - 1 ? prev + 1 : 0));
  }, [activeImageIndex, displayedImages.length]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : displayedImages.length - 1));
  }, [activeImageIndex, displayedImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveImageIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <section className="py-20 relative bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden" id="gallery">
      {/* Glow Background Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Our Moments & Memories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-4">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore glimpses of our seminars, client interactions, milestone events, and our journey in helping investors build secure financial futures.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 shadow-md hover:shadow-[var(--glow-gold)] transition-all duration-500 cursor-pointer aspect-[4/3]"
            >
              {/* Photo */}
              <img
                src={img.src}
                alt={`Big Bull Radiance Gallery Image ${img.id}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Dark Overlay & Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog Modal */}
        <Dialog open={activeImageIndex !== null} onOpenChange={(open) => !open && setActiveImageIndex(null)}>
          <DialogContent className="max-w-4xl bg-black/95 backdrop-blur-2xl border border-primary/30 p-2 overflow-hidden text-foreground">
            {activeImageIndex !== null && displayedImages[activeImageIndex] && (
              <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[600px] p-2">
                {/* Photo Display */}
                <img
                  src={displayedImages[activeImageIndex].src}
                  alt={`Big Bull Radiance Gallery Image ${displayedImages[activeImageIndex].id}`}
                  className="max-h-[80vh] w-auto object-contain mx-auto rounded-lg shadow-2xl transition-transform duration-300"
                />

                {/* Close Button */}
                <button
                  onClick={() => setActiveImageIndex(null)}
                  aria-label="Close Lightbox"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground transition-all duration-200 border border-white/20 z-20"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Prev/Next Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground transition-all duration-200 border border-white/20 z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next Image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground transition-all duration-200 border border-white/20 z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 border border-white/20 text-white text-xs font-semibold tracking-wider">
                  {activeImageIndex + 1} / {displayedImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
