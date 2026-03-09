# -*- coding: utf-8 -*-
# Copyright (c) 2024, Your Name and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class LibraryMember(Document):
    def validate(self):
        # Auto-generate full name
        if self.first_name and self.last_name:
            self.full_name = f"{self.first_name} {self.last_name}"