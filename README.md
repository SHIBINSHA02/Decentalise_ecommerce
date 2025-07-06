<!-- README.md -->
src/
├── app/                   # Next.js App Router root
├── components/            # Reusable UI components
├── context/               # React Context API for global state management
├── hooks/                 # Custom React Hooks
├── lib/                   # Utility functions, API clients, third-party integrations
├── services/              # Business logic for data fetching and mutations
├── styles/                # Global CSS, Tailwind base styles
├── types/                 # TypeScript type definitions
├── utils/                 # General utility functions
├── config/                # Application-wide configurations
└── constants/             # Application-wide constants




src/app/
├── (shop)/                # Route group for shop-related pages (e.g., /cart, /checkout)
│   ├── cart/
│   │   └── page.tsx       # Cart page
│   ├── checkout/
│   │   └── page.tsx       # Checkout page
│   ├── account/
│   │   ├── page.tsx       # User account dashboard
│   │   ├── orders/
│   │   │   └── page.tsx   # User orders list
│   │   └── settings/
│   │       └── page.tsx   # User account settings
│   └── layout.tsx         # Optional layout for shop pages (e.g., shared sidebar)
├── auth/                  # Authentication related pages
│   ├── login/
│   │   └── page.tsx       # Login page
│   ├── register/
│   │   └── page.tsx       # Registration page
│   └── forgot-password/
│       └── page.tsx       # Forgot password page
├── [categorySlug]/        # Dynamic route for product categories (e.g., /electronics)
│   ├── page.tsx           # Category listing page
│   ├── loading.tsx        # Loading state for category page
│   ├── error.tsx          # Error state for category page
│   └── [productSlug]/     # Dynamic route for individual products (e.g., /electronics/iphone-15)
│       ├── page.tsx       # Product detail page
│       ├── loading.tsx    # Loading state for product page
│       └── error.tsx      # Error state for product page
├── search/                # Search results page
│   └── page.tsx
├── api/                   # API Routes (backend endpoints)
│   ├── products/
│   │   └── route.ts       # API for fetching/managing products
│   ├── cart/
│   │   └── route.ts       # API for managing cart
│   └── auth/
│       └── route.ts       # API for authentication (e.g., login, signup)
├── page.tsx               # Homepage
├── layout.tsx             # Root layout for the entire application
├── global-error.tsx       # Catches errors across the entire application
└── not-found.tsx          # Custom 404 page




src/components/
├── ui/                    # Generic, unopinionated UI components (e.g., Button, Input, Card)
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── layout/                # Layout-specific components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Sidebar.tsx
├── product/               # Components related to products
│   ├── ProductCard.tsx
│   ├── ProductDetails.tsx
│   ├── AddToCartButton.tsx
│   └── ProductImageGallery.tsx
├── cart/                  # Components related to the shopping cart
│   ├── CartItem.tsx
│   ├── CartSummary.tsx
│   └── MiniCart.tsx
├── auth/                  # Authentication-related components
│   ├── LoginForm.tsx
│   └── RegisterForm.tsx
├── common/                # General-purpose components
│   ├── LoadingSpinner.tsx
│   ├── ErrorMessage.tsx
│   └── Pagination.tsx
└── forms/                 # Reusable form elements or complex forms
    ├── SearchForm.tsx
    └── QuantitySelector.tsx


src/context/
├── CartContext.tsx        # Manages cart state
├── AuthContext.tsx        # Manages authentication state
└── ThemeContext.tsx       # Manages theme (light/dark mode)


src/hooks/
├── useCart.ts             # Hook for cart operations
├── useAuth.ts             # Hook for authentication status
├── useDebounce.ts         # Generic debounce hook
└── useMediaQuery.ts       # Hook for responsive design


src/lib/
├── api/                   # API clients for external services (e.g., headless CMS, payment gateway)
│   ├── shopify.ts         # Shopify Storefront API client
│   ├── strapi.ts          # Strapi API client
│   └── paymentGateway.ts  # Payment gateway client (Stripe, PayPal, etc.)
├── db/                    # Database connection or ORM setup (if using a direct database)
│   └── prisma.ts          # Prisma client setup
├── auth/                  # Authentication helpers (e.g., NextAuth.js configuration)
│   └── authOptions.ts
├── constants.ts           # Global constants (e.g., product limits, currency symbols)
└── utils.ts               # General utility functions (e.g., date formatting, string manipulation)



src/services/
├── productService.ts      # Functions for fetching products, categories
├── cartService.ts         # Functions for adding/removing items from cart
├── orderService.ts        # Functions for placing orders, fetching order history
└── authService.ts         # Functions for login, register, logout



src/styles/
├── globals.css            # Global CSS styles (imported in root layout)
└── tailwind.css           # Tailwind base, components, and utilities (if not using PostCSS import)




src/types/
├── product.ts             # Product type interface
├── cart.ts                # Cart item and cart type interfaces
├── user.ts                # User type interface
├── order.ts               # Order type interface
└── index.ts               # Re-exports for easier imports



src/utils/
├── formatters.ts          # Price formatting, date formatting
├── validators.ts          # Form input validation
├── helpers.ts             # Small, general helper functions
└── analytics.ts           # Analytics tracking utilities



src/config/
└── app.ts                 # General application settings (e.g., site name, default currency)


src/constants/
└── index.ts               # API endpoints, magic strings, enum values
