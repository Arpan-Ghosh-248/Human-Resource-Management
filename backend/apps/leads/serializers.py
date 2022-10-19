
from .models import Lead
from rest_framework import serializers
from django.utils import timezone


class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = '__all__'

class LeadListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
        depth = 1

class LeadOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ['id','user_name']

class LeadUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

    




       
