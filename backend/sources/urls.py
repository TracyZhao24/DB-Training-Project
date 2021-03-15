from . import views     
from django.urls import path, include
# localhost:5000/sources

# maps urls to views

urlpatterns = [
    path('create', views.create),           # create new sources
    path('read/<int:id>', views.read),      # read a source
    path('read/all', views.readAll),        # list all sources #TODO: this isn't working
    path('update/<int:id>', views.update),  # modify an existing source, ie sources/5
    path('delete/<int:id>', views.delete)   # delete an existing source, ie sources/5
]