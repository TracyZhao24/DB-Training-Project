from django.db import models

# name, organization, phone numbers, emails, notes

class Source(models.Model):       # extends models.Model
    name = models.TextField()
    organization = models.TextField()
    phoneNumbers = models.TextField()       # each source may have multiple phone numbers and emails
    emails = models.TextField()
    notes = models.TextField()