# ERPNext Entry Level Developer Assignment

**Version**: 1.0  
**Target Experience**: 0-1 years  
**Estimated Time**: 8 hours  
**ERPNext Version**: v14 or v15

---

##  Quick Start

1. Read [Environment Setup Guide](assignments/shared/setup/SETUP_GUIDE.md)
2. Complete [Verification Checklist](assignments/shared/setup/VERIFICATION.md)
3. Review [Code Quality Guidelines](assignments/shared/guidelines/CODE_QUALITY.md)
4. Start [Entry Level Tasks](assignments/entry/README.md)

---

## 📁 Repository Structure

```
assignments/
├── README.md                           # This file
├── shared/
│   ├── setup/
│   │   ├── SETUP_GUIDE.md             # Docker & bare-metal setup
│   │   └── VERIFICATION.md            # Setup verification checklist
│   ├── guidelines/
│   │   ├── CODE_QUALITY.md            # Python/JS coding standards
│   │   ├── GIT_WORKFLOW.md            # Git & PR guidelines
│   │   └── TESTING.md                 # Testing expectations
│   └── templates/
│       ├── PR_TEMPLATE.md             # Pull request template
│       └── SELF_REVIEW.md             # Self-review template
└── entry/
    ├── README.md                       # Entry level tasks
    └── resources/
        └── EVALUATION.md               # Evaluation rubric
```

---

##  Entry Level Assignment

### What You'll Build

A **Library Management System** with:
- Library Member management
- Book catalog management
- Book checkout/return transactions

### What You'll Learn

- ERPNext DocType creation
- Basic field types and validation
- CRUD operations
- Manual testing documentation

### Time Breakdown

| Task | Estimated Time |
|------|----------------|
| Environment Setup | 2 hours |
| Library Member DocType | 2 hours |
| Book DocType | 2 hours |
| Book Transaction DocType | 3 hours |
| Testing & Documentation | 1 hour |
| **Total** | **10 hours** |

### Evaluation

- **Total Points**: 100
- **Passing Score**: 70
- **Focus**: Correctness, following instructions, basic functionality

---

##  Documentation Guide

### Before You Start

**Must Read** (in order):
1. [SETUP_GUIDE.md](assignments/shared/setup/SETUP_GUIDE.md) - Install ERPNext
2. [VERIFICATION.md](assignments/shared/setup/VERIFICATION.md) - Verify installation
3. [CODE_QUALITY.md](assignments/shared/guidelines/CODE_QUALITY.md) - Coding standards
4. [GIT_WORKFLOW.md](assignments/shared/guidelines/GIT_WORKFLOW.md) - Git best practices

### During Development

**Reference**:
- [Entry Level Tasks](assignments/entry/README.md) - Your assignment
- [TESTING.md](assignments/shared/guidelines/TESTING.md) - Testing guide

### Before Submission

**Complete**:
- [PR_TEMPLATE.md](assignments/shared/templates/PR_TEMPLATE.md) - Pull request
- [SELF_REVIEW.md](assignments/shared/templates/SELF_REVIEW.md) - Self-assessment

---

##  Getting Started

### Step 1: Environment Setup

Choose your setup method:

**Option A: Docker** (Recommended)
```bash
git clone https://github.com/frappe/frappe_docker.git
cd frappe_docker
docker-compose -f pwd.yml up -d
```

**Option B: Bare-Metal**
```bash
bench init frappe-bench --frappe-branch version-15
cd frappe-bench
bench new-site library.localhost
```

Full instructions: [SETUP_GUIDE.md](assignments/shared/setup/SETUP_GUIDE.md)

### Step 2: Create Custom App

```bash
# Docker
docker-compose -f pwd.yml exec backend bench new-app library_management

# Bare-metal
bench new-app library_management
```

### Step 3: Start Building

Follow the tasks in [assignments/entry/README.md](assignments/entry/README.md)

---

##  Submission

### What to Submit

1. **Git Repository** (GitHub/GitLab or zip with .git folder)
2. **Pull Request** with detailed description
3. **Screenshots** (9 required - see entry README)
4. **Self-Review** (using template)

### How to Submit

Email to: `raplsfsolutions@gmail.com`

**Subject**: `ERPNext Entry Level Assignment - [Your Name]`

**Include**:
- Repository URL or zip file
- PR link
- Screenshots zip
- Self-review document
- Total time spent

**Deadline**: 3 days from receiving assignment

---

##  Getting Help

### Common Issues

Check [SETUP_GUIDE.md](assignments/shared/setup/SETUP_GUIDE.md) "Common Issues" section for:
- Port conflicts
- Permission errors
- Database connection issues
- Node version problems

### Ask Questions

**Email**: [raplsfsolutions@gmail.com]  
**Response Time**: Within 24 hours (business days)

**What to include**:
- Clear description of the issue
- What you've already tried
- Error messages (full text)
- Screenshots if relevant

---

## Resources

### Official Documentation

- [Frappe Framework Docs](https://frappeframework.com/docs)
- [ERPNext Documentation](https://docs.erpnext.com/)
- [DocType Guide](https://frappeframework.com/docs/user/en/basics/doctypes)
- [Field Types Reference](https://frappeframework.com/docs/user/en/basics/doctypes/field-types)

### Video Tutorials

- [Frappe Framework Tutorial](https://www.youtube.com/watch?v=yeFJ8_jQ8_M)
- [ERPNext Development Basics](https://www.youtube.com/c/FrappeFramework)

---

## ✅ Success Criteria

You'll be successful if you:

- ✅ Complete environment setup
- ✅ Create all 3 DocTypes correctly
- ✅ Implement basic validation logic
- ✅ Provide all required screenshots
- ✅ Document your testing
- ✅ Follow Git conventions
- ✅ Submit on time

---

##  Tips for Success

### Do's

- ✅ **Read carefully**: Follow instructions exactly
- ✅ **Test thoroughly**: Verify each DocType works
- ✅ **Take clear screenshots**: Show all required information
- ✅ **Ask questions**: Don't stay stuck
- ✅ **Manage time**: Start early, don't rush

### Don'ts

-  **Skip verification**: Complete the checklist
-  **Ignore details**: Field types and settings matter
-  **Copy blindly**: Understand what you're doing
-  **Submit untested**: Test everything first
-  **Miss deadline**: Plan your time

---

##  What's Next?

After completing this assignment:

1. **Review**: We'll evaluate your submission within 5 business days
2. **Interview**: Successful candidates will be invited for technical interview
3. **Discussion**: Be prepared to explain your implementation choices

---

**Good luck! We're excited to see what you build.** 

---

## Contact

For questions or issues:
- **Technical Support**: [raplsfsolutions@gmail.com]
- **General Inquiries**: [raplsfsolutions@gmail.com]
