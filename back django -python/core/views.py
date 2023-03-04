from rest_framework import viewsets
from .models import Menber
from .serializers import MenberSerializer



class MenberViewSet(viewsets.ModelViewSet):
  
    queryset = Menber.objects.all()
    serializer_class = MenberSerializer
 