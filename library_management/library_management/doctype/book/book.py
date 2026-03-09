# -*- coding: utf-8 -*-
# Copyright (c) 2024, Your Name and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Book(Document):
    def before_save(self):
        """Set available copies on new book creation"""
        # If this is a new book, set available_copies = total_copies
        if self.is_new():
            self.available_copies = self.total_copies
        
        # Ensure available_copies never exceeds total_copies
        if self.available_copies > self.total_copies:
            self.available_copies = self.total_copies
    
    def validate(self):
        # Additional validation can be added here
        pass