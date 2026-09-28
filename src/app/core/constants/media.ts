export interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: 'all' | 'sports' | 'corporate-events' | 'garba' | 'employee-engagement' | 'production';
  title: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  category: 'sports' | 'corporate-events' | 'garba' | 'employee-engagement' | 'highlights';
  duration?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'sports-1',
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80',
    alt: 'Corporate cricket tournament in action',
    category: 'sports',
    title: 'Corporate Cricket Tournament'
  },
  {
    id: 'sports-2',
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80',
    alt: 'Badminton match during corporate tournament',
    category: 'sports',
    title: 'Badminton Tournament'
  },
  {
    id: 'sports-3',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80',
    alt: 'Football match during employee sports day',
    category: 'sports',
    title: 'Corporate Football Event'
  },
  {
    id: 'corporate-1',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
    alt: 'Employee engagement event with team collaboration',
    category: 'corporate-events',
    title: 'Employee Engagement Event'
  },
  {
    id: 'corporate-2',
    src: 'https://images.unsplash.com/photo-1553531088-0f292b41d100?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1553531088-0f292b41d100?auto=format&fit=crop&w=400&q=80',
    alt: 'Corporate team building activity',
    category: 'corporate-events',
    title: 'Team Building Activity'
  },
  {
    id: 'corporate-3',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
    alt: 'Corporate celebration event',
    category: 'corporate-events',
    title: 'Corporate Celebration'
  },
  {
    id: 'garba-1',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80',
    alt: 'Corporate Navratri Garba celebration with decorations',
    category: 'garba',
    title: 'Garba Celebration'
  },
  {
    id: 'garba-2',
    src: 'https://images.unsplash.com/photo-1516183957651-8ae1c816ab7f?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1516183957651-8ae1c816ab7f?auto=format&fit=crop&w=400&q=80',
    alt: 'Traditional Navratri event setup and decorations',
    category: 'garba',
    title: 'Navratri Event Setup'
  },
  {
    id: 'engagement-1',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
    alt: 'Employee engagement activity with participants',
    category: 'employee-engagement',
    title: 'Employee Engagement Activity'
  },
  {
    id: 'production-1',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
    alt: 'Event stage setup and lighting production',
    category: 'production',
    title: 'Stage & Lighting Setup'
  },
  {
    id: 'production-2',
    src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80',
    alt: 'Professional event production equipment and rigging',
    category: 'production',
    title: 'Event Production Setup'
  }
];

export const GALLERY_VIDEOS: VideoItem[] = [
  {
    id: 'sports-video-1',
    title: 'Corporate Cricket Tournament Highlights',
    description: 'Highlights from a corporate cricket tournament with multiple matches and trophy presentation.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    duration: '3:45'
  },
  {
    id: 'sports-video-2',
    title: 'Multi-Sport Corporate Tournament',
    description: 'Compilation from a multi-sport corporate tournament featuring various sporting events.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
    poster: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    category: 'sports',
    duration: '5:20'
  },
  {
    id: 'corporate-video-1',
    title: 'Employee Engagement Event',
    description: 'Highlights from an employee engagement event with team activities and celebrations.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    category: 'employee-engagement',
    duration: '4:12'
  },
  {
    id: 'garba-video-1',
    title: 'Corporate Garba Night',
    description: 'Highlights from a corporate Garba and Navratri celebration event.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    category: 'garba',
    duration: '6:30'
  },
  {
    id: 'production-video-1',
    title: 'Event Production Setup & Execution',
    description: 'Behind-the-scenes look at event production, stage setup, and technical execution.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerJoyrides.mp4',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    category: 'production',
    duration: '3:55'
  },
  {
    id: 'highlights-1',
    title: 'Sportocraft Event Highlights Reel',
    description: 'A compilation of highlights from various Sportocraft corporate events and tournaments.',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/VolleyballShort.mp4',
    poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    category: 'highlights',
    duration: '2:30'
  }
];
