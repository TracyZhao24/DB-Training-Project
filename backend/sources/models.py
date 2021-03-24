from django.db import models

# name, organization, phone numbers, emails, notes
# each source must have a name and organization, but contact info and notes are are optional

class Source(models.Model):       # extends models.Model
    name = models.TextField()
    organization = models.TextField()
    phoneNumbers = models.TextField(blank=True)       # each source may have multiple phone numbers and emails, or none at all
    emails = models.TextField(blank=True)            
    notes = models.TextField(blank=True)