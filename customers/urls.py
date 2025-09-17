from django.urls import path
from .views import CustomerListCreateView, CustomerRetrieveByNameView

urlpatterns = [
    path('customers/', CustomerListCreateView.as_view(), name='customer-list'),
    path('customers/search/', CustomerRetrieveByNameView.as_view(), name='customer-search'),
]
