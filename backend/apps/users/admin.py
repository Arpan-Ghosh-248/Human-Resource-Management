from django.contrib import admin
from .models import User


@admin.register(User)
class UserModel(admin.ModelAdmin):
    fields = ['status', 'user_name', 'email', 'token',
              'token_expires_at', 'role', 'password','employee_id']
    list_filter = ['status', 'user_name', 'email', 'role','employee_id']
    list_display = fields
    search_fields = ['status', 'user_name', 'email', 'role','employee_id']
