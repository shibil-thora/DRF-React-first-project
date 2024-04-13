from django.urls import path, include
from . import views
from rest_framework import routers
from .views import PatientViewSet

router = routers.DefaultRouter()
router.register(r'patient', PatientViewSet)

urlpatterns = [
    path('', include(router.urls)), 
]
