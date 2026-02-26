import type { PortfolioData } from "./types";

export const portfolio: PortfolioData = {
  name: "fay",
  bio: "I think good design is sharp, both in how it looks and works. I like to think through experiences and put effort into shipping solutions with taste. I'm currently experienced in cloud software, data heavy developer workflows, saas, and marketplaces.",
  avatar: "avatar.jpg",
  socialLinks: [
    { label: "Twitter", url: "https://twitter.com/" },
    { label: "Linkedin", url: "https://linkedin.com/" },
    { label: "Email", url: "mailto:hello@example.com" },
  ],
  projects: [
    {
      slug: "laravel",
      icon: "🐦",
      title: "Senior product designer",
      company: "Laravel",
      period: "Current",
      isCurrent: true,
      role: "Senior product designer",
      description: [
        "My job is to take all the complex uncertain parts of cloud software like infrastructure, networking, security, billing, and onboarding (the stuff infra engineers love and everyone else fears), work with product managers and engineers, and turn those complex ideas into flows that feel clear and trustworthy.",
        "I'm involved early in projects which means I'm not just designing the interface but also shaping the decisions when things are still at an early stage. On a daily basis, I'm creating new design patterns and solutions when necessary, following existing ones and helping with copywriting and direction.",
        "If I'm actually doing my job right, people should never have to think about how much infra anxiety was quietly removed along the way.",
        "I'm very intentional about details and taste. In a product like Cloud, small decisions honestly compound so fast, so I'm careful about hierarchy, copy, defaults, and edge cases. I care a lot about quality. So for me, it's really important to know when to add guidance, when to step back, and when doing less is actually the better design choice.",
      ],
      thumbnail: "projects/laravel/thumbnail.png",
      showcaseImages: [
        "projects/laravel/showcase-1.png",
        "projects/laravel/showcase-2.png",
      ],
    },
    {
      slug: "smb",
      icon: "💬",
      title: "Product designer",
      company: "SMB.co",
      period: "2024",
      isCurrent: false,
      role: "Product designer",
      description: [
        "Worked as the sole designer at SMB.co, responsible for the end-to-end product experience across the platform.",
        "Collaborated closely with engineering and leadership to define features, create flows, and ship a product customers loved.",
      ],
      thumbnail: "projects/smb/thumbnail.png",
      showcaseImages: ["projects/smb/showcase-1.png"],
    },
    {
      slug: "agencies",
      icon: "⚙️",
      title: "Product designer",
      company: "projects + agencies",
      period: "2020 – 2023",
      isCurrent: false,
      role: "Product designer",
      description: [
        "Worked across a variety of client projects and agencies, covering branding, product design, and UX across SaaS and marketplace products.",
        "Gained experience working in different team environments, adapting to varying constraints and delivering polished outcomes.",
      ],
      thumbnail: "projects/agencies/thumbnail.png",
      showcaseImages: ["projects/agencies/showcase-1.png"],
    },
  ],
};
