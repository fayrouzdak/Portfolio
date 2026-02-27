export interface SocialLink {
  label: string;
  url: string;
}

export interface Project {
  /** Canonical project name used in file naming, e.g. "laravel" */
  slug: string;
  /** Inline SVG markup shown above the card title */
  svg: string;
  /** Card title on main page, e.g. "Senior product designer" */
  title: string;
  /** Short label shown on the card subtitle */
  company: string;
  /** Full name shown in the detail page header; falls back to company if omitted */
  companyFull?: string;
  /** e.g. "Current" or "2024" */
  period: string;
  isCurrent: boolean;
  /** Shown as the role heading on the detail page */
  role: string;
  /** Each string is a separate paragraph */
  description: string[];
  /** Paths relative to /src/assets/, e.g. "projects/laravel/laravel-1.png" */
  thumbnails: string[];
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
