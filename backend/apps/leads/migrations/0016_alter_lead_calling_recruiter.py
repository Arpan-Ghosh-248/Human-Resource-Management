# Generated by Django 3.2.4 on 2022-10-17 10:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_employee_id'),
        ('leads', '0015_remove_lead_created_at_remove_lead_updated_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='calling_recruiter',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='users.user'),
            preserve_default=False,
        ),
    ]
