from . import views     # what does this even do
from django.urls import path, include
# localhost:5000/test

# maps urls to views

# TODO: change all these to sources
urlpatterns = [
    #path('notes/create', views.create_note_drf),       # create new sources
    #path('drf/note/<int:id>', views.get_note_drf),     # list all sources
    #path('notes/update/<int:id>', views.update_note)   # ie sources/10, modify existing sources
]