from django.urls import path
from .views import home,contentshow,contact,about
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',home,name='home'),
    path('contentshow/<int:pk>',contentshow,name='contentshow'),
    path('about/',about,name='about'),
    path('contact',contact,name='contact'),
]+static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
