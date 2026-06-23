#!/bin/bash

# Initialize git repository if not already done
if [ ! -d .git ]; then
    git init
    echo "Initialized empty Git repository."
fi

# Add all files
git add -A

# Commit changes
git commit -m "feat: implement Shree Hari Clinic landing page based on design guidelines"

echo ""
echo "=== Git repository prepared ==="
echo "To push this project to GitHub and deploy to Vercel:"
echo "1. Create a new repository on GitHub (e.g. using 'gh repo create' or via the website at https://github.com/new)"
echo "2. Run the following commands (replace 'username/repo-name' with your repository info):"
echo "   git remote add origin https://github.com/username/repo-name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Connect your GitHub repository to Vercel (https://vercel.com):"
echo "   - Click 'Add New' -> 'Project'"
echo "   - Import this repository"
echo "   - Keep build settings as default (Framework preset: Vite)"
echo "   - Click 'Deploy'"
