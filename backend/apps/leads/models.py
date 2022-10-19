from email.policy import default
from random import choices
from tkinter import CASCADE
from django.db.models.deletion import CASCADE
from django.db import models
from apps.users.models import User

from config.constants import  INTERVIEW_STATUS,  VOCABULARY_RESULT, YES_NO, COMMUNICATION_GRADE, HR_INTERVIEW_STATUS, OFFERED_STATUS, JOINED_STATUS

from config.constants import LEAD_STATUS, STATES

# Create your models here.
class Lead(models.Model):
    class Meta:
        db_table = "lead"

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50,  db_index=True
    )
    email = models.EmailField(
        'Email', blank=False, null=False, unique=True, db_index=True
    )
    date_of_birth = models.DateTimeField(
        'Date of Birth', blank=False, null=False
    )
    phone = models.IntegerField(
        'Phone Number', blank=False, null=False,  db_index=True,unique=True,
    )
    current_state = models.CharField(
        'Current State', blank=True, null=True, max_length=50, choices=STATES, db_index=True
    )
    current_city = models.CharField(
        'Current City', blank=False, null=False, max_length=50
    )
    native_state = models.CharField(
        'Native State', blank=True, null=True, max_length=50, choices=STATES, db_index=True
    )
    native_city = models.CharField(
        'Native Place', blank=True, null=True, max_length=50
    )
    college = models.CharField(
        'College', blank=False, null=False, max_length=50
    )
    degree = models.CharField(
        'Degree', blank=False, null=False, max_length=50
    )
    branch = models.CharField(
        'Branch', blank=False, null=False, max_length=50
    )
    year_of_graduation = models.IntegerField(
        'Year of Graduation', blank=False, null=False
    )
    sources = models.CharField(
        'Sources', blank=False, null=False, max_length=50
    )
    status = models.CharField(
        'Status', blank=False, null=False, max_length=50, choices=LEAD_STATUS, 
    )
    
    calling_recruiter = models.ForeignKey(
        User, related_name='calling_recruiter',on_delete=CASCADE,blank=True, null=True, db_index=True,
    )
    date_of_calling = models.DateTimeField(
        'Date of Calling', blank=False, null=True
    )
    years_agreement = models.CharField(
        '2 Years Agreement', blank=False, null=True, max_length=50, choices=YES_NO, 
    )
    night_shift = models.CharField(
        'Night Shift', blank=False, null=True, max_length=50, choices=YES_NO, 
    )
    liquidated_damage = models.CharField(
        'Liquidated Damage', blank=False, null=True, max_length=50, choices=YES_NO, 
    )
    wfo = models.CharField(
        'WFO', blank=False, null=True, max_length=50, choices=YES_NO, 
    )
    tutoring = models.CharField(
        'Tutoring', blank=False, null=True, max_length=50, choices=YES_NO, 
    )
    relocate = models.CharField(
        'Relocate', blank=False, null=True, max_length=50, choices=YES_NO, 
    )
    vocab_interview_status = models.CharField(
        'Vocab Interview Status', blank=False, null=True, max_length=50, choices=INTERVIEW_STATUS, 
    )
    vocab_interview_date = models.DateTimeField(
        'Interview Date', blank=False, null=True
    )
    
    vocab_score = models.CharField(
        'Vocab Score', blank=False, null=True, max_length=50
    )
    vocab_interview_result = models.CharField(
        'Vocab Interview Result', blank=False, null=True, max_length=50, choices=VOCABULARY_RESULT, 
    )
    vocab_review = models.CharField(
        'Review', blank=True, null=True, max_length=250,db_index=True
    )
    communication_calling_recruiter = models.ForeignKey(
        User, related_name='communication_calling_recruiter',on_delete=CASCADE,blank=True, null=True, db_index=True,
    )
    communication_date_of_calling = models.DateTimeField(
        'Date of Calling', blank=False, null=True
    )
    communication_interview_status = models.CharField(
        'Communication Interview Status', blank=False, null=True, max_length=50, choices=INTERVIEW_STATUS, 
    )
    communication_interview_date = models.DateTimeField(
        'Communication Date', blank=False, null=True
    )
    communication_grade = models.CharField(
        'Communication Grade', blank=False, null=True, max_length=50, choices=COMMUNICATION_GRADE, 
    )
    communication_result = models.CharField(
        'Communication Result', blank=False, null=True, max_length=50, choices=VOCABULARY_RESULT,
    )
    communication_review = models.CharField(
        'Review', blank=True, null=True, max_length=250,db_index=True
    )
    hr_calling_recruiter = models.ForeignKey(
        User, related_name='hr_calling_recruiter',on_delete=CASCADE,blank=True, null=True, db_index=True,
    )
    hr_date_of_calling = models.DateTimeField(
        'Date of Calling', blank=False, null=True
    )
    hr_interview_status = models.CharField(
        'HR Interview Status', blank=False, null=True, max_length=50, choices=INTERVIEW_STATUS, 
    )
    hr_interview_date = models.DateTimeField(
        'HR Interview Date', blank=False, null=True
    )
   
    hr_result = models.CharField(
        'HR Result', blank=False, null=True, max_length=50, choices=HR_INTERVIEW_STATUS, 
    )
    hr_review = models.CharField(
        'Review', blank=True, null=True, max_length=250,db_index=True
    )
    offered_status = models.CharField(
        'Offered Status', blank=False, null=True, max_length=50, choices=OFFERED_STATUS, 
    )
    follow_by = models.ForeignKey(
        User, related_name='follow_by',on_delete=CASCADE,blank=True, null=True, db_index=True,
    )
    offered_date_of_joining = models.DateTimeField(
        'Date of Joining', blank=False, null=True
    )
    revised_date_of_joining = models.DateTimeField(
        'Revised Date of Joining', blank=False, null=True
    )
    joined_status = models.CharField(
        'Joined Status', blank=False, null=True, max_length=50, choices=JOINED_STATUS, 
    )
    offered_review = models.CharField(
        'Review', blank=True, null=True, max_length=250,db_index=True
    )
    def __str__(self):
        return self.name