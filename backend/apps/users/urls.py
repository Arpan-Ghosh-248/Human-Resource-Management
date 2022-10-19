from django.urls import path
from . import views

urlpatterns = [
    path('', views.UserList.as_view(), name='user_list'),
    path('<int:pk>/', views.UserGet.as_view(), name='user_get'),
    path('update/<int:id>/', views.UserUpdate.as_view(), name='user_update'),
    path('signin/', views.UserSignIn.as_view(), name='user_sign_in'),
    path('add/', views.AddUser.as_view(), name='add_user'),
    path('check-login/', views.UserCheckLogin.as_view(), name='user_check_login'),
]
