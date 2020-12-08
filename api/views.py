from django.shortcuts import render
from rest_framework.views import APIView

from .models import Notes
from .serializers import NoteSerializer

class Note(APIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
