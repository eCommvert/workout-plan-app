# ⚡ Quick Start Guide

## 🎯 Get Your App Online in 3 Steps

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `workout-plan-app`
3. Description: "Visual workout plan web app"
4. Make it **Public** or **Private**
5. **DO NOT** check any boxes (no README, .gitignore, or license)
6. Click "Create repository"

### Step 2: Push to GitHub

**Option A: Use the script (easiest)**
```bash
cd workout-app
./push-to-github.sh YOUR_GITHUB_USERNAME
```

**Option B: Manual commands**
```bash
cd workout-app
git remote add origin https://github.com/YOUR_USERNAME/workout-plan-app.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import `workout-plan-app` repository
5. Click "Deploy" (Vercel auto-detects Vite settings)
6. Wait 1-2 minutes
7. **Done!** Your app is live! 🎉

## 🔗 Your Links

- **GitHub**: `https://github.com/YOUR_USERNAME/workout-plan-app`
- **Vercel**: `https://workout-plan-app.vercel.app` (or custom domain)

## 📝 Need More Details?

See `DEPLOYMENT.md` for detailed instructions.

---

**That's it! Your workout app is now online! 💪**

