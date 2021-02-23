from django.http import HttpResponse, JsonResponse
from .models import Source
from django.views.decorators.csrf import csrf_exempt
import json
#from .serializers import SourceSerializer  # create Source Serializer in sources --> serializers.py 
from rest_framework.decorators import api_view