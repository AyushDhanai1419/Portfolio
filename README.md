# Ayush Dhanai - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, awards, and featured projects. Built with React, TypeScript, and modern web technologies for optimal performance and user experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://your-portfolio-url.replit.app)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations and transitions
- **📱 Responsive Layout**: Optimized for all screen sizes and devices
- **⚡ Interactive Background**: Canvas-based particle system with mouse interaction
- **🎯 Smooth Navigation**: Single-page application with smooth scrolling and active section highlighting
- **🎭 Dark Theme**: Carefully crafted dark color scheme with gradient accents
- **♿ Accessible**: Built with accessibility best practices and keyboard navigation support
- **🚀 Performance Optimized**: Lazy loading, optimized assets, and efficient rendering

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strict type checking
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and micro-interactions
- **Radix UI** - Accessible component primitives
- **Wouter** - Lightweight client-side routing
- **React Hook Form** - Performant form handling
- **Lucide React** - Beautiful icon library

### Backend
- **Express.js** - Minimal web framework for Node.js
- **TypeScript** - Server-side type safety
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Production database (Neon Database)
- **Passport.js** - Authentication middleware
- **Express Session** - Session management

### Development & Build Tools
- **tsx** - TypeScript execution for development
- **esbuild** - Fast JavaScript bundler for production
- **TanStack Query** - Server state management
- **Zod** - Schema validation
- **ESLint & TypeScript** - Code quality and type checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (or use in-memory storage for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy example environment file
   cp .env.example .env
   
   # Edit .env with your configuration
   DATABASE_URL=your_database_url_here
   SESSION_SECRET=your_session_secret_here
   ```

4. **Initialize database** (if using PostgreSQL)
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # Reusable UI components (shadcn/ui)
│   │   │   ├── Hero.tsx    # Landing section
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Awards.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Footer.tsx
│   │   ├── data/           # Static data and content
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── pages/          # Page components
│   └── public/             # Static assets
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas and Zod validation
├── migrations/            # Database migrations
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── drizzle.config.ts      # Drizzle ORM configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`from-primary-400 to-primary-600`)
- **Secondary**: Violet gradient (`from-violet-500 to-violet-600`)
- **Accent**: Emerald, cyan, and yellow gradients for highlights
- **Background**: Slate color scheme with transparency layers
- **Text**: Carefully balanced contrast ratios for readability

### Typography
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable sans-serif font
- **Interactive**: Hover states and focus indicators

### Animations
- **Page Load**: Staggered entrance animations
- **Scroll**: Reveal animations using Intersection Observer
- **Hover**: Subtle scale and glow effects
- **Background**: Interactive particle system with mouse tracking

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio

# Session
SESSION_SECRET=your-super-secret-session-key

# Development
NODE_ENV=development
PORT=5000
```

### Customization

#### Personal Information
Update `client/src/data/profile.ts` with your:
- Work experience and achievements
- Technical skills and proficiency levels
- Awards and recognition
- Featured projects with links
- Contact information

#### Styling
- **Colors**: Modify color variables in `client/src/index.css`
- **Components**: Customize components in `client/src/components/`
- **Animations**: Adjust Framer Motion configurations for timing and easing

#### Content Sections
- **Hero**: Update title, description, and call-to-action buttons
- **Experience**: Add work history with achievements and technologies
- **Skills**: Organize technical skills by category with proficiency levels
- **Projects**: Showcase featured work with descriptions and links
- **Awards**: List recognition and achievements

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:

- **Desktop** (1024px+): Full-width layout with hover interactions
- **Tablet** (768px-1023px): Adapted grid layouts and navigation
- **Mobile** (320px-767px): Stacked layouts with touch-friendly interactions

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Motion Preferences**: Respects `prefers-reduced-motion` settings
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations

## 🚀 Deployment

### Replit Deployment (Recommended)
1. Push your code to a GitHub repository
2. Import the project into Replit
3. Configure environment variables in Replit Secrets
4. Use Replit's built-in deployment with the "Deploy" button
5. Your site will be available at `https://your-repl-name.replit.app`

### Manual Deployment

#### Build for Production
```bash
npm run build
```

#### Deploy to Any Platform
The built files will be in the `dist/` directory:
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server

Supported platforms: Vercel, Netlify, Railway, Heroku, AWS, Google Cloud

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and test thoroughly
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Test across different devices and browsers
- Ensure accessibility compliance
- Write clear, descriptive commit messages

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Contact

**Ayush Dhanai**
- 📧 Email: [ayushdhanai1419@gmail.com](mailto:ayushdhanai1419@gmail.com)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/ayushdhanai)
- 🌐 Portfolio: [Visit my website](https://your-portfolio-url.replit.app)
- 📄 Resume: [Download PDF](https://drive.google.com/file/d/1REkDJ58cikdK08lwv4TAkpShF7BRgj4t/view?usp=sharing)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio design trends
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Components**: [shadcn/ui](https://ui.shadcn.com/) for accessible UI primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- **Deployment**: [Replit](https://replit.com/) for seamless hosting

---

<div align="center">
  <p><strong>Built with ❤️ for the modern web</strong></p>
  <p>© 2025 Ayush Dhanai. All rights reserved.</p>
</div>