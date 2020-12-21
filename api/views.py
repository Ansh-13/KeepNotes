from django.shortcuts import render

from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Notes
from .serializers import NoteSerializer

class Note(generics.ListAPIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer


class NotesCreate(APIView):
    serializers_class = NoteSerializer
   
    def post(self, request, format=None):
        serializers = self.serializers_class(data=request.data)
        
        if serializers.is_valid():
            title = serializers.data.get('title')
            description = serializers.data.get('description')
            created_at = serializers.data.get('created_at')

            Notes.save()
            
            return Response(data, status=status.HTTP_201_CREATED)

        return Response({'Bad Resquest': 'Please Try again later'}, status=status.HTTP_400_BAD_REQUEST)

class NotesUpdates(APIView):
    serializer_class = NoteSerializer

    

    def put(self, request, pk, format=None):
        serializer = serializer.request.data(data = request.data)

        if serializer.is_valid():
            id = serializer.data.get('id')
            title = serializers.data.get('title')
            description = serializers.data.get('description')
            created_at = serializers.data.get('created_at')
            
            Notes.update()

            return Response({'MSG': 'Note successfully updated'}, status=status.HTTP_200_OK)

        return Response({'MSG': 'Something Wrong'}, status=status.HTTP_400_BAD_REQUEST)

