<!-- README.md -->
# E-Commerce Next.js Application

A modern, full-featured e-commerce application built with Next.js 14, TypeScript, and Tailwind CSS. This project implements a scalable architecture with proper separation of concerns, making it easy to maintain and extend.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Product Management**: Dynamic product pages with categories and search functionality
- **Shopping Cart**: Full cart management with persistent state
- **User Authentication**: Complete auth system with login, registration, and account management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Server Components**: Optimized performance with React Server Components
- **Type Safety**: Full TypeScript implementation for better development experience
- **Scalable Architecture**: Well-organized folder structure following Next.js best practices

## 📁 Complete Project Structure

\`\`\`
ecommerce-nextjs/
├── 📄 README.md                           # Project documentation
├── 📄 package.json                        # Dependencies and scripts
├── 📄 tsconfig.json                       # TypeScript configuration
├── 📄 tailwind.config.js                  # Tailwind CSS configuration
├── 📄 next.config.js                      # Next.js configuration
├── 📄 postcss.config.js                   # PostCSS configuration
├── 📄 .env.example                        # Environment variables template
├── 📄 .gitignore                          # Git ignore rules
├── 📄 .eslintrc.json                      # ESLint configuration
│
├── 📁 public/                             # Static assets
│   ├── 🖼️ favicon.ico                      # Site favicon
│   ├── 🖼️ logo.png                         # Site logo
│   └── 🖼️ placeholder.svg                  # Placeholder images
│
└── 📁 src/                                # Source code
    ├── 📁 app/                            # Next.js App Router
    │   ├── 📄 layout.tsx                   # Root layout component
    │   ├── 📄 page.tsx                     # Homepage
    │   ├── 📄 loading.tsx                  # Global loading UI
    │   ├── 📄 not-found.tsx               # 404 page
    │   ├── 📄 global-error.tsx            # Global error handler
    │   ├── 📄 globals.css                 # Global styles
    │   │
    │   ├── 📁 (shop)/                     # Route group for shop pages
    │   │   ├── 📄 layout.tsx               # Shop layout with sidebar
    │   │   ├── 📄 page.tsx                 # Shop homepage (/shop)
    │   │   ├── 📁 cart/                    # Shopping cart
    │   │   │   ├── 📄 page.tsx             # Cart page (/cart)
    │   │   │   └── 📄 loading.tsx          # Cart loading state
    │   │   ├── 📁 checkout/                # Checkout process
    │   │   │   ├── 📄 page.tsx             # Checkout page (/checkout)
    │   │   │   └── 📄 loading.tsx          # Checkout loading state
    │   │   └── 📁 account/                 # User account section
    │   │       ├── 📄 page.tsx             # Account dashboard (/account)
    │   │       ├── 📄 loading.tsx          # Account loading state
    │   │       ├── 📁 orders/              # Order history
    │   │       │   └── 📄 page.tsx         # Orders page (/account/orders)
    │   │       └── 📁 settings/            # Account settings
    │   │           └── 📄 page.tsx         # Settings page (/account/settings)
    │   │
    │   ├── 📁 auth/                       # Authentication pages
    │   │   ├── 📁 login/                  # Login page
    │   │   │   └── 📄 page.tsx             # Login form (/auth/login)
    │   │   ├── 📁 register/               # Registration page
    │   │   │   └── 📄 page.tsx             # Register form (/auth/register)
    │   │   └── 📁 forgot-password/        # Password reset
    │   │       └── 📄 page.tsx             # Forgot password (/auth/forgot-password)
    │   │
    │   ├── 📁 [categorySlug]/             # Dynamic category pages
    │   │   ├── 📄 page.tsx                 # Category listing (/electronics)
    │   │   ├── 📄 loading.tsx              # Category loading state
    │   │   ├── 📄 error.tsx                # Category error handling
    │   │   └── 📁 [productSlug]/          # Dynamic product pages
    │   │       ├── 📄 page.tsx             # Product detail (/electronics/smartphone)
    │   │       ├── 📄 loading.tsx          # Product loading state
    │   │       └── 📄 error.tsx            # Product error handling
    │   │
    │   ├── 📁 search/                     # Search functionality
    │   │   ├── 📄 page.tsx                 # Search results (/search)
    │   │   └── 📄 loading.tsx              # Search loading state
    │   │
    │   └── 📁 api/                        # API routes
    │       ├── 📁 products/               # Product API endpoints
    │       │   └── 📄 route.ts             # GET /api/products
    │       ├── 📁 cart/                   # Cart API endpoints
    │       │   └── 📄 route.ts             # POST/PUT /api/cart
    │       └── 📁 auth/                   # Authentication API
    │           └── 📄 route.ts             # POST /api/auth
    │
    ├── 📁 components/                     # Reusable UI components
    │   ├── 📁 ui/                         # Generic UI components
    │   │   ├── 📄 Button.tsx               # Reusable button component
    │   │   ├── 📄 Input.tsx                # Form input component
    │   │   ├── 📄 Card.tsx                 # Card container component
    │   │   └── 📄 Modal.tsx                # Modal dialog component
    │   │
    │   ├── 📁 layout/                     # Layout components
    │   │   ├── 📄 Header.tsx               # Site header with navigation
    │   │   ├── 📄 Footer.tsx               # Site footer
    │   │   └── 📄 Sidebar.tsx              # Shop sidebar navigation
    │   │
    │   ├── 📁 product/                    # Product-related components
    │   │   ├── 📄 ProductCard.tsx          # Product card for listings
    │   │   ├── 📄 ProductDetails.tsx       # Product detail information
    │   │   ├── 📄 ProductImageGallery.tsx  # Product image gallery
    │   │   └── 📄 AddToCartButton.tsx      # Add to cart functionality
    │   │
    │   ├── 📁 cart/                       # Shopping cart components
    │   │   ├── 📄 CartItem.tsx             # Individual cart item
    │   │   ├── 📄 CartSummary.tsx          # Cart totals and summary
    │   │   ├── 📄 MiniCart.tsx             # Header mini cart dropdown
    │   │   └── 📄 OrderSummary.tsx         # Checkout order summary
    │   │
    │   ├── 📁 auth/                       # Authentication components
    │   │   ├── 📄 LoginForm.tsx            # Login form component
    │   │   ├── 📄 RegisterForm.tsx         # Registration form
    │   │   ├── 📄 ForgotPasswordForm.tsx   # Password reset form
    │   │   ├── 📄 AccountDashboard.tsx     # User account dashboard
    │   │   ├── 📄 AccountSettings.tsx      # Account settings form
    │   │   └── 📄 OrderHistory.tsx         # User order history
    │   │
    │   ├── 📁 forms/                      # Form components
    │   │   ├── 📄 SearchForm.tsx           # Product search form
    │   │   └── 📄 CheckoutForm.tsx         # Checkout form
    │   │
    │   └── 📁 common/                     # Common utility components
    │       └── 📄 LoadingSpinner.tsx       # Loading spinner component
    │
    ├── 📁 context/                        # React Context providers
    │   ├── 📄 CartContext.tsx              # Shopping cart state management
    │   ├── 📄 AuthContext.tsx              # User authentication state
    │   └── 📄 ThemeContext.tsx             # Theme (light/dark) management
    │
    ├── 📁 hooks/                          # Custom React hooks
    │   ├── 📄 useCart.ts                   # Cart state hook
    │   ├── 📄 useAuth.ts                   # Authentication hook
    │   ├── 📄 useDebounce.ts               # Debounce utility hook
    │   └── 📄 useMediaQuery.ts             # Media query hook
    │
    ├── 📁 services/                       # Business logic and API calls
    │   ├── 📄 productService.ts            # Product-related API calls
    │   ├── 📄 cartService.ts               # Cart API interactions
    │   ├── 📄 authService.ts               # Authentication API calls
    │   └── 📄 orderService.ts              # Order management API
    │
    ├── 📁 types/                          # TypeScript type definitions
    │   ├── 📄 product.ts                   # Product and category types
    │   ├── 📄 cart.ts                      # Cart and cart item types
    │   ├── 📄 user.ts                      # User account types
    │   ├── 📄 order.ts                     # Order and address types
    │   └── 📄 index.ts                     # Type exports
    │
    ├── 📁 utils/                          # Utility functions
    │   ├── 📄 formatters.ts                # Price and date formatting
    │   └── 📄 validators.ts                # Form validation utilities
    │
    ├── 📁 lib/                            # Library configurations
    │   └── 📄 utils.ts                     # General utility functions
    │
    ├── 📁 config/                         # Application configuration
    │   └── 📄 app.ts                       # App-wide configuration
    │
    └── 📁 constants/                      # Application constants
        └── 📄 index.ts                     # API endpoints, routes, limits
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Authentication**: NextAuth.js (configurable)
- **Database**: Prisma (configurable)
- **API Integration**: RESTful APIs with fetch
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd ecommerce-nextjs
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Configure the following variables in `.env.local`:
   \`\`\`env
   NEXT_PUBLIC_SITE_NAME=Your E-Commerce App
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   \`\`\`

4. **Set up the database** (if using Prisma)
   \`\`\`bash
   npx prisma generate
   npx prisma db push
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚦 Usage

### Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests
npm run test
\`\`\`

### Key Routes

| Route | Description | File Location |
|-------|-------------|---------------|
| `/` | Homepage | `src/app/page.tsx` |
| `/shop` | Product categories | `src/app/(shop)/page.tsx` |
| `/[category]` | Category listing | `src/app/[categorySlug]/page.tsx` |
| `/[category]/[product]` | Product detail | `src/app/[categorySlug]/[productSlug]/page.tsx` |
| `/cart` | Shopping cart | `src/app/(shop)/cart/page.tsx` |
| `/checkout` | Checkout process | `src/app/(shop)/checkout/page.tsx` |
| `/account` | User dashboard | `src/app/(shop)/account/page.tsx` |
| `/auth/login` | Login page | `src/app/auth/login/page.tsx` |
| `/auth/register` | Registration | `src/app/auth/register/page.tsx` |
| `/search` | Search results | `src/app/search/page.tsx` |

## 🏗️ Architecture Overview

### App Router Structure

The application uses Next.js 14 App Router with the following key concepts:

- **Route Groups**: `(shop)` groups related pages without affecting URLs
- **Dynamic Routes**: `[categorySlug]` and `[productSlug]` for SEO-friendly URLs
- **Nested Layouts**: Different layouts for shop and auth sections
- **Loading & Error States**: Dedicated files for better UX

### State Management

\`\`\`typescript
// Context Providers
CartContext     → Shopping cart state
AuthContext     → User authentication
ThemeContext    → UI theme preferences

// Custom Hooks
useCart()       → Cart operations
useAuth()       → Authentication methods
useDebounce()   → Input debouncing
useMediaQuery() → Responsive breakpoints
\`\`\`

### Component Architecture

\`\`\`
UI Components (Generic)
├── Button, Input, Card, Modal
├── Reusable across the app
└── No business logic

Feature Components (Specific)
├── ProductCard, CartItem, LoginForm
├── Contains business logic
└── Uses UI components

Layout Components (Structure)
├── Header, Footer, Sidebar
├── Page structure and navigation
└── Consistent across pages
\`\`\`

### API Layer

\`\`\`typescript
// Services (Business Logic)
productService → Product CRUD operations
cartService    → Cart management
authService    → Authentication
orderService   → Order processing

// API Routes (Endpoints)
/api/products  → Product data
/api/cart      → Cart operations
/api/auth      → Authentication
/api/orders    → Order management
\`\`\`

## 🔧 Configuration Files

### TypeScript Configuration
\`\`\`json
// tsconfig.json - Strict type checking
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
\`\`\`

### Tailwind CSS Configuration
\`\`\`javascript
// tailwind.config.js - Custom styling
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { /* custom colors */ },
      fontFamily: { sans: ['Inter', 'sans-serif'] }
    }
  }
}
\`\`\`

### Next.js Configuration
\`\`\`javascript
// next.config.js - Framework settings
module.exports = {
  experimental: { appDir: true },
  images: { domains: ['localhost', 'example.com'] },
  eslint: { ignoreDuringBuilds: true }
}
\`\`\`

## 📚 API Documentation

### Product Endpoints
\`\`\`typescript
GET    /api/products           // List all products
GET    /api/products?category  // Filter by category
GET    /api/products?search    // Search products
\`\`\`

### Cart Endpoints
\`\`\`typescript
POST   /api/cart              // Add item to cart
PUT    /api/cart              // Update cart item
DELETE /api/cart/[id]         // Remove cart item
\`\`\`

### Authentication Endpoints
\`\`\`typescript
POST   /api/auth              // Login/Register
POST   /api/auth/forgot       // Password reset
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

## 🧪 Testing Strategy

\`\`\`bash
# Unit Tests
npm run test

# Integration Tests
npm run test:integration

# E2E Tests
npm run test:e2e

# Type Checking
npm run type-check
\`\`\`

## 📝 Development Guidelines

### Code Organization
- Use TypeScript for all new code
- Follow the established folder structure
- Implement proper error handling
- Add loading states for better UX

### Component Guidelines
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop types
- Add JSDoc comments for complex logic

### State Management
- Use Context for global state
- Keep local state when possible
- Implement proper error boundaries
- Use custom hooks for reusable logic

## 🐛 Troubleshooting

### Common Issues

**404 Errors on Navigation**
- Ensure `page.tsx` files exist for all routes
- Check route group configuration
- Verify dynamic route parameters

**Tailwind Styles Not Applying**
- Check `tailwind.config.js` content paths
- Ensure Tailwind directives in `globals.css`
- Restart development server

**TypeScript Errors**
- Run `npm run type-check`
- Check type definitions in `src/types/`
- Ensure proper imports and exports

**Environment Variables**
- Prefix client variables with `NEXT_PUBLIC_`
- Restart server after changes
- Check `.env.local` file exists

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- 📧 Create an issue in the repository
- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 📘 [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built by SHIBINSHA TypeScript, and Tailwind CSS with ❤️**
