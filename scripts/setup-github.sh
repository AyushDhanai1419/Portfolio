#!/bin/bash

# GitHub Repository Setup Script
# This script helps you initialize a GitHub repository and set up deployment

echo "🚀 GitHub Repository Setup for Portfolio Website"
echo "================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote origin already configured"
    git remote -v
else
    echo ""
    echo "🔗 Setting up GitHub remote..."
    echo "Please enter your GitHub repository URL (e.g., https://github.com/username/portfolio.git):"
    read -r repo_url
    
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ Remote origin added: $repo_url"
    else
        echo "❌ No repository URL provided. You can add it later with:"
        echo "   git remote add origin https://github.com/username/portfolio.git"
    fi
fi

# Create initial commit if no commits exist
if ! git rev-parse HEAD > /dev/null 2>&1; then
    echo ""
    echo "📝 Creating initial commit..."
    git add .
    git commit -m "Initial commit: Portfolio website with deployment configuration"
    echo "✅ Initial commit created"
else
    echo "✅ Repository already has commits"
fi

# Set main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo ""
    echo "🔄 Setting main branch..."
    git branch -M main
    echo "✅ Main branch configured"
fi

echo ""
echo "📋 Next Steps:"
echo "==============="
echo ""
echo "1. 📤 Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "2. 🔐 Set up secrets for deployment (in GitHub repository settings):"
echo "   - Go to Settings → Secrets and variables → Actions"
echo "   - Add the following secrets based on your chosen platform:"
echo ""
echo "   For Railway:"
echo "   - RAILWAY_TOKEN (get from Railway dashboard)"
echo ""
echo "   For Vercel:"
echo "   - VERCEL_TOKEN (get from Vercel dashboard)"
echo "   - VERCEL_ORG_ID"
echo "   - VERCEL_PROJECT_ID"
echo ""
echo "   For Netlify:"
echo "   - NETLIFY_AUTH_TOKEN (get from Netlify dashboard)"
echo "   - NETLIFY_SITE_ID"
echo ""
echo "3. 🚀 Choose your deployment platform:"
echo "   - Railway: Full-stack with database (recommended)"
echo "   - Vercel: Great for frontend-focused apps"
echo "   - Netlify: Alternative static site hosting"
echo ""
echo "4. 📖 Read DEPLOYMENT.md for detailed platform-specific instructions"
echo ""
echo "✨ Your portfolio is ready for deployment!"