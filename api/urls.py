from django.urls import path
from .views import Note

urlpatterns = [
    path('notes', Note.as_view())
]