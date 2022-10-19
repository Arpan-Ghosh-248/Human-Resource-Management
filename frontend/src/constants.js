

export const adminStatusOptions = [
    { key: 'active', value: 'Active' },
    { key: 'deleted', value: 'Deleted' }
];

export const adminRoleOptions = [
    { key: 'director', value: 'Director' },
    { key: 'hr_level_1', value: 'HR Level 1' },
    { key: 'hr_level_2', value: 'HR Level 2' },
    
];


//Leads

export const leadStatusOption = [
    { key: 'shortlisted', value: 'Shortlisted' },
    { key: 'rejected', value: 'Rejected' },
]

export const leadStateOption = [
    { key: 'andhra_pradesh', value: 'Andhra Pradesh' },
    { key: 'arunachal_pradesh', value: 'Arunachal Pradesh' },
    { key: 'assam', value: 'Assam' },
    { key: 'bihar', value: 'Bihar' },
    { key: 'chhattisgarh', value: 'Chhattisgarh' },
    { key: 'goa', value: 'Goa' },
    { key: 'gujarat', value: 'Gujarat' },
    { key: 'haryana', value: 'Haryana' },
    { key: 'himachal_pradesh', value: 'Himachal Pradesh' },
    { key: 'jharkhand', value: 'Jharkhand' },
    { key: 'karnataka', value: 'Karnataka' },
    { key: 'kerala', value: 'Kerala' },
    { key: 'madhya_pradesh', value: 'Madhya Pradesh' },
    { key: 'manipur', value: 'Manipur' },
    { key: 'meghalaya', value: 'Meghalaya' },
    { key: 'mizoram', value: 'Mizoram' },
    { key: 'nagaland', value: 'Nagaland' },
    { key: 'odisha', value: 'Odisha' },
    { key: 'punjab', value: 'Punjab' },
    { key: 'rajasthan', value: 'Rajasthan' },
    { key: 'sikkim', value: 'Sikkim' },
    { key: 'tamil_nadu', value: 'Tamil Nadu' },
    { key: 'telangana', value: 'Telangana' },
    { key: 'tripura', value: 'Tripura' },
    { key: 'uttar_pradesh', value: 'Uttar Pradesh' },
    { key: 'uttarakhand', value: 'Uttarakhand' },
    { key: 'west_bengal', value: 'West Bengal' },
    { key: 'andaman_and_nicobar_islands', value: 'Andaman and Nicobar Islands' },
    { key: 'chandigarh', value: 'Chandigarh' },
    { key: 'dadra_and_nagar_haveli_and_daman_and_diu', value: 'Dadra and Nagar Haveli and Daman and Diu' },
    { key: 'delhi', value: 'Delhi' },
    { key: 'jammu_and_kashmir', value: 'Jammu and Kashmir' },
    { key: 'ladakh', value: 'Ladakh' },
    { key: 'lakshadweep', value: 'Lakshadweep' },
    { key: 'puducherry', value: 'Puducherry' },
]

//Communication
export const candiadteStatusOption = [
    { key: 'blank', value: ' ' },
    { key: 'yes', value: 'Yes' },
    { key: 'no', value: 'No' },
]

export const interviewStatusOption = [
    {key: 'blank', value:' '},
    {key: 'no_pick_up_1st',value:'No Pick Up 1st'},
    {key: 'no_pick_up_2nd',value:'No Pick Up 2nd'},
    {key: 'no_pick_up_3rd',value:'No Pick Up 3rd'},
    {key: 'declined',value:'Declined'},
    {key: 'will_revert',value:'Will Revert'},
    {key: 'call_later',value:'Call Later'},
    {key: 'rejected',value:'Rejected'},
    {key: 'interview_booked',value:'Interview - Booked'},
]

export const vocabResultOption = [
    {key:'blank',value: ' '},
    {key:'qualified',value:'Qualified'},
    {key:'not_qualified',value:'Not Qualified'},
    {key:'rescheduled',value:'Rescheduled'},
    {key:'not_attended',value:'Not Attended'}
]

export const commGradeOption = [
    {key:'blank',value: ' '},
    {key:'a_good',value:'A-Good'},
    {key:'b1_average',value:'B1-Average'},
    {key:'b_fair',value:'B-Fair'},
    {key:'c_below_average',value:'C-Below Average'} 
]
export const hrResultOption = [
    { key: 'shortlisted', value: 'Shortlisted' },
    { key: 'rejected', value: 'Rejected' },
    { key: 'hold', value: 'Hold' },

]

export const offeredStatusOptions = [
    {key: 'blank', value:' '},
    {key: 'offer_letter_sent',value:'Offer Letter Sent'},
    {key: 'waiting_list',value:'Waiting List'},
    {key: 'check_on_later',value:'Check on Later'},
]

export const joinedStatusOptions = [
    {key: 'blank', value:' '},
    {key: 'joined',value:'Joined'},
    {key: 'doj_extended',value:'DOJ - Extended'},
    {key: 'no_response',value:'No Response'},
    {key: 'yet_to_join',value:'Yet to join'},
    {key: 'declined',value:'Declined'},
    {key: 'joined_and_left',value:'Joined & Left'},
    {key: 'rejected_by_management',value:'Rejected by Management'},
]