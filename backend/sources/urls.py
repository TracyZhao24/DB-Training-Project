from . import views     
from django.urls import path, include
# localhost:5000/test

# maps urls to views

urlpatterns = [
    path('create', views.create),           # create new sources
    path('read/<int:id>', views.read),      # read a sources, TODO: do i need this?
    path('list', views.list),               # list all sources
    path('update/<int:id>', views.update),  # modify an existing source, ie sources/10
    path('delete/<int:id>', views.delete)   # delete an existing source, ie sources/10
]