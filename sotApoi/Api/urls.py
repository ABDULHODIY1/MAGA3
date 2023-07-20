from django.urls import *
from .views import*

urlpatterns=[
    path("",ViewHome.as_view(),name="home")
]