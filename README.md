# Web3 Mates - Blockchain Catalyst

<div align="center">
  <img src="/public/logo.svg" alt="Web3 Mates Logo" width="120" height="120" />
  
  **Empowering Africa's Web3 Builders—One Line of Code at a Time**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## Overview

**Web3 Mates** is a comprehensive Web3 education and innovation hub dedicated to training, connecting, and empowering African developers and entrepreneurs in the blockchain revolution. Our platform serves as a catalyst for blockchain adoption across Africa, providing education, mentorship, community building, and project collaboration opportunities.

## Key Features

### Education & Training

- **Mentorship Programs**: Structured learning paths for Web3 development
- **Workshops**: Hands-on training sessions for blockchain technologies
- **Course Materials**: Comprehensive curriculum covering DeFi, NFTs, DAOs, and more
- **Project-Based Learning**: Real-world application of Web3 concepts

### Community Building

- **Discord Community**: Active real-time discussions and networking
- **Telegram Channel**: Instant updates and announcements
- **LinkedIn Network**: Professional connections and opportunities
- **GitHub Collaboration**: Open-source project contributions

### Events & Competitions

- **Hackathons**: Innovation challenges and competitions
- **Callups**: Special announcements and opportunities
- **Workshops**: Skill-building sessions
- **Networking Events**: Community meetups and connections

### Business Services

- **Enterprise Solutions**: Custom Web3 training for companies
- **Partnership Programs**: Strategic collaborations
- **Sponsorship Opportunities**: Support for community initiatives
- **Project Showcase**: Platform for African Web3 projects

## Technology Stack

Built with modern web technologies including Next.js, React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## Project Structure

Organized codebase with modular components, reusable hooks, and structured pages for maintainability and scalability.

## Development Setup

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Formspree URLs for contact forms
   NEXT_PUBLIC_FORMSPREE_CONTACT_URL=https://formspree.io/f/YOUR_CONTACT_FORM_ID
   NEXT_PUBLIC_FORMSPREE_PARTNERSHIP_URL=https://formspree.io/f/YOUR_PARTNERSHIP_FORM_ID
   NEXT_PUBLIC_FORMSPREE_ENTERPRISE_URL=https://formspree.io/f/YOUR_ENTERPRISE_FORM_ID
   NEXT_PUBLIC_FORMSPREE_SPONSORSHIP_URL=https://formspree.io/f/YOUR_SPONSORSHIP_FORM_ID
   NEXT_PUBLIC_FORMSPREE_MENTORSHIP_URL=https://formspree.io/f/YOUR_MENTORSHIP_FORM_ID
NEXT_PUBLIC_FORMSPREE_FEEDBACK_URL=https://formspree.io/f/YOUR_FEEDBACK_FORM_ID
NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL=https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:ignore` - Skip linting

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Configure build settings for Next.js
- **Railway**: Deploy with automatic environment variable injection
- **DigitalOcean App Platform**: One-click deployment

## Customization

### Branding

- Update colors in `tailwind.config.js`
- Replace logo in `public/logo.svg`
- Modify brand colors in component files

### Content

- Edit page content in respective `page.tsx` files
- Update navigation in `app/layout.tsx`
- Modify footer links in `components/Footer.tsx`

### Styling

- Customize Tailwind classes throughout components
- Add custom CSS in `app/globals.css`
- Modify component-specific styles

## Contact Forms Setup

The website uses Formspree for all contact forms. To set up:

1. Create forms at [formspree.io](https://formspree.io)
2. Add form URLs to environment variables
3. Configure email notifications in Formspree dashboard
4. Set up auto-replies for better user experience

**Available Forms:**
- Contact form (`NEXT_PUBLIC_FORMSPREE_CONTACT_URL`)
- Partnership form (`NEXT_PUBLIC_FORMSPREE_PARTNERSHIP_URL`)
- Enterprise form (`NEXT_PUBLIC_FORMSPREE_ENTERPRISE_URL`)
- Sponsorship form (`NEXT_PUBLIC_FORMSPREE_SPONSORSHIP_URL`)
- Mentorship application form (`NEXT_PUBLIC_FORMSPREE_MENTORSHIP_URL`)
- General feedback form (`NEXT_PUBLIC_FORMSPREE_FEEDBACK_URL`)
- Newsletter subscription (`NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL`)

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Implement responsive design patterns

### Component Structure

- Keep components modular and reusable
- Use proper TypeScript interfaces
- Implement loading states and error handling
- Follow Next.js App Router conventions

### Performance

- Optimize images with Next.js Image component
- Use proper loading strategies
- Implement lazy loading where appropriate
- Monitor Core Web Vitals

## Contributing

This is a proprietary project. Internal contributions should follow:

1. Create feature branches from `main`
2. Follow the existing code style
3. Test thoroughly before submitting
4. Update documentation as needed
5. Ensure responsive design works on all devices

## License

This project is proprietary and confidential. All rights reserved. This website is hosted with SSL certification and is a registered business platform. Cloning, copying, or unauthorized use is strictly prohibited.

## Acknowledgments

### Core Team

- [**@0xJonaseb11**](https://github.com/0xJonaseb11) - Technical Support Lead
- [**@NyLaurent**](https://github.com/NyLaurent) - Developer Relations
- **Design Team** - UI/UX Design & Branding

### Technology Partners

- **Next.js Team** - React framework
- **Vercel** - Site Traffic && Analytics
- **Hostinger** - Hosting and deployment
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Formspree** - Contact form handling

### Community Contributors

- **Web3 Mates Community** - Feedback and testing
- **African Web3 Developers** - Community support
- **Blockchain Enthusiasts** - Content and ideas

## Connect With Us

### Official Channels

- **Website**: [web3mates.com](https://www.web3mates.com)
- **Email**: [info@web3mates.com](mailto:info@web3mates.com)

### Social Media

- **Twitter/X**: [@Web3Mates](https://x.com/Web3Mates)
- **LinkedIn**: [Web3 Mates](https://linkedin.com/company/web3mates)

### Community Platforms

- **Discord**: [Join our community](https://discord.gg/qzECSsvuxu)
- **Telegram**: [Follow us](https://t.me/+Gc9JJOqazxgxZmQ0)
- **GitHub**: [Web3Mates](https://github.com/Web3Mates)

---

<div align="center">
  <strong>Empowering Africa's Web3 Builders—One Line of Code at a Time</strong>
  
  © 2025 Web3 Mates - Blockchain Catalyst. All Rights Reserved.
</div>
