# iDIG Website Deployment Instructions

This folder contains all the files needed to deploy your iDIG website to various hosting platforms.

## Quick Start

1. Copy all files from this deployment folder to your GitHub repository root
2. Push to your `main` branch on GitHub
3. Choose your preferred hosting platform below

## Hosting Options

### Option 1: Netlify (Recommended for simplicity)

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub account and select your `idig_website` repository
4. Netlify will automatically detect the build settings from `netlify.toml`
5. Click "Deploy site"
6. Your site will be live at a Netlify URL (you can customize this later)

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite React project
5. Click "Deploy"
6. Your site will be live at a Vercel URL

### Option 3: GitHub Pages

1. In your GitHub repository, go to Settings > Pages
2. Under "Source", select "GitHub Actions"
3. Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## File Structure

```
deployment/
├── src/                    # React source code
├── public/                 # Static assets
├── assets/                 # Video and image assets
├── package.json           # Clean dependencies
├── vite.config.ts         # Production Vite config
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── netlify.toml           # Netlify deployment config
├── vercel.json            # Vercel deployment config
└── .gitignore             # Git ignore file
```

## Important Notes

- The video URL is already updated to point to your GitHub repository
- All Replit-specific dependencies have been removed
- The build process creates a static site that can be hosted anywhere
- The site uses client-side routing, so the hosting platform needs to redirect all routes to index.html (already configured in netlify.toml and vercel.json)

## Local Development

To run locally after copying to GitHub:

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Custom Domain

Once deployed, you can add a custom domain through your hosting platform's dashboard.

## Support

If you encounter any issues during deployment, check:
1. All files were copied correctly
2. package.json dependencies are properly installed
3. Build process completes without errors
4. The hosting platform supports single-page applications (SPA)