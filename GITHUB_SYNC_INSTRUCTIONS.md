# GitHub Repository Sync Instructions

Your iDIG website is now ready for GitHub! All deployment files have been copied to the repository root.

## Files Ready for GitHub:

✅ **package.json** - Clean production dependencies  
✅ **vite.config.ts** - Production Vite configuration  
✅ **src/** - Complete React application source code  
✅ **public/** - Static HTML and assets  
✅ **assets/** - Video demos and images  
✅ **netlify.toml** - Netlify deployment config  
✅ **vercel.json** - Vercel deployment config  
✅ **.gitignore** - Proper Git ignore rules  

## Next Steps:

### Option 1: Manual Upload (Easiest)
1. Go to https://github.com/paulduplantis/idig_website
2. Click "uploading an existing file" or drag and drop all the files
3. Commit the changes

### Option 2: Git Commands (If you have Git access)
Run these commands in your terminal:

```bash
git add .
git commit -m "Initial deployment of iDIG website"
git branch -M main
git remote add origin https://github.com/paulduplantis/idig_website.git
git push -u origin main
```

## Once Uploaded to GitHub:

### Deploy with Netlify (Recommended)
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select the `idig_website` repository
5. Netlify will auto-detect the settings from `netlify.toml`
6. Click "Deploy site"
7. Your site will be live instantly!

### Deploy with Vercel
1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Deploy with GitHub Pages
1. In your repository settings, go to Pages
2. Select "GitHub Actions" as source
3. The site will build automatically

Your iDIG website will be live and ready to share with the world! 🚀