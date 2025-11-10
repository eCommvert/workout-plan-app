# 🚀 Deployment Guide

## Step 1: Push to GitHub

### Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `workout-plan-app` (or any name you prefer)
4. Make it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Push Your Code to GitHub

Run these commands in your terminal (from the workout-app directory):

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/workout-plan-app.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

If you're using SSH instead of HTTPS:

```bash
git remote add origin git@github.com:YOUR_USERNAME/workout-plan-app.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com) and sign in (use GitHub to sign in)
2. Click "Add New..." → "Project"
3. Import your GitHub repository (`workout-plan-app`)
4. Vercel will automatically detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Your app will be live at: `https://workout-plan-app.vercel.app` (or your custom domain)

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# From the workout-app directory, run:
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? workout-plan-app
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically set up SSL

## ✅ That's It!

Your workout plan app is now:
- ✅ On GitHub (version controlled)
- ✅ Deployed on Vercel (live on the web)
- ✅ Automatically deploying on every push to main branch

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- Push to `main` branch → Production deployment
- Create a pull request → Preview deployment

## 📝 Environment Variables

This app doesn't require any environment variables, but if you add features that need them:
1. Go to Vercel dashboard → Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## 🐛 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm install` works locally
- Check Vercel build logs for specific errors

### App Not Loading
- Check that the build output is in `dist/` folder
- Verify `vercel.json` configuration
- Check browser console for errors

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev

---

**Your app is ready to share! 🎉**

