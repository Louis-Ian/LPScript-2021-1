from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('collatz/<int:num>/', views.collatz, name='collatz'),
]