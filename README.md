# Parscade - Enterprise Document Parsing Platform

A production-ready React application built with TypeScript, Tailwind CSS, and modern web technologies. Parscade provides AI-powered document parsing with enterprise-grade security and developer-friendly APIs.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Advanced UI Components**: Framer Motion animations, Embla Carousel, Headless UI
- **Production Ready**: Error boundaries, logging, testing, CI/CD
- **Accessibility First**: WCAG compliant, keyboard navigation, screen reader support
- **Performance Optimized**: Code splitting, lazy loading, optimized builds
- **SEO Friendly**: Meta tags, sitemap, structured data

## 🛠️ Tech Stack

### Core
- **React 18** - UI library with concurrent features
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI & Animation
- **Framer Motion** - Smooth animations and transitions
- **Embla Carousel** - Lightweight, accessible carousel
- **Headless UI** - Unstyled, accessible UI components
- **Lucide React** - Beautiful, customizable icons

### State & Routing
- **Zustand** - Lightweight state management
- **React Router v6** - Client-side routing
- **React Helmet Async** - Document head management

### Development & Testing
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **Playwright** - End-to-end testing
- **ESLint** - Code linting with accessibility rules
- **Prettier** - Code formatting

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-org/parscade.git
cd parscade

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏃‍♂️ Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run typecheck    # Run TypeScript checks

# Testing
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
npm run test:run     # Run tests once
npm run test:e2e     # Run Playwright e2e tests
```

## 🏗️ Project Structure

```
src/
├── app/                 # App configuration and routing
│   ├── ErrorBoundary.tsx
│   ├── Layout.tsx
│   └── Router.tsx
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   └── PipelineCarousel.tsx
├── pages/              # Page components
├── lib/                # Utilities and helpers
│   ├── utils.ts
│   ├── logger.ts
│   └── results.ts
├── store/              # State management
│   └── ui.ts
└── styles/             # Global styles
    └── globals.css

public/
├── brand/              # Brand assets and logos
├── robots.txt
└── sitemap.xml
```

## 🎨 Brand Assets

The project includes a complete brand identity system:

- **Logo Variants**: Full logo, mark-only, favicon
- **Color System**: Primary gradient, accent colors, neutral palette
- **Typography**: Inter font family with proper weights
- **Usage Guidelines**: See `BRAND.md` for detailed guidelines

### Logo Usage

```tsx
import { Logo } from '@/components/ui/Logo';

// Full logo (default)
<Logo variant="full" size="md" />

// Mark only (for small spaces)
<Logo variant="mark" size="sm" />
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Formspree form handling
VITE_FORMSPREE_ID=your_formspree_id

# Optional: Sentry error tracking
VITE_SENTRY_DSN=your_sentry_dsn
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Extended color palette matching brand guidelines
- Custom animations and keyframes
- Responsive breakpoints
- Typography and spacing scales

## 🧪 Testing Strategy

### Unit Tests
- Component rendering and behavior
- Accessibility compliance
- User interaction handling
- State management logic

### Integration Tests
- Page navigation and routing
- Form submissions and validation
- API integration points

### E2E Tests
- Critical user journeys
- Cross-browser compatibility
- Performance benchmarks
- Accessibility audits

## 🚀 Deployment

### Static Hosting (Recommended)

The app builds to static files and can be deployed to any static hosting service:

```bash
# Build for production
npm run build

# Deploy dist/ folder to your hosting service
```

### Supported Platforms
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop or Git integration
- **AWS S3 + CloudFront**: Enterprise-grade CDN
- **GitHub Pages**: Free hosting for open source

### Docker Deployment

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔒 Security

- **Content Security Policy**: Configured for production
- **HTTPS Only**: All external resources use HTTPS
- **Dependency Scanning**: Automated vulnerability checks
- **Input Validation**: All forms include validation
- **Error Handling**: Graceful error boundaries

## ♿ Accessibility

The application follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and roles
- **Color Contrast**: 4.5:1 minimum contrast ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

## 📊 Performance

Performance optimizations include:

- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer
- **Lighthouse Scores**: Target 90+ on all metrics
- **Core Web Vitals**: Optimized for Google's metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Write tests for new components
- Use semantic commit messages
- Ensure accessibility compliance
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.parscade.com](https://docs.parscade.com)
- **Issues**: [GitHub Issues](https://github.com/your-org/parscade/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/parscade/discussions)
- **Email**: support@parscade.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The library that powers our UI
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For beautiful animations
- [Lucide](https://lucide.dev/) - For the icon system
- [Vite](https://vitejs.dev/) - For the blazing fast build tool

---

Built with ❤️ by the Parscade team