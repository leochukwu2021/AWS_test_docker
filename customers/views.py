from rest_framework import generics
from .models import Customer
from .serializers import CustomerSerializer

class CustomerListCreateView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerRetrieveByNameView(generics.ListAPIView):
    serializer_class = CustomerSerializer

    def get_queryset(self):
        name = self.request.query_params.get('full_name')
        if name:
            return Customer.objects.filter(full_name__icontains=name)
        return Customer.objects.none()
