from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect, render , get_object_or_404
from .models import Post,Contact
from django.contrib import messages

# Create your views here.

def home(request):
    obj=Post.objects.all()
    return render(request,'home.html',{'obj':obj})

def contentshow(request,pk):
    obj =get_object_or_404(Post,pk = pk)
    return render(request, 'contentshow.html', {'i': obj})

def about(request):
    return render(request,'about.html')

def contact(request):
    if request.method=='POST':
        obj=Contact()
        obj.firstname= request.POST['firstname']
        obj.lastname= request.POST['lastname']
        obj.email= request.POST['email']
        obj.message= request.POST['message'] 
        obj.save()                               
    return render(request,'contact.html')
