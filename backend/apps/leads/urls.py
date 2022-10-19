from django.urls import path
from . import views

urlpatterns = [
    path("", views.LeadList.as_view(), name="lead_list"),
    path("<int:pk>/", views.LeadFind.as_view(), name="lead_Find"),
    path("add/", views.LeadAdd.as_view(), name="lead_add"),
    path("update/<int:pk>/", views.LeadUpdate.as_view(), name="lead_update"),
]
