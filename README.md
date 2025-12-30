# Leedwey - Full-Stack B2B Operating System

A comprehensive B2B platform connecting manufacturers directly with buyers worldwide. Built with Next.js, TypeScript, Prisma, and modern web technologies.

## 🚀 Features

- **Full-Stack B2B Platform**: Complete ecosystem for manufacturer-to-customer commerce
- **Trust-as-a-Service**: Verified manufacturers and buyers with secure authentication
- **Product Catalog**: Virtual global expo with advanced search and filtering
- **Real-time Messaging**: Integrated communication system with Socket.io
- **Order Management**: Complete order lifecycle from quote to delivery
- **Analytics Dashboard**: Business insights and performance metrics
- **Secure Payments**: Stripe integration for transactions
- **Document Management**: Automated FOB, FTA, and customs documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI, Tailwind CSS
- **Real-time**: Socket.io
- **Search**: Algolia
- **Payments**: Stripe
- **Video/Audio**: Daily.co, Agora
- **File Storage**: Cloudinary
- **State Management**: Zustand, TanStack Query
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd leedwey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in all required environment variables in `.env`

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User**: Manufacturers and buyers with role-based access
- **Product**: Product catalog with specifications and pricing
- **Order**: Order management with status tracking
- **Conversation/Message**: Real-time messaging system
- **Review**: Rating and review system
- **Verification**: Business verification documents
- **Document**: File management for invoices, quotes, etc.

Run `npx prisma studio` to view and manage your database.

## 🔐 Authentication

The platform uses NextAuth.js with credentials provider. Users can:
- Sign up as Manufacturer or Buyer
- Email/password authentication
- Session management
- Role-based access control

## 📁 Project Structure

```
leedwey/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── products/          # Product pages
│   ├── messages/          # Messaging pages
│   └── profile/            # User profile pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                  # Utility functions
│   ├── db.ts            # Prisma client
│   ├── auth.ts          # NextAuth config
│   └── utils.ts         # Helper functions
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
└── public/              # Static assets
```

## 🎨 Theme Colors

- Cream: `#F3E5D7`
- Orange: `#F49B41`
- Blue: `#ACC8E5`
- Light Gray: `#EDF0F3`
- White: `#FFFFFF`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

See `.env.example` for all required environment variables. Key ones include:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `NEXTAUTH_URL` - Application URL
- `ALGOLIA_APP_ID` & `ALGOLIA_SEARCH_KEY` - Algolia search credentials
- `STRIPE_SECRET_KEY` - Stripe payment processing
- `CLOUDINARY_*` - Image upload configuration

## 🚧 Development Roadmap

- [x] Project setup and structure
- [x] Database schema design
- [x] Authentication system
- [x] UI components library
- [x] Dashboard and navigation
- [x] Product catalog
- [x] Messaging system UI
- [x] User profile management
- [ ] Real-time messaging with Socket.io
- [ ] Algolia search integration
- [ ] Order management system
- [ ] Payment processing
- [ ] Document generation
- [ ] Video/voice call integration
- [ ] Email notifications
- [ ] Analytics and reporting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📧 Support

For support, email support@leedwey.com or open an issue in the repository.
