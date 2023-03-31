from rest_framework import serializers
from .models import Menber

class MenberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menber
        fields = ['id','name', 'surname','phone' ,'photo']

class MenberSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menber
        fields = ['id','name','phone','photo']
        
