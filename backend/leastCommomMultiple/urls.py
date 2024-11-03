from django.urls import path
from . import views

urlpatterns = [
    path('lcm/', views.calculate_lcm_view, name='calculate_lcm_view'),
]
