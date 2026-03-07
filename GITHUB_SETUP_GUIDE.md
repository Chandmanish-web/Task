# GitHub Setup Guide for ERPNext Developer Tasks

## 🚀 Publishing to GitHub/GitLab

### Step 1: Create Repository on GitHub

#### On GitHub.com:

1. Go to [github.com/new](https://github.com/new)
2. Fill in details:
   - **Repository name**: `erpnext-developer-tasks`
   - **Description**: `ERPNext Entry Level Developer Assignment - Complete Package`
   - **Visibility**: 🔓 **PUBLIC** (required!)
   - **Initialize repository**: Leave unchecked (we have existing code)

3. Click "Create Repository"

4. Copy the HTTPS URL (e.g., `https://github.com/YOUR_USERNAME/erpnext-developer-tasks.git`)

### Step 2: Push Local Repository

#### In your terminal/PowerShell:

```powershell
cd c:\Users\DESIGN\task\erpnext-developer-tasks

# Set up the remote
git remote set-url origin https://github.com/YOUR_USERNAME/erpnext-developer-tasks.git

# Switch to main branch (if not already there)
git branch -M main

# Push to GitHub
git push -u origin main
```

#### Expected Output:
```
Enumerating objects: 30, done.
Counting objects: 100% (30/30), done.
Compressing objects: 100% (27/27), done.
Writing objects: 100% (30/30), 50.00 KB | 5.00 MiB/s, done.
Total 30 (delta 2), reused 30 (delta 2)
To https://github.com/YOUR_USERNAME/erpnext-developer-tasks.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### Step 3: Verify on GitHub

1. Go to your repository: `https://github.com/YOUR_USERNAME/erpnext-developer-tasks`
2. Verify you see:
   - ✅ All folders visible
   - ✅ All markdown files visible
   - ✅ README.md displays correctly

### Step 4: Configure Repository Settings

#### Add Topics

1. Settings → "About" section
2. Add topics (comma-separated):
   - `erpnext`
   - `frappe`
   - `assignment`
   - `hiring`
   - `entry-level`
   - `technical-interview`

#### Add Description

Go to "About" → Click "Edit":

```
# ERPNext Entry Level Developer Assignment

Complete technical assignment package for evaluating 
entry-level ERPNext developers. Includes detailed 
instructions, tasks, evaluation rubric, and support materials.

- 4 progressive tasks
- 100-point evaluation rubric
- Complete documentation
- Support materials & FAQ
```

#### Enable Discussions (Optional)

1. Settings → Features → Enable "Discussions"
2. Candidates can ask questions without using Issues

#### Setup Discussions Template (Optional)

Create `.github/DISCUSSION_TEMPLATE/` with:

```markdown
**Assignment Level**: [Entry/Junior/Mid/Senior]
**Question Category**: [Setup/Development/Testing/Submission]

### Question
[Describe your question clearly]

### What I've Already Tried
[List troubleshooting steps you've taken]

### Environment
- [ ] Docker
- [ ] Bare-metal
- OS: [Windows/Mac/Linux]
- OS Version: [e.g., Windows 11]
```

---

## 📋 Repository Checklist

Before sharing with candidates:

- [ ] Repository is PUBLIC (verify by visiting in incognito window)
- [ ] All files visible on GitHub
- [ ] README renders correctly
- [ ] Directory structure is clear
- [ ] Topics/Tags are set
- [ ] Description is filled in
- [ ] Discussions enabled (optional)
- [ ] No sensitive data in commits
- [ ] .gitignore is proper (no secrets, node_modules, etc.)
- [ ] Commit history is clean

---

## 🔗 Share Repository URL

Once verified, share this with candidates:

```
📝 ERPNext Entry Level Developer Assignment

Repository: https://github.com/YOUR_USERNAME/erpnext-developer-tasks

⏱️ Time Commitment: 8-10 hours
✅ Passing Score: 70/100
📊 Evaluation Criteria: 100-point rubric

👉 Get Started: Read the README.md first!

Questions? Email: raplsfsolutions@gmail.com
```

---

## 🔄 Later: Making Updates

### During Assignment Period

If you find issues or need to clarify something:

```bash
# Make your changes
git add <files>
git commit -m "docs: clarify [specific section]"
git push origin main
```

**IMPORTANT**: Only update documentation/clarifications, NOT the core tasks or rubric (unfair to already-started candidates).

### After Assignment Period

You can update freely:

```bash
git add -A
git commit -m "docs: improve [section] based on candidate feedback"
git push origin main
```

### Document Changes

Keep a CHANGELOG:

```markdown
# Changelog

## [v1.1] - March 20, 2024

### Fixed
- Clarified date format in SETUP_GUIDE (ISO format)
- Added missing example in TASK_2_BOOK.md

### Changed
- Updated Docker port mappings for conflict resolution
- Improved FAQ with more setup issues

## [v1.0] - March 7, 2024

### Initial Release
- Complete assignment package
- 4 entry-level tasks
- 100-point rubric
- Support materials
```

---

## 🛡️ Branch Protection (Optional)

To prevent accidental changes:

1. Settings → Branches
2. Add branch protection for "main":
   - Require pull request reviews before merging
   - Require status checks to pass
   - Restrict who can push to matching branches

This way only you can merge, candidates can only fork/clone.

---

## 📊 Monitoring Repository

### Track Candidates Using Your Repo

GitHub doesn't give direct stats, but you can:

1. **Check Clones**: Settings → Traffic → Clones
   - See weekly clone count
   - Indicates interest level

2. **Monitor Stars**: Useful for popularity tracking

3. **Check Forks**: See who has forked for development

---

## 🌐 Alternative: GitLab

If you prefer GitLab instead:

### Step 1: Create on GitLab

1. Go to [gitlab.com/projects/new](https://gitlab.com/projects/new)
2. Fill in:
   - **Project Name**: `erpnext-developer-tasks`
   - **Visibility**: Public
   - **Initialize repository**: No

### Step 2: Push Code

```bash
cd c:\Users\DESIGN\task\erpnext-developer-tasks

git remote set-url origin https://gitlab.com/YOUR_USERNAME/erpnext-developer-tasks.git
git branch -M main
git push -u origin main
```

### Step 3: Add Topics

1. Settings → Labels
2. Create topic labels for organization

---

## ⚙️ Continuous Integration (Optional)

You can add GitHub Actions to:
- Check markdown formatting
- Validate file structure
- Run security scans

### Example Workflow `.github/workflows/validate.yml`:

```yaml
name: Validate Repository Structure

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Check required files exist
        run: |
          test -f README.md
          test -f QUICK_REFERENCE.md
          test -f FAQ_AND_SUPPORT.md
          test -f assignments/entry/README.md
          test -f assignments/entry/tasks/TASK_1_LIBRARY_MEMBER.md
          test -f assignments/entry/tasks/TASK_2_BOOK.md
          test -f assignments/entry/tasks/TASK_3_TRANSACTION.md
          test -f assignments/entry/tasks/TASK_4_TESTING.md
      
      - name: Validate markdown
        run: |
          # Install markdownlint
          npm install -g markdownlint-cli
          # Check all md files
          markdownlint '**/*.md'
```

---

## 📞 Support Links to Include

Once on GitHub, share these links with candidates:

**Documentation**:
- Main README: `https://github.com/.../blob/main/README.md`
- Setup Guide: `https://github.com/.../blob/main/assignments/shared/setup/SETUP_GUIDE.md`
- Entry Tasks: `https://github.com/.../blob/main/assignments/entry/README.md`

**Support**:
- FAQ: `https://github.com/.../blob/main/FAQ_AND_SUPPORT.md`
- Email: `raplsfsolutions@gmail.com`

---

## 🎉 When Candidates Submit

1. They'll provide you with their fork/clone URL
2. You'll review their code on GitHub
3. They'll create a Pull Request in their repo
4. You'll review the PR and score it

**Note**: They create PRs in THEIR fork, not your main repo.

---

**Last Updated**: March 7, 2026

