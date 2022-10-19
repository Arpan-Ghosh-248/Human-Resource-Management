
DATE_FORMAT = '%y-%m-%d'
DATE_TIME_FORMAT = '%y-%m-%d %H:%M:%S'

USER_STATUS = (
    ('active', 'Active'),
    ('deleted', 'Deleted')
)

USER_ROLE = (
    ('director', 'Director'),
    ('hr_level_1', 'HR Level 1'),
    ('hr_level_2', 'HR Level 2'),
)

STATES = [
    ( 'andhra_pradesh','Andhra Pradesh' ),
    (  'arunachal_pradesh','Arunachal Pradesh' ),
    (  'assam','Assam' ),
    (  'bihar','Bihar' ),
    (  'chhattisgarh','Chhattisgarh' ),
    (  'goa','Goa' ),
    (  'gujarat','Gujarat' ),
    (  'haryana','Haryana' ),
    (  'himachal_pradesh','Himachal Pradesh' ),
    (  'jharkhand','Jharkhand' ),
    (  'karnataka','Karnataka' ),
    (  'kerala','Kerala' ),
    (  'madhya_pradesh','Madhya Pradesh' ),
    (  'manipur','Manipur' ),
    (  'meghalaya','Meghalaya' ),
    (  'mizoram','Mizoram' ),
    (  'nagaland','Nagaland' ),
    (  'odisha','Odisha' ),
    (  'punjab','Punjab' ),
    (  'rajasthan','Rajasthan' ),
    (  'sikkim','Sikkim' ),
    (  'tamil_nadu','Tamil Nadu' ),
    (  'telangana','Telangana' ),
    (  'tripura','Tripura' ),
    (  'uttar_pradesh','Uttar Pradesh' ),
    (  'uttarakhand','Uttarakhand' ),
    (  'west_bengal','West Bengal' ),
    (  'andaman_and_nicobar_islands','Andaman and Nicobar Islands' ),
    (  'chandigarh','Chandigarh' ),
    (  'dadra_and_nagar_haveli_and_daman_and_diu','Dadra and Nagar Haveli and Daman and Diu' ),
    (  'delhi','Delhi' ),
    (  'jammu_and_kashmir','Jammu and Kashmir' ),
    (  'ladakh','Ladakh' ),
    (  'lakshadweep','Lakshadweep' ),
    (  'puducherry','Puducherry' ),
]




LEAD_STATUS = (
    ('blank', ' '),
    ('shortlisted', 'Shortlisted'),
    ('rejected', 'Rejected')
)

YES_NO = (
    ('blank', ' '),
    ('yes', 'Yes'),
    ('no', 'No')
)

INTERVIEW_STATUS = (
    ('blank', ' '),
    ('no_pick_up_1st','No Pick Up 1st'),
    ('no_pick_up_2nd','No Pick Up 2nd'),
    ('no_pick_up_3rd','No Pick Up 3rd'),
    ('declined','Declined'),
    ('will_revert','Will Revert'),
    ('call_later','Call Later'),
    ('rejected','Rejected'),
    ('interview_booked','Interview - Booked'),
)

VOCABULARY_RESULT = (
    ('blank', ' '),
    ('qualified','Qualified'),
    ('not_qualified','Not Qualified'),
    ('rescheduled','Rescheduled'),
    ('not_attended','Not Attended')
)

COMMUNICATION_GRADE = (
    ('blank', ' '),
    ('a_good','A-Good'),
    ('b1_average','B1-Average'),
    ('b_fair','B-Fair'),
    ('c_below_average','C-Below Average')
)
OFFERED_STATUS = (
    ('blank', ' '),
    ('offer_letter_sent', 'Offer Letter Sent'),
    ('waiting_list', 'Waiting List'),
    ('check_on_later','Check on Later')
)
HR_INTERVIEW_STATUS = (
    ('blank', ' '),
    ('shortlisted', 'Shortlisted'),
    ('rejected', 'Rejected'),
    ('hold','Hold')
)

JOINED_STATUS = (
    ('blank', ' '),
    ('joined','Joined'),
    ('doj_extended','DOJ - Extended'),
    ('no_response','No Response'),
    ('yet_to_join','Yet to join'),
    ('declined','Declined'),
    ('joined_and_left','Joined & Left'),
    ('rejected_by_management','Rejected by Management'),
)