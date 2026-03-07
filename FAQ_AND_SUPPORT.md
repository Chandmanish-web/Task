# ERPNext Developer Assignment - FAQ & Support Guide

## 🆘 For Support Team (raplsfsolutions@gmail.com)

### Common Setup Issues

#### Q: Docker won't start - Port 3000 already in use

**A:** 
```bash
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with the process ID)
taskkill /PID <PID> /F

# Or change ports in docker-compose
# Edit pwd.yml and change port mappings
```

#### Q: bench command not found (Bare-metal)

**A:**
```bash
# Ensure bench is installed
pip install frappe-bench

# Or if it's in a virtual environment:
source venv/bin/activate  # On Linux/Mac
venv\Scripts\activate      # On Windows

# Then try again
bench --version
```

#### Q: Permission denied creating database (Bare-metal)

**A:**
```bash
# Ensure you have proper permissions
# Run with sudo if needed:
sudo bench new-site library.localhost

# Or change folder permissions
chmod -R 755 frappe-bench
```

#### Q: Link fields showing no options

**A:**
1. Verify both DocTypes exist (Library Member, Book)
2. Field type must be "Link" (not "Data")
3. "Options" field must match DocType name exactly
4. Clear cache:
```bash
bench --site library.localhost clear-cache
```

#### Q: Validation Python errors

**A:**
Check for syntax errors:
```bash
# Enter Frappe console
bench --site library.localhost console

# Try importing the module
from library_management.library_management.doctype.book.book import Book

# If errors, fix them and try again
```

---

### Common Development Issues

#### Q: Form fields not updating in real-time

**A:**
```javascript
// Use frappe.ui.form.on event handler pattern:
frappe.ui.form.on('Library Member', {
    refresh(frm) {
        // This runs when form refreshes
    },
    
    status(frm) {
        // This runs when 'status' field changes
    }
});
```

#### Q: Date comparison not working

**A:**
```python
from frappe.utils import getdate

# Always convert to date objects first
if getdate(self.return_date) < getdate(self.transaction_date):
    frappe.throw("Return date cannot be before transaction date")
```

#### Q: Naming series not auto-generating

**A:**
1. Check naming series format: `TXN-.#####` 
2. Verify "Permissions" - user must have Create rights
3. Try creating manually first to debug:
```bash
bench --site library.localhost shell
doc = frappe.get_doc({
    'doctype': 'Book Transaction',
    'member': 'LIB-MEM-00001'
})
doc.insert()
print(doc.name)
```

#### Q: Get error "DocType not found: Library Member"

**A:**
```bash
# Ensure app is installed
bench --site library.localhost install-app library_management

# Or list installed apps to verify
bench --site library.localhost list-apps
```

---

### Testing & Screenshots Issues

#### Q: How do I take good screenshots?

**A:**
1. Use full screen (1920x1080 or better)
2. Clear cache before taking (Ctrl+Shift+R)
3. Make sure form is filled but not scrolled
4. Include entire form not cut off
5. Tools:
   - Windows: Snipping Tool, Gyazo, or ShareX
   - Mac: Cmd+Shift+4
   - Linux: Flameshot

#### Q: What if I made a mistake in screenshots?

**A:**
- Retake the screenshots
- Resubmit with updated screenshot zip
- Include note: "Resubmission - Updated screenshots"
- Don't worry about time penalty if caught early

#### Q: Screenshot not showing validation error

**A:**
```python
# Trigger validation error:
# In Python validation (before_save):
frappe.throw("Your error message here")

# In JavaScript validation (form script):
frappe.ui.form.on('Book', {
    validate(frm) {
        if (!frm.doc.total_copies) {
            frappe.throw("Total copies is required");
        }
    }
});

# Then user can screenshot the error message
```

---

### Git & PR Issues

#### Q: How do I fix a bad commit message?

**A:**
```bash
# Fix last commit message (before pushing)
git commit --amend -m "feat(book): correct message here"

# If already pushed, use revert (don't force push)
git revert <commit-hash>
git commit -m "revert: revert bad commit <hash>"
```

#### Q: My commits are all in the test branch, not main

**A:**
```bash
# Create clean history
git checkout main
git pull origin main

# Rebase feature branch
git checkout feature/your-feature
git rebase main
git push origin feature/your-feature --force-with-lease

# Then create PR from clean branch
```

#### Q: PR shows too many files changed

**A:**
- This is okay if all changes are related to assignment
- Should not include node_modules, __pycache__, .git folder
- Check .gitignore is proper:
```
*.pyc
__pycache__/
*.swp
.DS_Store
node_modules/
```

---

### Submission Issues

#### Q: How do I submit if my repo is private?

**A:**
```bash
# Option 1: Make it public
# Settings → Danger Zone → Change to public

# Option 2: Create zip with git history
zip -r library_management.zip .git apps/ --exclude="node_modules/*" "__pycache__/*"

# Attach that zip instead of URL
```

#### Q: Do I need to include all files or just my code?

**A:**
Submit ONLY your custom app:
```
apps/library_management/
  ├── library_management/
  │   ├── doctype/
  │   │   ├── library_member/
  │   │   ├── book/
  │   │   └── book_transaction/
  │   ├── __init__.py
  │   └── __pycache__/ (exclude)
  ├── pyproject.toml
  └── ... other files
```

#### Q: What if I missed the 3-day deadline?

**A:**
- Email immediately with explanation
- Late submissions still accepted but noted
- May affect interview scheduling (may take longer to review)
- Better to submit working code late than buggy code on time

---

### Performance & Data Issues

#### Q: Form is very slow to load

**A:**
1. Check for N+1 queries:
```python
# DON'T do this:
members = frappe.get_list('Library Member')
for member in members:
    print(member.email)  # 100+ queries!

# DO this:
members = frappe.get_list('Library Member', fields=['name', 'email'])
```

2. Add indexes to frequently queried fields
3. Use permissions caching

#### Q: How do I test with sample data?

**A:**
```bash
# Enter console
bench --site library.localhost console

# Create sample member
member = frappe.get_doc({
    'doctype': 'Library Member',
    'first_name': 'John',
    'last_name': 'Doe',
    'email': 'john@example.com'
})
member.insert()

# Create sample book
book = frappe.get_doc({
    'doctype': 'Book',
    'title': 'Python Guide',
    'author': 'John Smith',
    'total_copies': 5
})
book.insert()

# Create sample transaction
txn = frappe.get_doc({
    'doctype': 'Book Transaction',
    'member': member.name,
    'book': book.name,
    'transaction_type': 'Issue',
    'transaction_date': frappe.utils.today()
})
txn.insert()
```

---

## 📞 Support Response Template

**Subject: Re: [Issue Title]**

```
Hi [Candidate Name],

Thank you for reaching out!

[Your detailed answer following the appropriate section above]

If you have follow-up questions, feel free to reply to this email.

Best regards,
[Support Team]
```

---

## 🎯 Support SLA (Service Level Agreement)

- **Response Time**: Within 24 hours (business days)
- **Business Hours**: 9 AM - 6 PM [Your Timezone]
- **Holidays**: Closed on [Your holidays]

### Support Priorities

**P1 - Critical (Respond within 2 hours)**
- Cannot start assignment at all
- Environment completely broken
- Data loss or corruption

**P2 - High (Respond within 4 hours)**
- Cannot complete specific task
- Major debugging needed
- Documentation unclear

**P3 - Normal (Respond within 24 hours)**
- Minor issues
- Code optimization questions
- General guidance

---

## 📋 Support Log Template

Keep track of issues for future improvements:

| Date | Candidate | Issue | Resolution | Category | Time Spent |
|------|-----------|-------|-----------|----------|-----------|
| 2024-03-10 | John Doe | Docker port conflict | Provided command to find/kill process | Setup | 15 min |
| 2024-03-11 | Jane Smith | Link field not showing options | Cache clear + DocType check | Development | 20 min |

---

## 🔄 Continuous Improvement

### Track These Metrics
- Most common issues (help identify unclear instructions)
- Time to resolution
- Candidate satisfaction
- Question categories

### Monthly Reviews
- Update FAQ with new issues discovered
- Improve documentation where needed
- Add code examples based on questions
- Adjust time estimates if needed

---

**Last Updated**: March 7, 2026

