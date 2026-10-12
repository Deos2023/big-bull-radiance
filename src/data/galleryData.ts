export type MediaType = "photo" | "video";

export interface MediaItem {
  id: number;
  type: MediaType;
  src: string;
  title: string;
  caption?: string;
}

export const galleryPhotos: MediaItem[] = [
  { id: 1, type: "photo", src: "/Gallery/Image1.jpeg", title: "Client Advisory & Milestone Seminar" },
  { id: 2, type: "photo", src: "/Gallery/Image2.jpeg", title: "Financial Consultation & Wealth Planning" },
  { id: 3, type: "photo", src: "/Gallery/Image3.jpeg", title: "Investor Awareness & Community Meet" },
  { id: 4, type: "photo", src: "/Gallery/Image4.jpeg", title: "Mutual Fund & SIP Strategy Workshop" },
  { id: 5, type: "photo", src: "/Gallery/Image5.jpeg", title: "Client Portfolio Review & Guidance" },
  { id: 6, type: "photo", src: "/Gallery/Image6.jpeg", title: "Big Bull Team Milestone & Honors" },
  { id: 7, type: "photo", src: "/Gallery/Image7.jpeg", title: "Comprehensive Financial Planning Drive" },
  { id: 8, type: "photo", src: "/Gallery/Image8.jpeg", title: "Health Insurance & Mediclaim Awareness" },
  { id: 9, type: "photo", src: "/Gallery/Image9.jpeg", title: "Leadership & Trust Building Summit" },
  { id: 10, type: "photo", src: "/Gallery/Image10.jpeg", title: "Long-term Wealth Creation Session" },
  { id: 11, type: "photo", src: "/Gallery/Image11.jpeg", title: "Client Recognition & Felicitation" },
  { id: 12, type: "photo", src: "/Gallery/Image12.jpeg", title: "Annual Financial & Advisory Conclave" },
];

export const galleryVideos: MediaItem[] = [
  { id: 101, type: "video", src: "/Gallery/video1.mp4", title: "Market Guidance & Investment Philosophy" },
  { id: 102, type: "video", src: "/Gallery/video2.mp4", title: "Disciplined SIP & Compounding Power" },
  { id: 103, type: "video", src: "/Gallery/video3.mp4", title: "Mediclaim Security for Family Protection" },
  { id: 104, type: "video", src: "/Gallery/video4.mp4", title: "Investor Awareness & Seminar Highlights" },
  { id: 105, type: "video", src: "/Gallery/video5.mp4", title: "Strategic Wealth Creation Roadmap" },
  { id: 106, type: "video", src: "/Gallery/video6.mp4", title: "Client Testimonials & Relationship Stories" },
  { id: 107, type: "video", src: "/Gallery/video7.mp4", title: "Retirement Readiness & Pension Structuring" },
  { id: 108, type: "video", src: "/Gallery/video8.mp4", title: "Economic Insights & Market Volatility Tips" },
  { id: 109, type: "video", src: "/Gallery/video9.mp4", title: "Smart Tax Planning & ELSS Investments" },
  { id: 110, type: "video", src: "/Gallery/video10.mp4", title: "Health Emergencies & Cashless Claims" },
  { id: 111, type: "video", src: "/Gallery/video11.mp4", title: "Emergency Fund Creation & Financial Safety" },
  { id: 112, type: "video", src: "/Gallery/video12.mp4", title: "Investor Q&A & Advisory Walkthrough" },
  { id: 113, type: "video", src: "/Gallery/video13.mp4", title: "Conclave Closing Remarks & Future Outlook" },
  { id: 114, type: "video", src: "/Gallery/video14.mp4", title: "Financial Literacy & Wealth Principles" },
  { id: 115, type: "video", src: "/Gallery/video15.mp4", title: "Client Milestones & Advisory Highlights" },
];

/**
 * Interleaves photos and videos in an alternating structure:
 * 1 image, 1 video, 1 image, 1 video...
 */
export const getAlternatingMedia = (photos: MediaItem[], videos: MediaItem[]): MediaItem[] => {
  const result: MediaItem[] = [];
  const maxLen = Math.max(photos.length, videos.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < photos.length) {
      result.push(photos[i]);
    }
    if (i < videos.length) {
      result.push(videos[i]);
    }
  }
  return result;
};

export const allAlternatingMedia: MediaItem[] = getAlternatingMedia(galleryPhotos, galleryVideos);
