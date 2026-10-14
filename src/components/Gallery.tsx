import { useState, useEffect, useCallback, useMemo } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn, 
  Camera,
  Play,
  Film,
  LayoutGrid
} from "lucide-react";
import { 
  MediaItem, 
  galleryPhotos, 
  galleryVideos, 
  allAlternatingMedia 
} from "@/data/galleryData";

interface GalleryProps {
  limit?: number;
  initialFilter?: "all" | "photos" | "videos";
}

type FilterType = "all" | "photos" | "videos";

const Gallery = ({ limit, initialFilter = "all" }: GalleryProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    switch (activeFilter) {
      case "photos":
        return galleryPhotos;
      case "videos":
        return galleryVideos;
      case "all":
      default:
        return allAlternatingMedia;
    }
  }, [activeFilter]);

  // Apply optional slice limit (e.g., for homepage preview)
  const displayedItems = useMemo(() => {
    return limit ? filteredItems.slice(0, limit) : filteredItems;
  }, [filteredItems, limit]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => 
      prev !== null && prev < displayedItems.length - 1 ? prev + 1 : 0
    );
  }, [activeIndex, displayedItems.length]);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => 
      prev !== null && prev > 0 ? prev - 1 : displayedItems.length - 1
    );
  }, [activeIndex, displayedItems.length]);

  // Reset active modal if filter changes
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setActiveIndex(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleNext, handlePrev]);

  const activeItem = activeIndex !== null ? displayedItems[activeIndex] : null;

  return (
    <section className="py-20 relative bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden" id="gallery">
      {/* Glow Background Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments, Seminars & Videos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-4">
            Photo & Video Gallery
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore glimpses of our investor awareness seminars, client interactions, financial milestones, and educational video sessions.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          <button
            onClick={() => handleFilterChange("all")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-[var(--glow-gold)] scale-105"
                : "bg-card/60 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-card border-border/60 hover:border-primary/40"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>All</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeFilter === "all" ? "bg-black/25 text-white" : "bg-muted text-muted-foreground"
            }`}>
              {allAlternatingMedia.length}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("photos")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeFilter === "photos"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-[var(--glow-gold)] scale-105"
                : "bg-card/60 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-card border-border/60 hover:border-primary/40"
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Photos</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeFilter === "photos" ? "bg-black/25 text-white" : "bg-muted text-muted-foreground"
            }`}>
              {galleryPhotos.length}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("videos")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeFilter === "videos"
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-[var(--glow-gold)] scale-105"
                : "bg-card/60 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-card border-border/60 hover:border-primary/40"
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Videos</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeFilter === "videos" ? "bg-black/25 text-white" : "bg-muted text-muted-foreground"
            }`}>
              {galleryVideos.length}
            </span>
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => {
            const isVideo = item.type === "video";

            return (
              <div
                key={`${item.type}-${item.id}`}
                onClick={() => setActiveIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 shadow-md hover:shadow-[var(--glow-gold)] transition-all duration-500 cursor-pointer aspect-[4/3] flex items-center justify-center bg-black/40"
              >
                {/* Media Content */}
                {isVideo ? (
                  <>
                    <video
                      src={item.src}
                      preload="metadata"
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                    {/* Video Center Play Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={`${item.title} - Big Bull Investment Kolkata & Howrah`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Photo Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </>
                )}

                {/* Type Badge (Top-left) */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-md border ${
                    isVideo 
                      ? "bg-red-500/80 border-red-400/40 text-white" 
                      : "bg-black/60 border-white/20 text-white"
                  }`}>
                    {isVideo ? (
                      <>
                        <Film className="w-3 h-3" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3 h-3" />
                        <span>Photo</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Bottom Title Gradient Scrim */}
                <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Dialog Modal */}
        <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
          <DialogContent className="max-w-4xl bg-black/95 backdrop-blur-2xl border border-primary/30 p-2 sm:p-4 overflow-hidden text-foreground">
            <DialogTitle className="sr-only">
              {activeItem?.title || "Gallery Media"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {activeItem?.caption || activeItem?.title || "Gallery preview"}
            </DialogDescription>
            {activeItem && (
              <div className="relative flex flex-col items-center justify-center min-h-[380px] md:min-h-[580px]">
                {/* Media Player or Image */}
                <div className="relative w-full flex items-center justify-center py-2">
                  {activeItem.type === "video" ? (
                    <video
                      key={activeItem.src}
                      src={activeItem.src}
                      controls
                      autoPlay
                      playsInline
                      className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl bg-black"
                    />
                  ) : (
                    <img
                      src={activeItem.src}
                      alt={activeItem.title}
                      className="max-h-[75vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close Lightbox"
                  className="absolute top-2 right-2 p-2.5 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground transition-all duration-200 border border-white/20 z-30"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Prev/Next Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Item"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground transition-all duration-200 border border-white/20 z-30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next Item"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground transition-all duration-200 border border-white/20 z-30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Footer Controls & Details */}
                <div className="w-full mt-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/90">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      activeItem.type === "video" ? "bg-red-500/80 text-white" : "bg-primary/80 text-primary-foreground"
                    }`}>
                      {activeItem.type === "video" ? "Video" : "Photo"}
                    </span>
                    <span className="text-sm font-medium line-clamp-1">{activeItem.title}</span>
                  </div>

                  {/* Counter Badge */}
                  <div className="px-3 py-1 rounded-full bg-black/80 border border-white/20 text-white text-xs font-semibold tracking-wider">
                    {activeIndex !== null ? activeIndex + 1 : 0} / {displayedItems.length}
                  </div>
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
