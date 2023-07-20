from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
class ViewBase(TemplateView):
    template_name="base.html"

class ViewHome(TemplateView):
    template_name="temps/show_api.html"


def BasicApi():
    pass