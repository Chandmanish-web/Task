# ERPNext Entry Level Developer Assignment - Complete Package

## What's Included

This repository contains a complete, production-ready technical assignment for evaluating entry-level ERPNext developers (0-1 years experience).

---

##  Complete File Structure

```
assignments/
├── README.md                                    # Main entry point
│
├── shared/                                      # Shared resources for all levels
│   ├── setup/
│   │   ├── SETUP_GUIDE.md                      # Docker & bare-metal installation
│   │   └── VERIFICATION.md                     # Setup verification checklist
│   ├── guidelines/
│   │   ├── CODE_QUALITY.md                     # Python/JS coding standards
│   │   ├── GIT_WORKFLOW.md                     # Git & PR best practices
│   │   └── TESTING.md                          # Testing expectations
│   └── templates/
│       ├── PR_TEMPLATE.md                      # Pull request template
│       └── SELF_REVIEW.md                      # Self-review template
│
└── entry/                                       # Entry level assignment
    ├── README.md                                # Assignment overview
    ├── tasks/
    │   ├── TASK_1_LIBRARY_MEMBER.md            # Create Library Member DocType
    │   ├── TASK_2_BOOK.md                      # Create Book DocType
    │   ├── TASK_3_TRANSACTION.md               # Create Transaction DocType
    │   └── TASK_4_TESTING.md                   # Testing documentation
    └── resources/
        └── EVALUATION.md                        # Evaluation rubric (100 points)
```

---

##  Assignment Overview

### What Candidates Will Build

A **Library Management System** with:
- **Library Member** management (personal info, membership types)
- **Book** catalog (with inventory tracking)
- **Book Transaction** system (checkout/return with validation)

### Skills Evaluated

-  ERPNext environment setup
-  DocType creation and configuration
-  Basic Python validation logic
-  Field types and relationships
-  Manual testing documentation
-  Git workflow basics

### Time Estimate

**Total**: 8-10 hours
- Environment setup: 2 hours
- Task 1 (Library Member): 2 hours
- Task 2 (Book): 2 hours
- Task 3 (Transaction): 3 hours
- Task 4 (Testing): 1 hour

---

##  Documentation Guide

### For Candidates

**Start Here**: [assignments/README.md](README.md)

**Reading Order**:
1. Main README (overview)
2. Setup Guide (installation)
3. Verification Checklist (confirm setup)
4. Entry Level README (assignment overview)
5. Individual task files (step-by-step)

### For Evaluators

**Start Here**: [assignments/entry/resources/EVALUATION.md](assignments/entry/resources/EVALUATION.md)

**Key Documents**:
- Evaluation rubric (100-point scoring)
- Code quality guidelines (what to look for)
- Testing guidelines (coverage expectations)

---

##  Quick Start (For Candidates)

### Step 1: Read Documentation
```bash
# Navigate to assignment
cd assignments/

# Read main README
cat README.md

# Read setup guide
cat shared/setup/SETUP_GUIDE.md
```

### Step 2: Setup Environment
```bash
# Option A: Docker (recommended)
git clone https://github.com/frappe/frappe_docker.git
cd frappe_docker
docker-compose -f pwd.yml up -d

# Option B: Bare-metal
bench init frappe-bench --frappe-branch version-15
cd frappe-bench
bench new-site library.localhost
```

### Step 3: Create Custom App
```bash
bench new-app library_management
bench --site library.localhost install-app library_management
```

### Step 4: Start Tasks
Follow: [assignments/entry/README.md](assignments/entry/README.md)

---

##  Evaluation Criteria

### Scoring Breakdown (100 points)

| Category | Points | What's Evaluated |
|----------|--------|------------------|
| **Setup & Environment** | 20 | Installation, verification, screenshots |
| **DocType Creation** | 40 | All fields, naming, settings correct |
| **Basic Logic** | 20 | Validation, inventory tracking |
| **Documentation** | 10 | Testing documentation quality |
| **Git & Submission** | 10 | Commit messages, PR quality |

**Passing Score**: 70/100

**Detailed Rubric**: [assignments/entry/resources/EVALUATION.md](assignments/entry/resources/EVALUATION.md)

---

##  Submission Requirements

### What Candidates Submit

1. **Git Repository** (GitHub/GitLab or zip with .git folder)
2. **Pull Request** (using provided template)
3. **Screenshots** (9 required):
   - ERPNext login page
   - Installed apps list
   - Library Member form & list (2)
   - Book form & list (2)
   - Transaction forms (2)
   - Validation error example
4. **TESTING.md** (17 test cases documented)
5. **SELF_REVIEW.md** (using provided template)

### Submission Email

**To**: raplsfsolutions@gmail.com  
**Subject**: `ERPNext Entry Level Assignment - [Candidate Name]`  
**Deadline**: 3 days from assignment receipt

---

##  Key Features

### Modular Structure
-  Separate task files (not monolithic)
-  Clear navigation between documents
-  Progressive difficulty

### Comprehensive Guidance
-  Step-by-step instructions
-  Code examples provided
-  Common issues documented
-  Troubleshooting tips

### Production-Ready
-  Real-world scenarios
-  Best practices enforced
-  Professional standards
-  Industry-standard Git workflow

### Self-Contained
-  No external dependencies
-  All templates included
-  Complete evaluation rubric
-  Can be handed directly to candidates

##  Success Metrics

### For Candidates

**Excellent** (85-100):
- All tasks completed correctly
- Clean code, good documentation
- Thorough testing
- Professional Git workflow

**Good** (70-84):
- All tasks completed
- Minor issues in code quality
- Basic testing done
- Acceptable Git practices

**Needs Improvement** (<70):
- Incomplete tasks
- Significant code issues
- Poor or missing documentation

---

##  Tips for Evaluators

### What to Look For

**Green Flags** :
- Follows instructions exactly
- Clean, readable code
- Comprehensive testing
- Professional communication
- Good time management

**Red Flags** :
- Skipped verification steps
- Copy-pasted code without understanding
- No testing documentation
- Poor commit messages
- Missed deadline without communication

### Interview Follow-Up Questions

1. "Walk me through your DocType design choices"
2. "How did you handle the validation logic?"
3. "What challenges did you face during setup?"
4. "How would you extend this to handle fines?"
5. "What would you do differently with more time?"

---

##  Support

### For Candidates
- Technical questions: [raplsfsolutions@gmail.com]
- Response time: Within 24 hours (business days)

### For Evaluators
- Rubric questions: See EVALUATION.md
- Scoring guidance: Use provided point breakdown

---

##  License

This assignment template is provided as-is for evaluation purposes. Customize as needed for your organization.

---

##  Acknowledgments

Built for evaluating ERPNext developers at all levels. Focuses on practical, production-oriented skills.

---

**Ready to use! Hand this to your candidates and start evaluating.** 
