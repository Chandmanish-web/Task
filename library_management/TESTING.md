# Testing Documentation for Library Management App

This document contains comprehensive manual test cases for the Library Management application.

## Section 1: Library Member Tests

### Test Case: Create New Library Member

**Objective**: Verify that a new library member can be created successfully with all required fields

**Prerequisites**:
- ERPNext is running
- Library Management app is installed
- User has permission to create Library Members

**Steps**:
1. Navigate to Library Management → Library Member
2. Click "New" button
3. Fill in the following fields:
   - First Name: "John"
   - Last Name: "Doe"
   - Email: "john.doe@example.com"
   - Phone: "+1234567890"
   - Membership Type: "Standard"
   - Membership Start Date: "2024-02-01"
   - Status: "Active"
4. Click "Save"

**Expected Result**:
- Member saves successfully
- member_id is auto-generated (e.g., LIB-MEM-00001)
- full_name is auto-populated as "John Doe"
- Member appears in Library Member list view
- Success message displayed

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Edit Member Details

**Objective**: Verify that member details can be edited and changes persist

**Prerequisites**:
- At least one library member exists

**Steps**:
1. Open an existing library member
2. Change membership_type to "Premium"
3. Click "Save"

**Expected Result**:
- Changes save successfully
- membership_type shows "Premium"

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Email Uniqueness

**Objective**: Verify that email addresses must be unique across members

**Prerequisites**:
- At least one library member exists with email "test@example.com"

**Steps**:
1. Create a new library member
2. Set email to "test@example.com" (same as existing member)
3. Fill other required fields
4. Click "Save"

**Expected Result**:
- Error message appears: "Email must be unique"
- Member is not created

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Member Status Change

**Objective**: Verify that member status can be changed

**Prerequisites**:
- At least one active library member exists

**Steps**:
1. Open an existing active member
2. Change status to "Inactive"
3. Click "Save"

**Expected Result**:
- Status changes to "Inactive"
- Changes save successfully

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Delete Member

**Objective**: Verify that members can be deleted

**Prerequisites**:
- At least one test library member exists

**Steps**:
1. Open a test library member
2. Click "Delete" button
3. Confirm deletion

**Expected Result**:
- Member is removed from the system
- Member no longer appears in list view

**Actual Result**:

**Status**:

**Screenshot**:

## Section 2: Book Tests

### Test Case: Create New Book

**Objective**: Verify that a new book can be created with all fields

**Prerequisites**:
- ERPNext is running
- Library Management app is installed

**Steps**:
1. Navigate to Library Management → Book
2. Click "New" button
3. Fill in the following fields:
   - Title: "Sample Book"
   - Author: "Sample Author"
   - ISBN: "1234567890"
   - Publisher: "Sample Publisher"
   - Publication Year: 2024
   - Category: "Fiction"
   - Total Copies: 5
   - Status: "Available"
4. Click "Save"

**Expected Result**:
- Book saves successfully
- book_id is auto-generated (e.g., BOOK-00001)
- available_copies is set to 5
- Book appears in Book list view

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Available Copies Auto-Set

**Objective**: Verify that available_copies is automatically set to total_copies for new books

**Prerequisites**:
- None

**Steps**:
1. Create a new book with total_copies = 3
2. Save the book

**Expected Result**:
- available_copies is automatically set to 3

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Edit Total Copies

**Objective**: Verify that available_copies updates when total_copies changes

**Prerequisites**:
- A book exists with total_copies = 5, available_copies = 5

**Steps**:
1. Open the book
2. Change total_copies to 3
3. Save

**Expected Result**:
- available_copies is updated to 3 (or less if it was lower)

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Negative Copies Validation

**Objective**: Verify that negative values are not allowed for total_copies

**Prerequisites**:
- None

**Steps**:
1. Create a new book
2. Set total_copies to -1
3. Try to save

**Expected Result**:
- Validation error appears
- Book is not saved

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: ISBN Uniqueness

**Objective**: Verify that ISBN must be unique across books

**Prerequisites**:
- A book exists with ISBN "1111111111"

**Steps**:
1. Create a new book
2. Set ISBN to "1111111111"
3. Fill other required fields
4. Try to save

**Expected Result**:
- Error message appears
- Book is not created

**Actual Result**:

**Status**:

**Screenshot**:

## Section 3: Book Transaction Tests

### Test Case: Create Issue Transaction

**Objective**: Verify that issue transactions can be created

**Prerequisites**:
- At least one member and one book exist

**Steps**:
1. Navigate to Library Management → Book Transaction
2. Click "New"
3. Fill fields:
   - Member: Select a member
   - Book: Select a book
   - Transaction Type: "Issue"
   - Transaction Date: Today
   - Due Date: 14 days from today
4. Click "Save"

**Expected Result**:
- Transaction saves successfully
- transaction_id is auto-generated

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Issue Without Due Date

**Objective**: Verify that due_date is required for issue transactions

**Prerequisites**:
- At least one member and one book exist

**Steps**:
1. Create a new transaction
2. Set Transaction Type to "Issue"
3. Leave Due Date empty
4. Fill other required fields
5. Try to save

**Expected Result**:
- Error: "Due Date is mandatory for Issue transactions"

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Create Return Transaction

**Objective**: Verify that return transactions can be created

**Prerequisites**:
- At least one member and one book exist

**Steps**:
1. Create a new transaction
2. Set Transaction Type to "Return"
3. Set Return Date to today
4. Fill other required fields
5. Click "Save"

**Expected Result**:
- Transaction saves successfully

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Return Without Return Date

**Objective**: Verify that return_date is required for return transactions

**Prerequisites**:
- At least one member and one book exist

**Steps**:
1. Create a new transaction
2. Set Transaction Type to "Return"
3. Leave Return Date empty
4. Fill other required fields
5. Try to save

**Expected Result**:
- Error: "Return Date is mandatory for Return transactions"

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Invalid Return Date

**Objective**: Verify that return_date cannot be before transaction_date

**Prerequisites**:
- At least one member and one book exist

**Steps**:
1. Create a new return transaction
2. Set Transaction Date to today
3. Set Return Date to yesterday
4. Fill other fields
5. Try to save

**Expected Result**:
- Error: "Return Date cannot be before Transaction Date"

**Actual Result**:

**Status**:

**Screenshot**:

## Section 4: Integration Tests

### Test Case: Complete Checkout Flow

**Objective**: Verify the complete book checkout process

**Prerequisites**:
- None

**Steps**:
1. Create a new library member
2. Create a new book
3. Create an issue transaction linking the member and book
4. Verify all data is correct

**Expected Result**:
- All records save successfully
- Links work correctly

**Actual Result**:

**Status**:

**Screenshot**:

### Test Case: Link Field Functionality

**Objective**: Verify that link fields work correctly

**Prerequisites**:
- At least 2 members and 2 books exist

**Steps**:
1. Create a new transaction
2. Click on Member field
3. Verify member list appears
4. Select a member
5. Click on Book field
6. Verify book list appears
7. Select a book

**Expected Result**:
- Link fields show correct lists
- Selection populates the fields

**Actual Result**:

**Status**:

**Screenshot**: