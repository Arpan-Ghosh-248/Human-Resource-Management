from config.settings import DEFAULT_PAGE_SIZE
from rest_framework import pagination
from rest_framework.response import Response

class CustomizePagination(pagination.PageNumberPagination):

    def get_paginated_response(self, data):
        if not data:
            total_pages = 0
        else: 
            total_pages = self.page.paginator.num_pages
        
        return Response({
            'count': self.page.paginator.count,
            'per_page': DEFAULT_PAGE_SIZE,
            'total_pages': total_pages,
            'current': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data
        })