# Candidate Tracking & Evaluation Template

## 📊 How to Track Candidates

### Step 1: Create Spreadsheet

Create a Google Sheet or Excel file with the following columns:

```
A: Candidate Name
B: Email
C: Phone
D: Submission Date
E: Repository URL
F: PR Link
G: Initial Review Status (Missing Items / Accepted)
H: Setup & Env Score (out of 20)
I: DocType Creation Score (out of 40)
J: Basic Logic Score (out of 20)
K: Documentation Score (out of 10)
L: Git & Submission Score (out of 10)
M: TOTAL SCORE (out of 100)
N: Pass/Fail (≥70 = Pass)
O: Interview Date
P: Interview Notes
O: Evaluator
R: Final Decision (Offer / Reject / Pending)
S: Notes
```

### Step 2: Submission Checklist

When candidate submits, verify:

- [ ] Public GitHub/GitLab repository
- [ ] PR created with description
- [ ] All 9 screenshots provided
- [ ] TESTING.md with test cases
- [ ] SELF_REVIEW.md completed
- [ ] Git history is clean
- [ ] No sensitive data in repo

**Status**: ✅ Accepted / ❌ Rejected (Missing X)

### Step 3: Quick Scoring

Use this checklist for each candidate:

```markdown
## [Candidate Name] - Evaluation

**Submission Date**: [Date]
**Repository**: [URL]

### Deliverables Check
- [ ] Repository public
- [ ] PR with description
- [ ] 9 screenshots (3+3+3)
- [ ] TESTING.md (17+ test cases)
- [ ] SELF_REVIEW.md
- [ ] Git history clean

### Setup & Environment (20 points)
- [ ] (10 pts) Environment setup working
  - Docker/Bare-metal installed ✓
  - Verification checklist completed ✓
- [ ] (10 pts) Screenshots clear & complete
  - All 9 provided ✓
  - Properly named ✓

**Score**: _____ / 20

### DocType Creation (40 points)
- [ ] (15 pts) Library Member DocType
  - All 7 fields present ✓
  - Naming series working ✓
  - Validation in place ✓
- [ ] (15 pts) Book DocType
  - All 7 fields present ✓
  - Inventory logic working ✓
  - negative copies validation ✓
- [ ] (10 pts) Book Transaction DocType
  - All 6 fields present ✓
  - Link fields working ✓
  - Date validation implemented ✓

**Score**: _____ / 40

### Basic Logic (20 points)
- [ ] (10 pts) Validation working
  - Due date required for Issue ✓
  - Return date required for Return ✓
  - Date comparison working ✓
- [ ] (10 pts) Sample data & testing
  - 2-5 records per DocType ✓
  - Link relationships working ✓

**Score**: _____ / 20

### Documentation (10 points)
- [ ] TESTING.md format followed ✓
- [ ] 17+ test cases documented ✓
- [ ] Test cases cover happy path & errors ✓
- [ ] Clear expected results ✓

**Score**: _____ / 10

### Git & Submission (10 points)
- [ ] (5 pts) Commit messages
  - Conventional commits ✓
  - Clear descriptions ✓
  - Logical grouping ✓
- [ ] (5 pts) PR quality
  - Detailed description ✓
  - Screenshots in PR ✓
  - Clear testing steps ✓

**Score**: _____ / 10

### TOTAL: _____ / 100

### Decision
- [ ] **Pass** (70-100) - Proceed to interview
- [ ] **Conditional** (60-69) - Needs minor improvements
- [ ] **Fail** (<60) - Does not meet requirements

### Evaluator Notes


### Interview Schedule
- Date: ___________
- Time: ___________
- Interviewer: ___________
```

### Step 4: Interview Preparation

Before calling candidate:

```markdown
## Interview Prep - [Candidate Name]

### Key Scores to Discuss
- Highest score: _____ (DocType: ___________)
- Lowest score: _____ (DocType: ___________)
- Notable issues: 

### Questions to Ask
1. "Walk me through your DocType design choices"
   - Follow-up: Why that field type?
   
2. "Explain your date validation approach"
   - Follow-up: How did you debug it?
   
3. "What was the biggest challenge?"
   - Follow-up: How did you solve it?
   
4. "How would you scale this to handle fines?"
   - Looking for: System design thinking
   
5. "Talk through your testing approach"
   - Looking for: Edge case thinking

### Technical Deep Dive
- Ask them to share screen and show code
- Request code walkthrough (10 min)
- Ask about trade-offs they made
- Discuss error handling approach
```

---

## 📈 Evaluation Dashboard Template

### Weekly Summary

```
Week of March 10-16, 2024

Submissions Received: 5
Passing: 3 (60%)
Failing: 2 (40%)

Average Score: 74.2
Highest: 92 (John Doe)
Lowest: 58 (Jane Smith)

Interviews Scheduled: 2
Interviews Completed: 1
Offers Extended: 0

Common Issues Found:
- 40% missed validation edge cases
- 20% date format confusion
- 20% git commit message format
```

### Monthly Report

```
Month: March 2024

Total Candidates: 12
Submitted on Time: 11 (92%)
Passing Score: 9 (75%)

Top Performers (85+):
1. John Doe - 92 pts
2. Sarah Johnson - 90 pts
3. Mike Chen - 87 pts

Needs Improvement (<70):
1. Jane Smith - 58 pts
2. Tom Wilson - 65 pts

Average Time to Complete: 9.2 hours
Interview-to-Offer Rate: 60%

Most Common Issues:
1. Date validation (30% of candidates)
2. Commit messages (25% of candidates)
3. Testing documentation (15% of candidates)

Recommendations:
- Add date handling example to SETUP_GUIDE
- Clarify conventional commits format
- Improve documentation clarity
```

---

## 🤝 Candidate Communication Templates

### Submission Received

```
Subject: ERPNext Entry Level Assignment - Submission Received

Hi [Name],

Thank you for submitting your assignment! We've received your submission
on [date] and will begin evaluation.

Submission Details:
- Repository: [URL]
- PR: [URL]
- Screenshots: [Count] provided

We'll review your work and get back to you within 5 business days with results.

If you have any questions while we're evaluating, feel free to reach out.

Best regards,
[Company] Hiring Team
```

### Passing Score

```
Subject: ERPNext Entry Level Assignment - CONGRATULATIONS! ✅

Hi [Name],

Congratulations! You've successfully completed the ERPNext developer assignment.

Your Score: [Score]/100
Status: ✅ PASS

Breakdown:
- Setup & Environment: [X]/20
- DocType Creation: [X]/40
- Basic Logic: [X]/20
- Documentation: [X]/10
- Git & Submission: [X]/10

Feedback:
[Your specific feedback on strengths and areas to work on]

Next Step: Technical Interview
We'd like to move forward with a technical interview. 

Available times:
- [Date/Time Option 1]
- [Date/Time Option 2]
- [Date/Time Option 3]

Please reply with your availability. The interview will take 30-45 minutes
and focused on discussing your implementation choices.

Congratulations again, and we look forward to speaking with you!

Best regards,
[Your Name]
[Email]
```

### Failing Score

```
Subject: ERPNext Entry Level Assignment - Feedback

Hi [Name],

Thank you for your submission! We've completed our evaluation of your assignment.

Your Score: [Score]/100
Status: ❌ Did Not Pass (Passing score: 70)

Breakdown:
- Setup & Environment: [X]/20
- DocType Creation: [X]/40
- Basic Logic: [X]/20
- Documentation: [X]/10
- Git & Submission: [X]/10

Areas of Strength:
[2-3 specific things candidate did well]

Areas for Improvement:
[2-3 specific areas to work on with examples]

Feedback:
[Constructive and specific recommendations]

Next Steps:
While we won't be moving forward at this time, we encourage you to:
1. Review the feedback above
2. Practice ERPNext development
3. Apply again in [3-6 months] after gaining more experience

Resources for Learning:
- [Frappe Documentation](https://frappeframework.com/docs)
- [ERPNext Documentation](https://docs.erpnext.com/)
- [Python Best Practices](https://pep8.org/)

We appreciate your effort and hope to see you reapply in the future!

Best regards,
[Your Name]
[Email]
```

### Pre-Interview Confirmation

```
Subject: ERPNext Technical Interview - Confirmation

Hi [Name],

Thanks for confirming your availability! Here are the details of your
technical interview:

📅 Date: [Date]
⏰ Time: [Time] ([Timezone])
⏱️ Duration: 30-45 minutes
👤 Interviewer: [Name]

How to Prepare:
1. Review your code and be ready to explain your design choices
2. Have your repository open and ready to share screen
3. Test your microphone and camera beforehand
4. Be ready to discuss:
   - Your DocType design approach
   - How you handled date validation
   - Challenges you faced and how you solved them
   - How you would extend the system

Interview Link: [Zoom/Teams/etc link]

If you need to reschedule, please let us know ASAP.

Looking forward to speaking with you!

Best regards,
[Your Name]
[Email]
```

---

## 📊 Scoring Distribution Template

Track how candidates score across each category:

```markdown
### Score Distribution Analysis

| Score Range | Count | Percentage | Category |
|---|---|---|---|
| 85-100 | 2 | 17% | Excellent |
| 70-84 | 7 | 58% | Good |
| 60-69 | 2 | 17% | Needs Work |
| <60 | 1 | 8% | Below Passing |

### By Category Analysis

**Setup & Environment (20 points)**
- Average: 16.2/20 (81%)
- Most miss: Screenshot quality (5 candidates)

**DocType Creation (40 points)**
- Average: 32.1/40 (80%)
- Most miss: Naming series validation (3 candidates)

**Basic Logic (20 points)**
- Average: 14.8/20 (74%)
- Most miss: Date comparison logic (4 candidates)

**Documentation (10 points)**
- Average: 8.2/10 (82%)
- Most miss: Edge case test coverage (2 candidates)

**Git & Submission (10 points)**
- Average: 7.9/10 (79%)
- Most miss: Conventional commit format (3 candidates)
```

---

**For Excel/Google Sheets Setup**: 
Make columns sortable, add conditional formatting for Pass/Fail, and use charts to visualize score distribution.

