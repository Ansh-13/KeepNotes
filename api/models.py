from django.db import models

class Notes(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
