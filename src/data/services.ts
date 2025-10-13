import { Code, Palette, ShoppingCart, Smartphone, Zap, LineChart, Layout, RefreshCw, Image, Server, Bot, Cog, Target, Store, Layers } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    tagline: "Custom websites built to impress and convert",
    description: "We create stunning, responsive websites that perfectly represent your brand and drive results. From concept to launch, we handle every detail with precision and creativity.",
    icon: Code,
    benefits: [
      "Custom, responsive design that works on all devices",
      "Fast loading times and optimized performance",
      "SEO-friendly structure for better search rankings",
      "Easy-to-manage content management systems"
    ],
    process: [
      { title: "Discovery", description: "We learn about your business, goals, and target audience" },
      { title: "Design", description: "Create beautiful mockups and wireframes for your approval" },
      { title: "Build", description: "Develop your site with clean, modern code" },
      { title: "Launch", description: "Deploy and provide ongoing support" }
    ]
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    tagline: "Powerful, flexible WordPress solutions",
    description: "Build feature-rich WordPress websites with custom themes, plugins, and seamless integrations. Perfect for blogs, business sites, and content-heavy platforms.",
    icon: Layout,
    benefits: [
      "Custom theme development tailored to your brand",
      "Plugin customization and development",
      "WooCommerce integration for e-commerce",
      "Easy content management for non-technical users"
    ],
    process: [
      { title: "Discovery", description: "Understand your content strategy and requirements" },
      { title: "Design", description: "Design custom WordPress themes" },
      { title: "Build", description: "Develop with best WordPress practices" },
      { title: "Launch", description: "Deploy and train your team" }
    ]
  },
  {
    id: "shopify-stores",
    title: "Shopify Stores",
    tagline: "E-commerce solutions that sell",
    description: "Launch your online store with Shopify. We create beautiful, conversion-optimized stores that make selling online easy and profitable.",
    icon: ShoppingCart,
    benefits: [
      "Custom Shopify theme design and development",
      "Payment gateway integration",
      "Inventory management setup",
      "Marketing tools and analytics integration"
    ],
    process: [
      { title: "Discovery", description: "Define your products and sales strategy" },
      { title: "Design", description: "Create a stunning storefront" },
      { title: "Build", description: "Set up products, payments, and shipping" },
      { title: "Launch", description: "Go live and start selling" }
    ]
  },
  {
    id: "react-nextjs-apps",
    title: "React / Next.js Web Apps",
    tagline: "Modern, blazing-fast web applications",
    description: "Build powerful single-page applications and server-rendered sites with React and Next.js. Perfect for interactive dashboards, SaaS platforms, and progressive web apps.",
    icon: Zap,
    benefits: [
      "Lightning-fast performance and SEO",
      "Scalable architecture for growth",
      "Interactive user experiences",
      "API integrations and real-time features"
    ],
    process: [
      { title: "Discovery", description: "Map out features and user flows" },
      { title: "Design", description: "Create UI/UX mockups" },
      { title: "Build", description: "Develop with React/Next.js" },
      { title: "Launch", description: "Deploy on Vercel or your preferred host" }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Native-quality apps with Flutter",
    description: "Cross-platform mobile apps built with Flutter. One codebase, beautiful apps for iOS and Android with native performance.",
    icon: Smartphone,
    benefits: [
      "Single codebase for iOS and Android",
      "Native performance and beautiful UI",
      "Faster development and lower costs",
      "Easy maintenance and updates"
    ],
    process: [
      { title: "Discovery", description: "Define app features and user experience" },
      { title: "Design", description: "Create app mockups and prototypes" },
      { title: "Build", description: "Develop with Flutter framework" },
      { title: "Launch", description: "Publish to App Store and Google Play" }
    ]
  },
  {
    id: "seo-performance",
    title: "SEO & Performance Optimization",
    tagline: "Get found, load faster, rank higher",
    description: "Improve your website's visibility and speed. We optimize every aspect to help you rank higher in search results and provide a better user experience.",
    icon: LineChart,
    benefits: [
      "Comprehensive SEO audits and fixes",
      "Page speed optimization",
      "Technical SEO improvements",
      "Analytics setup and reporting"
    ],
    process: [
      { title: "Discovery", description: "Audit your current site performance" },
      { title: "Design", description: "Create optimization strategy" },
      { title: "Build", description: "Implement technical improvements" },
      { title: "Launch", description: "Monitor and report results" }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Beautiful interfaces, delightful experiences",
    description: "User-centered design that looks amazing and works perfectly. We create interfaces that users love and businesses benefit from.",
    icon: Palette,
    benefits: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing and iteration"
    ],
    process: [
      { title: "Discovery", description: "Research users and competitors" },
      { title: "Design", description: "Create wireframes and mockups" },
      { title: "Build", description: "Develop high-fidelity prototypes" },
      { title: "Launch", description: "Hand off to development" }
    ]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    tagline: "Refresh your digital presence",
    description: "Transform your outdated website into a modern, high-performing asset. We preserve what works and upgrade everything else.",
    icon: RefreshCw,
    benefits: [
      "Modern design with current best practices",
      "Improved user experience and conversion",
      "Better performance and SEO",
      "Migration of existing content"
    ],
    process: [
      { title: "Discovery", description: "Analyze current site and goals" },
      { title: "Design", description: "Create fresh, modern designs" },
      { title: "Build", description: "Develop and migrate content" },
      { title: "Launch", description: "Deploy with minimal downtime" }
    ]
  },
  {
    id: "branding-logo-design",
    title: "Branding & Logo Design",
    tagline: "Your brand, beautifully crafted",
    description: "Create a memorable brand identity that stands out. From logos to complete brand guidelines, we help you make a lasting impression.",
    icon: Image,
    benefits: [
      "Unique logo design",
      "Complete brand identity systems",
      "Brand guidelines and assets",
      "Business card and collateral design"
    ],
    process: [
      { title: "Discovery", description: "Understand your brand values and vision" },
      { title: "Design", description: "Create multiple logo concepts" },
      { title: "Build", description: "Refine and develop brand assets" },
      { title: "Launch", description: "Deliver complete brand package" }
    ]
  },
  {
    id: "hosting-maintenance",
    title: "Hosting & Maintenance",
    tagline: "Worry-free website management",
    description: "Reliable hosting and ongoing maintenance to keep your site secure, fast, and up-to-date. Focus on your business while we handle the technical details.",
    icon: Server,
    benefits: [
      "Fast, secure hosting infrastructure",
      "Regular backups and security updates",
      "Performance monitoring",
      "Priority support and quick fixes"
    ],
    process: [
      { title: "Discovery", description: "Assess your hosting needs" },
      { title: "Design", description: "Set up hosting and monitoring" },
      { title: "Build", description: "Migrate and configure" },
      { title: "Launch", description: "Ongoing maintenance and support" }
    ]
  },
  {
    id: "ai-chatbot-integration",
    title: "AI-Powered Chatbot Integration",
    tagline: "24/7 intelligent customer support",
    description: "Implement AI chatbots to handle customer inquiries, generate leads, and provide instant support around the clock.",
    icon: Bot,
    benefits: [
      "24/7 customer support automation",
      "Lead qualification and capture",
      "Multi-language support",
      "Integration with existing systems"
    ],
    process: [
      { title: "Discovery", description: "Define chatbot goals and use cases" },
      { title: "Design", description: "Create conversation flows" },
      { title: "Build", description: "Develop and train AI model" },
      { title: "Launch", description: "Deploy and optimize" }
    ]
  },
  {
    id: "business-automation",
    title: "Business Automation Tools",
    tagline: "Automate workflows, save time",
    description: "Streamline your operations with custom automation tools. From data processing to workflow automation, we help you work smarter.",
    icon: Cog,
    benefits: [
      "Custom workflow automation",
      "Integration with existing tools",
      "Time and cost savings",
      "Scalable solutions"
    ],
    process: [
      { title: "Discovery", description: "Identify automation opportunities" },
      { title: "Design", description: "Map workflows and integrations" },
      { title: "Build", description: "Develop automation solutions" },
      { title: "Launch", description: "Deploy and train your team" }
    ]
  },
  {
    id: "landing-page-funnel",
    title: "Landing Page & Funnel Building",
    tagline: "Convert visitors into customers",
    description: "High-converting landing pages and sales funnels designed to capture leads and drive sales. Perfect for marketing campaigns.",
    icon: Target,
    benefits: [
      "Conversion-optimized design",
      "A/B testing capabilities",
      "Analytics and tracking setup",
      "Fast loading and mobile-optimized"
    ],
    process: [
      { title: "Discovery", description: "Define campaign goals and audience" },
      { title: "Design", description: "Create high-converting layouts" },
      { title: "Build", description: "Develop and integrate tracking" },
      { title: "Launch", description: "Deploy and optimize based on data" }
    ]
  },
  {
    id: "ecommerce-websites",
    title: "E-Commerce Websites",
    tagline: "Complete online selling solutions",
    description: "Full-featured e-commerce platforms built to scale. Accept payments, manage inventory, and grow your online business.",
    icon: Store,
    benefits: [
      "Secure payment processing",
      "Inventory and order management",
      "Customer accounts and wishlists",
      "Marketing and analytics tools"
    ],
    process: [
      { title: "Discovery", description: "Plan your store structure" },
      { title: "Design", description: "Create product pages and checkout flow" },
      { title: "Build", description: "Develop store with payment integration" },
      { title: "Launch", description: "Go live and start selling" }
    ]
  },
  {
    id: "saas-product-development",
    title: "SaaS Product Development",
    tagline: "Build your software-as-a-service platform",
    description: "Full-stack SaaS development from concept to launch. We build scalable, secure platforms with subscriptions, user management, and more.",
    icon: Layers,
    benefits: [
      "Scalable cloud architecture",
      "User authentication and management",
      "Subscription and billing integration",
      "Admin dashboards and analytics"
    ],
    process: [
      { title: "Discovery", description: "Define product features and MVP" },
      { title: "Design", description: "Create user flows and UI" },
      { title: "Build", description: "Develop full-stack application" },
      { title: "Launch", description: "Deploy and scale infrastructure" }
    ]
  }
];
