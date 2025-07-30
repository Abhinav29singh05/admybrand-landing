# ADmyBRAND Component Library

A modern, reusable component library built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradient
- **Secondary**: Gray scale with dark mode support
- **Accent**: Green (#10B981), Red (#EF4444), Orange (#F59E0B)

### Typography
- **Font Family**: Geist Sans (Primary), Geist Mono (Code)
- **Headings**: Bold, gradient text support
- **Body**: Regular weight, optimized for readability

### Spacing
- **Base Unit**: 4px (0.25rem)
- **Container**: Max-width 7xl (80rem)
- **Section Padding**: py-20 (5rem)

## 📦 Components

### Core UI Components

#### Button
```tsx
import Button from "@/components/ui/Button";

<Button 
  variant="primary" // primary | secondary | outline | ghost | gradient
  size="md" // sm | md | lg | xl
  icon={FaRocket}
  iconPosition="left" // left | right
  loading={false}
  disabled={false}
>
  Click me
</Button>
```

#### Card
```tsx
import Card from "@/components/ui/Card";

<Card 
  variant="glass" // default | glass | gradient | elevated
  hover={true}
  onClick={() => {}}
>
  Card content
</Card>
```

#### Input
```tsx
import Input from "@/components/ui/Input";

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  icon={FaEnvelope}
  error="Invalid email"
  required
/>
```

#### Modal
```tsx
import Modal from "@/components/ui/Modal";

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md" // sm | md | lg | xl | full
>
  Modal content
</Modal>
```

### Layout Components

#### ScrollAnimation
```tsx
import ScrollAnimation from "@/components/ScrollAnimation";

<ScrollAnimation 
  direction="fade" // up | down | left | right | fade
  delay={200}
>
  Animated content
</ScrollAnimation>
```

### Page Sections

#### Hero
- Full-screen hero section with gradient background
- Animated floating elements
- Call-to-action buttons
- Trust indicators

#### FeaturesSection
- Grid layout with feature cards
- Glassmorphism design
- Hover animations
- Icon integration

#### PricingSection
- Three-tier pricing structure
- Popular plan highlighting
- Feature comparison
- Gradient pricing cards

#### TestimonialCarousel
- Swiper.js integration
- Customer testimonials with photos
- Responsive design
- Auto-play functionality

#### FAQSection
- Collapsible questions
- Smooth animations
- Glassmorphism design
- Contact support CTA

#### ContactSection
- Contact form with validation
- Contact information display
- Modern form design
- Success state handling

#### Footer
- Multi-column layout
- Newsletter signup
- Social media links
- Company information

## 🎯 Features

### Modern Design Trends (2025)
- **Glassmorphism**: Backdrop blur effects
- **Gradient Text**: Multi-color text gradients
- **Subtle Animations**: Hover effects and transitions
- **Dark Mode**: Full dark mode support
- **Responsive**: Mobile-first design

### Performance Optimizations
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Intersection Observer for animations
- **Code Splitting**: Component-based loading
- **TypeScript**: Type safety throughout

### Accessibility
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Screen Reader**: Semantic HTML structure

## 🚀 Usage

### Installation
```bash
npm install
npm run dev
```

### Adding New Components
1. Create component in `src/components/ui/`
2. Add TypeScript interfaces
3. Include proper accessibility attributes
4. Add to this documentation

### Styling Guidelines
- Use Tailwind CSS classes
- Implement glassmorphism with `backdrop-blur-xl`
- Add hover animations with `transition-all duration-300`
- Use gradient backgrounds for emphasis

### Animation Guidelines
- Use `ScrollAnimation` for scroll-triggered animations
- Implement hover effects with `group` and `group-hover`
- Add loading states with `animate-spin`
- Use `transform` and `opacity` for smooth transitions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Start with mobile styles
- Use responsive utilities
- Test on multiple devices
- Optimize touch interactions

## 🎨 Customization

### Theme Colors
Update colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
      }
    }
  }
}
```

### Custom Animations
Add animations to `globals.css`:
```css
@keyframes custom-animation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

## 📚 Best Practices

### Component Structure
1. **Props Interface**: Define all props with TypeScript
2. **Default Values**: Provide sensible defaults
3. **Error Handling**: Include error states
4. **Loading States**: Add loading indicators
5. **Accessibility**: Include ARIA attributes

### Code Organization
1. **Single Responsibility**: One component, one purpose
2. **Composition**: Use children props for flexibility
3. **Reusability**: Make components generic
4. **Documentation**: Include usage examples

### Performance
1. **Memoization**: Use React.memo for expensive components
2. **Lazy Loading**: Load components on demand
3. **Bundle Size**: Keep components lightweight
4. **Tree Shaking**: Use named exports

## 🔧 Development

### Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
npm run type-check # TypeScript check
```

### File Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Hero.tsx      # Page sections
│   ├── FeaturesSection.tsx
│   └── ...
├── app/              # Next.js app router
└── styles/           # Global styles
```

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript interfaces
3. Include accessibility features
4. Test on multiple devices
5. Update documentation

## 📄 License

This component library is part of the ADmyBRAND project. 