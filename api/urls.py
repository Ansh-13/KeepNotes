from django.urls import path
from .views import Note, NotesCreate, NotesUpdates

urlpatterns = [
    path('notes', Note.as_view()),
    path('notes/create', NotesCreate.as_view()),
    path('notes/update/<int:pk>', Note.as_view()),
    # path('notes/update/<int:pk>', Note.as_view()),
]