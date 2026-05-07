# Deployment Guide 🚀

This guide covers how to deploy your medical billing portfolio to various platforms.

## Prerequisites

Before deploying, ensure:
1. Run `npm run build` successfully locally
2. Test `npm run preview` to verify production build
3. All content is customized with your information
4. No console errors in development

## 1. Vercel (Recommended) ⭐

Vercel is optimized for Vite and React projects with automatic deployments.

### Option A: Using Vercel CLI

```bash
# Install Vercel 
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Option B: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Vercel Environment Variables
Create `.env.local`:
```
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_CONTACT_EMAIL=your_email@example.com
```

### Benefits
- Free tier with unlimited sites
- Automatic deployments on push
- Built-in analytics
- Global CDN
- SSL certificate included

---

## 2. Netlify

### Option A: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Option B: Drag & Drop

1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to deploy
4. Site deployed instantly!

### Option C: Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository on Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Auto-deploy on every push

### Netlify.toml Configuration

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Benefits
- Generous free tier
- Easy Git integration
- Form handling available
- Analytics included
- Easy rollback

---

## 3. GitHub Pages

Host directly from your GitHub repository.

### Setup Steps

1. **Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

2. **Configure for GitHub Pages**

Edit `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repo-name/',  // Replace with your repo name
  // ... rest of config
})
```

3. **Update package.json**
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
  }
}
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select `gh-pages` branch
   - Save

### Custom Domain

1. In repository Settings > Pages
2. Add custom domain
3. Update DNS records (see GitHub's instructions)
4. Add CNAME file to `public/CNAME`

### Benefits
- Free hosting
- No server needed
- Version control integrated
- Easy to maintain

---

## 4. Traditional Web Hosting

For cPanel/Cpanel-based shared hosting:

### Steps

1. **Build locally**
```bash
npm run build
```

2. **Upload dist folder**
   - Connect via FTP/SFTP
   - Upload entire `dist` folder contents to `public_html/`

3. **Configure .htaccess** (for Apache servers)

Create `.htaccess` in root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. **Set Node.js Environment** (if available)
   - Use hosting's Node.js setup
   - Point to your dist folder

### Recommended Hosts
- Bluehost
- HostGator
- SiteGround
- DreamHost
- A2 Hosting

---

## 5. AWS (Amazon Web Services)

### Using AWS Amplify (Easiest)

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### Using S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist` folder contents
4. Set up CloudFront distribution
5. Point custom domain to CloudFront

### Benefits
- Scalable infrastructure
- High performance
- Global CDN
- HTTPS included

---

## 6. Azure Static Web Apps

```bash
# Install Azure CLI
npm install -g @azure/static-web-apps-cli

# Deploy
swa deploy ./dist
```

---

## 7. Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## Environment Variables

### Local Development
Create `.env.local`:
```
VITE_API_URL=http://localhost:3000
VITE_EMAILJS_PUBLIC_KEY=your_key
```

### Production
Set environment variables in your hosting platform:
- **Vercel**: Project Settings > Environment Variables
- **Netlify**: Site Settings > Build & Deploy > Environment
- **GitHub Pages**: Can't use .env files, hardcode or use APIs

---

## Custom Domain Setup

### Domain Registration
- GoDaddy
- Namecheap
- Route 53 (AWS)
- Google Domains

### For Vercel
1. Go to Project Settings
2. Domains
3. Add custom domain
4. Update DNS records

### For Netlify
1. Go to Site Settings
2. Domain Management
3. Add custom domain
4. Update DNS records

### DNS Records Example
```
Type    Name    Value
A       @       IP address from hosting
CNAME   www     your-site.vercel.app
```

---

## SSL/HTTPS

All platforms above provide free SSL certificates:
- Vercel ✓
- Netlify ✓
- GitHub Pages ✓
- AWS ✓
- Azure ✓

---

## Performance Optimization

### Before Deployment

1. **Audit Build**
```bash
npm run build
npm run preview
```

2. **Test Performance**
   - Use Lighthouse in Chrome DevTools
   - Check PageSpeed Insights
   - Test on slow 3G network

3. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use responsive images

4. **Monitor Bundle Size**
```bash
npm install --save-dev @vitejs/plugin-visualize
```

### After Deployment

- Monitor performance metrics
- Set up analytics
- Monitor error rates
- Track user interactions

---

## Analytics Integration

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

### Vercel Analytics
Automatically included with Vercel!

### Netlify Analytics
- Go to Site Settings
- Enable Netlify Analytics (paid feature)

---

## Monitoring & Logging

### Sentry (Error Tracking)

```bash
npm install @sentry/react @sentry/tracing
```

In `main.jsx`:
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

### Debugging Deployment Issues

**Build fails:**
```bash
npm run build -- --verbose
```

**Site blank after deploy:**
- Check browser console for errors
- Verify environment variables
- Check routing configuration (.htaccess or redirect rules)

**Slow performance:**
- Check bundle size
- Analyze unused dependencies
- Enable compression on server

---

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## Deployment Comparison

| Platform | Cost | Setup | Performance | Scalability |
|----------|------|-------|-------------|------------|
| Vercel | Free | Easy | Excellent | High |
| Netlify | Free | Easy | Excellent | High |
| GitHub Pages | Free | Medium | Good | Medium |
| AWS | Pay-per-use | Complex | Excellent | Very High |
| Traditional | $5-15/mo | Medium | Good | Medium |

---

## Recommended Path for Beginners

1. **Start with Vercel**
   - Sign up with GitHub
   - Connect repository
   - Deploy with one click
   - Free HTTPS and domain

2. **Add custom domain** (optional)
   - Register domain (~$10/year)
   - Point to Vercel
   - Auto SSL certificate

3. **Monitor with analytics**
   - Use Vercel Analytics
   - Track visitor behavior

4. **Scale if needed**
   - Upgrade Vercel Pro ($20/month)
   - Or move to AWS/Azure

---

## Post-Deployment Checklist

- [ ] Site accessible via URL
- [ ] Mobile responsive
- [ ] All links work
- [ ] Contact form functional
- [ ] CV download works
- [ ] No console errors
- [ ] Images load properly
- [ ] Animations smooth
- [ ] SEO meta tags present
- [ ] Analytics installed
- [ ] Custom domain working
- [ ] SSL certificate active
- [ ] Backup of source code

---

## Support & Troubleshooting

**Issue: "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue: "Port already in use"**
```bash
npm run dev -- --port 3001
```

**Issue: "Styles not loading"**
- Clear browser cache
- Verify Tailwind config
- Rebuild: `npm run build`

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev

Good luck with your deployment! 🚀
