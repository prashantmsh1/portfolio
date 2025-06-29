<div align="center">
  <h1>🚀 Modern Portfolio Website</h1>
  <p>A stunning, interactive portfolio built with cutting-edge technologies</p>
  
  [![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.1-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.6-pink?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  
  <br/>
  
  ![Portfolio Preview](https://via.placeholder.com/800x400/050014/FFFFFF?text=Portfolio+Preview)
</div>

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** with backdrop blur effects
- **Cosmic Theme** with purple, pink, and cyan gradients
- **Responsive Design** optimized for all screen sizes
- **Dark Mode** with elegant color schemes

### 🚀 **Interactive Animations**
- **Framer Motion** powered smooth transitions
- **Hover Effects** with spring physics
- **3D Elements** using React Three Fiber
- **Particle Systems** for dynamic backgrounds
- **Scroll-triggered** animations

### 📱 **Sections**
- **Hero Section** with animated background
- **About Me** with personal story and values
- **Skills** with floating mastery orbs
- **Projects** with interactive showcases
- **Contact** with functional form
- **Info Grid** with statistics and testimonials

### 🛠️ **Technical Features**
- **TypeScript** for type safety
- **Modern React** with hooks and functional components
- **Custom Animations** with spring physics
- **Icon System** with Lucide React
- **Performance Optimized** with lazy loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/          # About section
│   │   ├── connect/        # Contact form
│   │   ├── footer/         # Footer component
│   │   ├── hero/           # Hero section with particles
│   │   ├── home/           # Main layout
│   │   ├── infogrid/       # Statistics grid
│   │   ├── projects/       # Project showcase
│   │   ├── skills/         # Skills visualization
│   │   └── Navbar.tsx      # Navigation
│   └── utils/
│       └── tech-icons.tsx  # Technology icons mapping
├── index.css               # Global styles
├── main.tsx               # App entry point
└── vite-env.d.ts          # Vite types
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--cosmic-purple: #a855f7
--cosmic-pink: #ec4899
--cosmic-cyan: #06b6d4

/* Background */
--deep-space: #050014
--card-bg: rgba(17, 24, 39, 0.6)

/* Gradients */
background: linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)
```

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 100-900
- **Scale**: Responsive typography with `clamp()`

### Components

#### Skill Cards
```tsx
// Floating mastery orbs representing skill levels
<SkillCard 
  skill={skillData}
  index={index}
  isHovered={hoveredSkill === skill.name}
  onHover={setHoveredSkill}
/>
```

#### Project Showcase
```tsx
// Interactive project cards with modal details
<ProjectCard 
  project={projectData}
  onClick={setSelectedProject}
/>
```

## 🔧 Customization

### Adding New Skills
```typescript
// src/app/utils/tech-icons.tsx
export const techIcons: Record<string, TechIcon> = {
  "your-tech": {
    icon: <YourIcon />,
    color: "text-your-color",
  },
  // ...existing icons
};
```

### Adding New Projects
```typescript
// src/app/components/projects/Projects.tsx
const projectData: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description...",
    technologies: ["React", "TypeScript"],
    imageUrl: "path/to/image",
    links: {
      live: "https://your-project.com",
      github: "https://github.com/your-repo"
    }
  },
  // ...existing projects
];
```

### Customizing Animations
```typescript
// Framer Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

## 🎯 Performance Optimizations

- **Code Splitting** with React.lazy()
- **Image Optimization** with modern formats
- **Bundle Analysis** with Vite bundler
- **Tree Shaking** for unused code elimination
- **Viewport-based** animation triggers

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D elements
- [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Contact

**Prashant Kumar** - [@your-twitter](https://twitter.com/your-twitter) - prashantkr.msh@gmail.com

Project Link: [https://github.com/your-username/portfolio](https://github.com/your-username/portfolio)

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
