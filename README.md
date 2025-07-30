This is a modern, responsive landing page for the ADmyBRAND AI-powered marketing suite, built with Next.js, TypeScript, and Tailwind CSS.

To run the project locally:
npm install
npm run dev

Open http://localhost:3000 in your browser to view the site.
The main page is in src/app/page.tsx.
All components are in src/components/.


Features
Modern UI: Glassmorphism, gradients, and smooth animations.
Fully Responsive: Mobile-first design.
Component Library: Reusable UI components (src/components/ui/).
AI-Powered Sections: Showcases features like AI automation, analytics, and more.
Dark Mode: Full support for light and dark themes.
Accessibility: ARIA labels and keyboard navigation.
Easy Deployment: Ready for Vercel or any Next.js-compatible platform.

Project Structure
admybrand-landing/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── ui/              # Reusable UI components
│       └── ...              # Page sections
├── public/                  # Static assets
├── README.md
└── package.json

Live Demo
Deployed on Vercel:
https://admybrand-landing-k5au.vercel.app/
