export interface SocialLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  /** Small icon shown above the card title — use any string (emoji, short label) */
  icon: string;
  /** Card title on main page, e.g. "Senior product designer" */
  title: string;
  company: string;
  /** e.g. "Current" or "2024" */
  period: string;
  isCurrent: boolean;
  /** Shown as the role heading on the detail page */
  role: string;
  /** Each string is a separate paragraph */
  description: string[];
  /** Path relative to /src/assets/, e.g. "projects/laravel/thumbnail.png" */
  thumbnail: string;
  /** Paths relative to /src/assets/ */
  showcaseImages: string[];
}

export interface PortfolioData {
  name: string;
  bio: string;
  /** Path relative to /src/assets/, e.g. "avatar.jpg" */
  avatar: string;
  socialLinks: SocialLink[];
  projects: Project[];
}
