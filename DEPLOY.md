# Cloudflare Pages Deployment Guide

## Quick Deploy Steps

### 1. Initialize Git Repository

```bash
cd /Users/hongc/codebuddy/job/aff/thesmartringlab
git init
git add .
git commit -m "Initial commit: The Smart Ring Lab static site"
```

### 2. Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/thesmartringlab.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click "Workers & Pages" → "Create application" → "Pages" → "Connect to Git"
3. Select your GitHub repository
4. Configure build settings:
   - **Project name**: `thesmartringlab`
   - **Production branch**: `main`
   - **Build command**: (leave empty)
   - **Build output directory**: `public`
5. Click "Save and Deploy"

### 4. Add Custom Domain

1. After deployment, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter: `thesmartringlab.com`
4. Follow DNS instructions (Cloudflare will guide you)

## Your Site Structure

```
public/
├── index.html                          # Homepage
├── air-purifier/
│   ├── index.html                      # Category page
│   └── levoit-red-light/
│       └── index.html                  # ✅ First article (ready to publish)
├── robot-vacuum/index.html
├── fan/index.html
├── privacy-policy/index.html
├── terms/index.html
├── assets/css/style.css
├── sitemap.xml
└── robots.txt
```

## What's Ready

✅ Complete site structure
✅ First article: Levoit Red Light guide
✅ SEO-optimized HTML
✅ Clean URLs
✅ Responsive design
✅ Sitemap & robots.txt

## Next Steps After Deploy

1. **Verify deployment**: Visit your Cloudflare Pages URL
2. **Add Amazon affiliate links**: Replace `#` in the CTA button with your actual affiliate link
3. **Submit to Google Search Console**: Add your sitemap
4. **Test the article**: Check `/air-purifier/levoit-red-light/`

## Adding More Articles

Create new article:
```bash
mkdir -p public/air-purifier/new-article-slug
# Copy template from levoit-red-light/index.html
# Edit content
# Update air-purifier/index.html to link to it
# Update sitemap.xml
git add .
git commit -m "Add new article"
git push
```

Cloudflare Pages will auto-deploy on every push.
