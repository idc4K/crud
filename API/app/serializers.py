from rest_framework import serializers
from .models import *

class GenreDatas(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ['id','name_genre']

class CrudMovie(serializers.ModelSerializer):

    class Meta:
        model = movie
        fields = ['id','name','desc','image','genre_movie']

class movieView(serializers.ModelSerializer):
    genre_movie = GenreDatas(read_only=True)
    class Meta:
        model = movie
        fields = ['id','name','desc','image','genre_movie']

class movieUpdate(serializers.ModelSerializer):
    genre_movie = GenreDatas(read_only=False)
    class Meta:
        model = movie
        fields = ['id','name','desc','image','genre_movie']

class Genres(serializers.ModelSerializer):
    
    class Meta:
        model = Genre
        fields = ['id','name_genre']