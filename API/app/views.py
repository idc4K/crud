from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics,status,views,permissions,viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView,UpdateAPIView
from django.utils import timezone


class CreateMovie(CreateAPIView):
    serializer_class = CrudMovie
    queryset = movie.objects.all()

    # permission_classes = (permissions.IsAuthenticated,autorisation)

    def perform_create(self, serializer):
        return serializer.save()

    def get_queryset(self):
        return self.queryset.filter()

    def get_queryset(self):
        return self.queryset.filter()

class CreateGenre(CreateAPIView):
    serializer_class = Genres
    queryset = Genre.objects.all()
    # permission_classes = (permissions.IsAuthenticated,autorisation)

    def perform_create(self, serializer):
        return serializer.save()

    def get_queryset(self):
        return self.queryset.filter()

    def get_queryset(self):
        return self.queryset.filter()

@api_view(['GET'])
@csrf_exempt
def ViewallMovie(request):
    serializer_class = movieView
    donnee = movie.objects.all()

    serializer = serializer_class(donnee,many=True)
    return Response(serializer.data, status=200)

@api_view(['GET']) 
@csrf_exempt
def ViewallGenre(request):
    serializer_class = Genres
    donnee = Genre.objects.all()
   
    serializer = serializer_class(donnee,many=True)
    return Response(serializer.data, status=200)

@api_view(['PUT'])
@csrf_exempt
def updateMovie(request,pk):
    serializer_class = CrudMovie
    donnee = movie.objects.get(id=pk)
    donnee.updated_at = timezone.now()

    serializer = serializer_class(doneee, datat=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@csrf_exempt
def deleteMovie(request,pk):
    serializer_class = CrudMovie
    donnee = movie.objects.get(id=pk)
    donnee.deleted_at = timezone.now()

    donnee.delete()
    return Response('Data deleted')
@api_view(['GET'])
@csrf_exempt
def GetMovieById(request,pk):
    serializer_class = movieUpdate
    donnee = movie.objects.get(id=pk)

    serializer = serializer_class(donnee)
    return Response(serializer.data, status=200)

@api_view(['GET'])
@csrf_exempt
def GetGenreById(request,pk):
    serializer_class = Genres
    donnee = Genre.objects.get(id=pk)

    serializer = serializer_class(donnee)
    return Response(serializer.data, status=200)


# Create your views here.
