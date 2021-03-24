from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from .models import Source
from django.views.decorators.csrf import csrf_exempt
import json
from .serializers import SourceSerializer  
from rest_framework.decorators import api_view

# class SourceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Source
#         fields = ["name", "organization", "phoneNumbers", "emails", "notes", "id"]

# GET (read), POST (writing)
#
#  CRUD operations
#   c = create
#   r = read
#   u = update
#   d = delete
#

# create a new source
@api_view(['POST'])
def create(request):
	serializer = SourceSerializer(data=request.data)
	if serializer.is_valid():
		source = serializer.save()
		return JsonResponse({
			'id': source.id		# return id of the object that was created
		})
	else:
		return JsonResponse(serializer.errors, status=400)

# access and read a source
@api_view(['GET'])
def read(request, id):
	source = get_object_or_404(
		Source,
		id=id
	)
	serializer = SourceSerializer(source)
	return JsonResponse(serializer.data)

# updates (GET, POST, PUT)
@api_view(['PUT'])
def update(request, id):
	source = get_object_or_404(
		Source,
		id=id
	)
	serializer = SourceSerializer(source, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return JsonResponse({
			'id': source.id
		})
	else:
		return JsonResponse(serializer.errors)

# delete a source
@api_view(['DELETE'])
def delete(request, id):
	source = get_object_or_404(
		Source,
		id=id
	)
	source.delete()
	return JsonResponse({
		'id': id
	})

# to list all sources
@api_view(['GET'])
def readAll(request):
	sources = Source.objects.all()
	serializer = SourceSerializer(sources, many=True)
	return JsonResponse(serializer.data, safe=False)


# # ViewSets define the view behavior.
# list() => get 
# create() => post
# read()  => GET /1
# destroy() => DELETE /1
# update() => PUT /1


# class NoteViewSet(viewsets.ModelViewSet):
#     queryset = Note.objects.all()
#     serializer_class = SourceSerializer

