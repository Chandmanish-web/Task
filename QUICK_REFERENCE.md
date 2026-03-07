# ERPNext Entry Level Assignment - Quick Reference

## 📋 For Recruiters/Evaluators

### Assignment Overview
- **Level**: Entry (0-1 years experience)
- **Total Time**: 8-10 hours
- **Passing Score**: 70/100
- **Total Points**: 100

### 4 Main Tasks

| Task | Duration | Difficulty | Points |
|------|----------|-----------|--------|
| 1. Library Member DocType | 2 hours | Easy | 10 |
| 2. Book DocType | 2 hours | Easy-Medium | 15 |
| 3. Book Transaction DocType | 3 hours | Medium | 15 |
| 4. Testing Documentation | 1 hour | Easy | 10 |
| **Environment Setup** | 2 hours | Medium | 20 |
| **Git & Submission** | 1 hour | Easy | 10 |
| **Code Quality** | - | - | 10 |

### Quick Evaluation Checklist

**Setup & Environment (20 points)**
- [ ] Environment working (Docker or Bare-metal)
- [ ] All verification items checked
- [ ] 9 required screenshots provided

**DocType Creation (40 points)**
- [ ] Library Member: All fields, validation, naming series ✓
- [ ] Book: All fields, inventory logic, validation ✓
- [ ] Book Transaction: All fields, date validation, links ✓
- [ ] Naming series working for all 3

**Basic Logic (20 points)**
- [ ] Validation working (due dates, return dates, etc.)
- [ ] Link fields functioning
- [ ] Sample data created (2-5 records per DocType)

**Documentation (10 points)**
- [ ] TESTING.md with 17 test cases documented
- [ ] Test cases follow required format
- [ ] All required screenshots included

**Git & Submission (10 points)**
- [ ] Commit messages follow conventions (feat, fix, docs, etc.)
- [ ] PR description complete and detailed
- [ ] Clean commit history

### Scoring Guide

**85-100**: Excellent work, ready for interview
- All tasks perfect
- Code quality high
- Documentation thorough

**70-84**: Good work, meets requirements
- All tasks complete
- Minor issues in code/documentation
- Git workflow acceptable

**60-69**: Needs improvement, conditional pass
- Most tasks complete
- Significant quality issues
- Missing some documentation

**<60**: Does not meet requirements
- Incomplete tasks
- Poor quality
- Missing deliverables

---

## 📧 Submission Requirements

### Candidate Must Provide:

1. **Public Git Repository** (GitHub/GitLab)
   - OR zip file with complete `.git` folder

2. **Pull Request** 
   - Detailed description
   - Screenshots included
   - Testing steps documented

3. **Screenshots** (9 required)
   - 3 for Library Member (form, list, filled form)
   - 3 for Book (form, list, filled form)
   - 3 for Book Transaction (issue, return, validation error)

4. **TESTING.md**
   - 17 test cases minimum
   - Test case format followed
   - All sections completed

5. **SELF_REVIEW.md**
   - Using provided template
   - Time breakdown
   - Challenges and learnings documented

### Email Format

**Subject**: `ERPNext Entry Level Assignment - [Candidate Name]`

**Include**:
- Repository URL (must be public)
- PR link
- Screenshots zip file
- SELF_REVIEW.md document
- Total time spent
- Contact information

**Submit to**: raplsfsolutions@gmail.com

**Deadline**: 3 days from assignment distribution

---

## 🎯 Interview Follow-Up Questions

After evaluation, ask candidates:

1. **"Walk me through your DocType design. Why did you choose those field types?"**
   - Looking for: Understanding of field types, naming conventions, validation

2. **"How did you implement the date validation for Book Transaction?"**
   - Looking for: Use of frappe utilities, understanding of before_save

3. **"What challenges did you face during setup? How did you overcome them?"**
   - Looking for: Problem-solving skills, persistence, debugging ability

4. **"How would you extend this to handle library fines/fees?"**
   - Looking for: Creative thinking, system design understanding

5. **"Walk me through your testing approach. Why those test cases?"**
   - Looking for: Testing mindset, edge case thinking

---

## ⏱️ Evaluation Timeline

### Day 1: Submission Received
- Add to tracking spreadsheet
- Acknowledge receipt via email

### Day 2: Initial Review
- Check for all required deliverables
- Verify repository is public
- Scan for obvious issues

### Day 3: Detailed Evaluation
- Use EVALUATION.md rubric
- Score each category
- Calculate total points

### Day 4-5: Interview Scheduling
- Contact candidates with score (if passing)
- Schedule 30-minute technical interviews
- Send interview guidelines

### Day 5+: Interview & Decision
- Conduct technical interview
- Final evaluation and feedback
- Send offer or rejection with constructive feedback

---

## 🚀 GitHub Setup Instructions

To publish this assignment:

```bash
# 1. Create new repository on github.com
# Name: erpnext-developer-tasks
# Description: "ERPNext Entry Level Developer Assignment - Complete Package"
# Make it PUBLIC

# 2. In your local repo:
git remote set-url origin https://github.com/YOUR_USERNAME/erpnext-developer-tasks.git
git branch -M main
git push -u origin main

# 3. Add topics on GitHub:
# - erpnext
# - frappe
# - assignment
# - hiring
# - entry-level

# 4. Pin important files in README
```

---

## 📊 Candidate Tracking Spreadsheet

Create a Google Sheet or Excel with columns:

| Candidate Name | Email | Submission Date | Repo URL | Score | Pass? | Interview | Notes |
|---|---|---|---|---|---|---|---|
| John Doe | john@example.com | 2024-03-10 | github.com/... | 82 | ✅ | 2024-03-15 | Strong code |
| Jane Smith | jane@example.com | 2024-03-12 | github.com/... | 65 | ❌ | - | Resubmit |

---

## ❓ Common Candidate Questions (FAQ)

**Q: Can I use Docker or bare-metal setup?**
A: Either works! Docker is recommended for easier setup. Both are equally acceptable.

**Q: How many test cases do I need?**
A: Minimum 17 test cases documented in TESTING.md. More is better if thorough.

**Q: Can I add extra features/functionality?**
A: Yes! You'll score bonus points, but complete core requirements first.

**Q: What if I can't get environment working in time?**
A: Email support ASAP with error logs. We'll help troubleshoot.

**Q: How is the score calculated?**
A: See EVALUATION.md in resources folder. 100-point rubric with detailed breakdown.

**Q: Can I submit late?**
A: Submit ASAP. Late submissions may affect interview scheduling.

---

**Last Updated**: March 7, 2026

