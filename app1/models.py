from django.db import models

# Create your models here.

class Post(models.Model):
     images = models.ImageField(upload_to="pro/",default='')
     content= models.CharField(max_length=10000000000000000,default='')     


class Contact(models.Model):
     firstname= models.CharField(max_length=200,blank = False,null = False)
     lastname= models.CharField(max_length=200,blank = False,null = False)
     email=models.EmailField(blank = False,null = False)
     message=models.CharField(max_length=50000,blank = False,null = False)

     def __str__(self):
          return self.email

