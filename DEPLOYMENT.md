# Deployment Guide

This guide covers deploying your portfolio website to various platforms using GitHub as the source repository.

## Prerequisites

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-portfolio.git
   git push -u origin main
   ```

2. **Environment Variables**:
   All platforms will need these environment variables:
   ```bash
   NODE_ENV=production
   DATABASE_URL=your_database_url
   SESSION_SECRET=your_session_secret
   PORT=5000
   ```

## Platform-Specific Deployment

### 1. Railway (Recommended for Full-Stack)

Railway is perfect for full-stack apps with databases.

**Steps:**
1. Visit [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your portfolio repository
5. Railway auto-detects Node.js and builds automatically
6. Add environment variables in Railway dashboard:
   - Go to your project → Variables tab
   - Add `DATABASE_URL`, `SESSION_SECRET`, etc.
7. Railway provides a PostgreSQL database if needed:
   - Click "New" → "Database" → "PostgreSQL"
   - Copy the connection string to `DATABASE_URL`

**Custom Domain:**
- Go to Settings → Domains
- Add your custom domain and configure DNS

### 2. Vercel (Great for Frontend-Heavy Apps)

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to link your GitHub repo
4. Set environment variables:
   ```bash
   vercel env add DATABASE_URL production
   vercel env add SESSION_SECRET production
   ```
5. Deploy: `vercel --prod`

**Or via Vercel Dashboard:**
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure environment variables
4. Deploy automatically

### 3. Netlify (Alternative Option)

**Steps:**
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub and select your repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
5. Add environment variables in Site settings → Environment variables

### 4. Heroku (Traditional PaaS)

**Steps:**
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-portfolio-name`
4. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set DATABASE_URL=your_database_url
   heroku config:set SESSION_SECRET=your_secret
   ```
5. Deploy: `git push heroku main`

### 5. DigitalOcean App Platform

**Steps:**
1. Visit [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Create new app from GitHub
3. Configure build settings:
   - Build command: `npm run build`
   - Run command: `npm start`
4. Add environment variables
5. Deploy

## Database Setup

### Option 1: Neon Database (Recommended)
1. Visit [neon.tech](https://neon.tech)
2. Create a free PostgreSQL database
3. Copy connection string to `DATABASE_URL`

### Option 2: Railway PostgreSQL
1. In Railway project, click "New" → "Database" → "PostgreSQL"
2. Use the provided connection string

### Option 3: Supabase
1. Visit [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings → Database

## CI/CD with GitHub Actions

The included `.github/workflows/deploy.yml` provides:
- Automatic testing on pull requests
- Automatic deployment on main branch pushes
- Support for multiple deployment platforms

**To activate:**
1. Push the workflow file to your repository
2. Add secrets in GitHub:
   - Repository Settings → Secrets and variables → Actions
   - Add platform-specific tokens (e.g., `RAILWAY_TOKEN`, `VERCEL_TOKEN`)

## Domain Configuration

### Custom Domain Setup
1. **Purchase domain** from provider (Namecheap, GoDaddy, etc.)
2. **Configure DNS**:
   - For Railway/Heroku: Add CNAME record pointing to platform URL
   - For Vercel/Netlify: Follow their domain setup guide
3. **Update platform settings** to use custom domain
4. **SSL Certificate**: Most platforms provide free SSL automatically

### Subdomain Setup
You can also use a subdomain like `portfolio.yourdomain.com`:
1. Add CNAME record: `portfolio` → `your-app.platform.com`
2. Configure in platform dashboard

## Environment-Specific Configurations

### Development
```bash
NODE_ENV=development
DATABASE_URL=postgresql://localhost:5432/portfolio_dev
SESSION_SECRET=dev_secret
PORT=5000
```

### Production
```bash
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/portfolio_prod
SESSION_SECRET=super_secure_random_string
PORT=5000
```

## Performance Optimizations

1. **Enable gzip compression** (most platforms do this automatically)
2. **Set proper cache headers** (configured in platform files)
3. **Optimize images** in the `client/public` directory
4. **Monitor performance** using platform analytics

## Monitoring & Logs

### Railway
- View logs in Railway dashboard → Deployments
- Set up monitoring in Observability tab

### Vercel
- View function logs in Vercel dashboard
- Real-time logs with `vercel logs`

### Netlify
- View build and function logs in dashboard
- Real-time logs with Netlify CLI

## Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

**Database Connection:**
- Verify `DATABASE_URL` format
- Ensure database is accessible from platform IP ranges
- Check firewall settings

**Environment Variables:**
- Ensure all required variables are set
- Check variable names match exactly
- Restart app after changing variables

**Static File Issues:**
- Verify build output in `dist/public`
- Check file paths and case sensitivity
- Ensure assets are properly referenced

### Getting Help

1. **Platform Documentation**:
   - [Railway Docs](https://docs.railway.app)
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)

2. **Community Support**:
   - Platform Discord servers
   - Stack Overflow
   - GitHub Issues

## Security Checklist

- [ ] Use strong, unique `SESSION_SECRET`
- [ ] Set `NODE_ENV=production`
- [ ] Use HTTPS (enabled by default on most platforms)
- [ ] Keep dependencies updated
- [ ] Don't commit sensitive data to Git
- [ ] Use environment variables for secrets
- [ ] Enable platform security features (firewalls, DDoS protection)

## Backup Strategy

1. **Database Backups**:
   - Set up automated backups in your database provider
   - Test restore procedures regularly

2. **Code Backups**:
   - GitHub serves as your primary backup
   - Consider additional remotes for critical projects

3. **Asset Backups**:
   - Store important files in cloud storage
   - Version control binary assets appropriately

---

Choose the platform that best fits your needs. Railway is recommended for beginners due to its simplicity and full-stack support, while Vercel excels for frontend-focused applications with serverless functions.