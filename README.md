# The Smart Ring Lab

Static website for smart home troubleshooting guides and reviews.

## Structure

```
public/
├── index.html                          # Homepage
├── air-purifier/
│   ├── index.html                      # Air purifier category page
│   └── levoit-red-light/
│       └── index.html                  # First article
├── robot-vacuum/
│   └── index.html                      # Robot vacuum category page
├── fan/
│   └── index.html                      # Fan category page
├── privacy-policy/
│   └── index.html
├── terms/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   └── images/
├── sitemap.xml
└── robots.txt
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your GitHub repository
4. Set build settings:
   - Build command: (leave empty)
   - Build output directory: `public`
5. Deploy

## Adding New Articles

1. Create a new directory under the appropriate category
2. Add an `index.html` file
3. Update the category index page to link to the new article
4. Update `sitemap.xml`

## Domain

Point `thesmartringlab.com` to your Cloudflare Pages deployment.
