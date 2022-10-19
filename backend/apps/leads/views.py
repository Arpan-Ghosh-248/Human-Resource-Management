from rest_framework import generics
from rest_framework import filters as search
from django_filters import rest_framework as filters
from rest_framework.response import Response
from .models import Lead
from .serializers import LeadSerializer, LeadListSerializer, LeadUpdateSerializer
from apps.users.mixins import CustomLoginRequiredMixin
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class LeadFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="icontains")
    email = filters.CharFilter(lookup_expr="icontains")
    phone = filters.CharFilter(lookup_expr="icontains")
    degree = filters.CharFilter(lookup_expr="icontains")
    branch = filters.CharFilter(lookup_expr="icontains")
    year_of_graduation = filters.CharFilter(lookup_expr="icontains")

    class Meta:
        model = Lead
        fields = [
            "current_state",
            "native_state",
            "status"
        ]

    def multi_string_filter(self, queryset, name, value):
        lookup = "{name}__in".format(name=name)
        return queryset.filter(**{lookup: value.split(',')})

class LeadList( generics.ListAPIView):
   
    queryset = Lead.objects.all()
    serializer_class = LeadListSerializer
    filter_backends = [DjangoFilterBackend, search.SearchFilter]
    filterset_class = LeadFilter
    search_fields = ['name']


class LeadFind( generics.RetrieveAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadListSerializer


class LeadAdd( generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class LeadUpdate( generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadUpdateSerializer
    