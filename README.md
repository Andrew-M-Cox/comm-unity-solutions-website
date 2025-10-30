# CommUnity Solutions Website

A Next.js static website for CommUnity Solutions - the premier space for progressive protestant church and faith-based non-profit communication intelligence.

## Features

- **Homepage** with hero section, services preview, and featured blog categories
- **Services Page** detailing retainer-based consulting and intensive 1:1 strategy sessions
- **Blog** with 7 categories and placeholder posts:
  - Org Visioning
  - Fundraising & Stewardship
  - Software Tips & Tactics
  - Social Media
  - Communication Strategies
  - Language Tactics
  - Working with AI
- **Responsive Design** - Mobile-first approach, fully responsive
- **Static Export** - Ready for hosting on any static hosting provider

## Getting Started

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This will generate static files in the `out/` directory, ready to upload to your hosting provider.

## Deployment

### Static Hosting Providers

The site is configured for static export. After running `npm run build`, upload the contents of the `out/` directory to your hosting provider.

#### Recommended Hosting Options:

1. **Netlify**
   - Drag and drop the `out` folder or connect your Git repository
   - Set build command: `npm run build`
   - Set publish directory: `out`

2. **Vercel**
   - Connect your Git repository
   - Vercel will automatically detect Next.js
   - Ensure `output: 'export'` is in `next.config.ts`

3. **GitHub Pages**
   - Upload the `out` folder contents to your repository
   - Enable GitHub Pages in repository settings

4. **Traditional Web Hosting**
   - Upload all files from the `out` directory via FTP
   - Ensure your hosting provider supports static HTML files

### Domain Configuration

Once deployed, point your domain `comm-unitysolutions.com` to your hosting provider by updating your DNS settings according to your hosting provider's instructions.

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── blog/              # Blog pages and categories
│   │   ├── services/          # Services page
│   │   ├── about/             # About page (placeholder)
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   └── components/
│       └── Navbar.tsx         # Navigation component
├── next.config.ts             # Next.js configuration (static export)
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json
```

## Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Static Export** - Generates static HTML/CSS files

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The current palette uses:
- Primary: Green tones (church/faith appropriate)
- Accent: Orange tones

### Content

Blog posts and category data are defined in:
- `src/app/blog/[category]/page.tsx` - Category pages
- `src/app/blog/[category]/[slug]/page.tsx` - Individual blog posts

Replace placeholder content with your actual blog posts.

## License

Private project for CommUnity Solutions.

