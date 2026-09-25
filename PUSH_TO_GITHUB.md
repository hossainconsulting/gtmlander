# Pushing GTM Agents to GitHub

Complete guide for initializing git, creating a GitHub repository, and pushing Phase 1 code to GitHub.

## Step 1: Verify Git Status

```bash
cd gtmlander
git status          # Should show clean working tree
git log --oneline   # Should show 1 commit
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name:** gtmlander
3. **Description:** AI-powered lead qualification landing page
4. **Visibility:** Public (for portfolio)
5. ❌ Do NOT check "Add README", "Add .gitignore", "Choose license"
6. Click **"Create repository"**

## Step 3: Add Remote and Push

```bash
cd gtmlander

# Add remote (replace with your URL)
git remote add origin https://github.com/yourusername/gtmlander.git

# Verify remote
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Verify on GitHub

1. Visit https://github.com/yourusername/gtmlander
2. You should see:
   - 1 commit in history
   - 26 files in repository
   - README.md displaying on home page
   - src/components/ folder structure

## Step 5: Optional — Configure GitHub Actions Secrets

For Vercel deployment (optional):
1. Go to Settings → Secrets and variables → Actions
2. Add secrets for:
   - VERCEL_TOKEN
   - VERCEL_ORG_ID
   - VERCEL_PROJECT_ID

Without these, workflows will show warnings but won't fail.

## Troubleshooting

**Authentication Error?**
```bash
# Use GitHub CLI (recommended)
gh auth login
git push -u origin main
```

**Remote already exists?**
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/gtmlander.git
git push -u origin main
```

**Not in git repository?**
```bash
cd gtmlander
git status
```

---

**Ready to push!** 🚀
