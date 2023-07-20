from django.db import models

# Create your models here.
class ModernApi(models.Model):
    name=models.CharField(max_length=200)
    about=models.TextField()
    json_file = models.JSONField()