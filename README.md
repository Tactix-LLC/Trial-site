# Tactix Landing Page

A modern, responsive landing page for the Tactix mobile fantasy football app built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, sporty design with green gradient theme
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized images
- 🎯 **SEO Optimized**: Meta tags, structured data, and semantic HTML
- 🎭 **Smooth Animations**: Subtle animations and hover effects
- 🎨 **Custom Theme**: Tailwind CSS with custom green gradient colors

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Tactix-Trial-Site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Tactix-Trial-Site/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Hero.tsx             # Hero section with logo and CTA
│   ├── About.tsx            # About the app section
│   ├── HowItWorks.tsx       # Step-by-step process
│   ├── CallToAction.tsx     # Download buttons section
│   └── Footer.tsx           # Footer with links and contact
├── public/
│   └── favicon.ico          # App favicon
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Customization

### Colors

The app uses a custom green gradient theme defined in `tailwind.config.js`:

- `tactix-green-*`: Various shades of green
- `tactix-teal-*`: Various shades of teal

### Components

Each section is a separate React component that can be easily modified:

- **Hero**: Main landing section with logo and download buttons
- **About**: App description and features
- **How It Works**: 4-step process explanation
- **Call to Action**: Secondary download prompt with stats
- **Footer**: Contact info and links

### Styling

The app uses Tailwind CSS utility classes. Custom styles are defined in:

- `app/globals.css`: Global styles and custom utilities
- `tailwind.config.js`: Custom colors, animations, and theme extensions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project for production:

```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For support or questions, email: support@tactixapp.com 