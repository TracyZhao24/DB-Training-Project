from rest_framework import serializers      # comes from django rest framwork
from .models import Source

# serializers.ModelSerializer extends the class
class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ["name", "organization", "phoneNumbers", "emails", "notes", "id"]