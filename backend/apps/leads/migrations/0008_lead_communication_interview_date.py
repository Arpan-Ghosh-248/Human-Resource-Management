# Generated by Django 4.0.3 on 2022-10-15 04:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0007_lead_communication_grade_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='communication_interview_date',
            field=models.DateTimeField(null=True, verbose_name='Communication Date'),
        ),
    ]
