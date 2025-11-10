#!/bin/bash

# Script to push workout-app to GitHub
# Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "❌ Error: Please provide your GitHub username"
    echo "Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="workout-plan-app"

echo "🚀 Setting up GitHub repository..."
echo ""

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
else
    echo "➕ Adding remote repository..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

# Ensure we're on main branch
git branch -M main

echo ""
echo "📤 Pushing to GitHub..."
echo ""
echo "⚠️  IMPORTANT: Make sure you've created the repository on GitHub first!"
echo "   Go to: https://github.com/new"
echo "   Repository name: $REPO_NAME"
echo "   DO NOT initialize with README, .gitignore, or license"
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Import your repository"
    echo "3. Deploy!"
else
    echo ""
    echo "❌ Failed to push. Make sure:"
    echo "   1. The repository exists on GitHub"
    echo "   2. You have the correct permissions"
    echo "   3. You're authenticated with GitHub"
fi

