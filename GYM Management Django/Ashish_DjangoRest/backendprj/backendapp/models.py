from django.db import models
from django.contrib.auth.models import User


class PostSignup(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(unique=True)
    mobile = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')])
    dob = models.DateField(default='2000-01-01')  # Set a default date

    def __str__(self):
        return self.user.username
    
class PostLogin(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    success = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.login_time} - {'Success' if self.success else 'Failed'}"
    
class Enquiry(models.Model):
    name = models.CharField(max_length=150, null=True)
    mobile = models.CharField(max_length=15, null=True)
    email = models.CharField(max_length=50, null=True)
    age = models.CharField(max_length=15, null=True)
    gender = models.CharField(max_length=10, null=True)

    def __str__(self):
        return self.name