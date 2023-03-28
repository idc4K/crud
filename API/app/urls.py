from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [

    path('viewAllMovies/', views.ViewallMovie,name="view-movie"),
    path('viewAllGenres/', views.ViewallGenre, name="view-genre"),

    path('createMovies/', views.CreateMovie.as_view(),name="create-movie"),
    path('createGenres/', views.CreateGenre.as_view(),name='create-movie'),

    path('updateMovies/<str:pk>/', views.updateMovie, name="update-movie"),
    path('deleteMovies/<str:pk>/', views.deleteMovie, name="delete-movie"),

    path('getbyId/<str:pk>/', views.GetMovieById, name="get-movie"),
    path('getgenrebyId/<str:pk>/', views.GetGenreById, name="get-genre"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)