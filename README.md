# LintTech - Digital Consulting Website

A modern digital consulting website built with Next.js, featuring Apple's Liquid Glass design aesthetic. Offers consulting services in Data, Software Engineering, Cloud Deployment, and Security, with an integrated tech community and LMS platform.

## 🎨 Features

- **Apple Liquid Glass Design**: Modern glassmorphism UI with translucent effects, blur, and smooth animations
- **Four Core Services**:
  - Data Solutions
  - Software Engineering
  - Cloud Deployment
  - Security
- **Tech Community**: Community hub with networking, resources, and learning paths
- **LMS Integration**: Learning Management System for courses and certifications
- **Authentication**: Clerk authentication with user dashboard
- **Billing**: Integrated billing system with Clerk
- **CMS**: Sanity CMS for dynamic content management
- **Responsive Design**: Fully responsive across all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Authentication**: Clerk
- **CMS**: Sanity CMS
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:

```bash
cd /Users/ademola/Documents/software-engineering/full-stack/Projects/web/lint
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## 🔑 Setup Instructions

### Setting up Clerk Authentication

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local` file
5. Configure the sign-in and sign-up URLs in your Clerk dashboard

### Setting up Sanity CMS

1. Install Sanity CLI globally (if not already installed):

```bash
npm install -g @sanity/cli
```

2. Create a new Sanity project or connect to an existing one:

```bash
sanity init
```

3. Follow the prompts to set up your project
4. Copy your Project ID and add it to `.env.local`
5. Deploy the schemas:

```bash
sanity deploy
```

6. (Optional) Import the schema types from `sanity/schema.ts` to your Sanity Studio

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
