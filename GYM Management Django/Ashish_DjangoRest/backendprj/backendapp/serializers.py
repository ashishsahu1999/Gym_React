from rest_framework import serializers
from django.contrib.auth.models import User
from .models import PostSignup, Enquiry

class UserSignupSerializer(serializers.ModelSerializer):
    mobile = serializers.CharField(max_length=15)
    gender = serializers.CharField(max_length=10)
    dob = serializers.DateField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'mobile', 'gender', 'dob']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        mobile = validated_data.pop('mobile')
        gender = validated_data.pop('gender')
        dob = validated_data.pop('dob')

        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        PostSignup.objects.create(
            user=user,
            mobile=mobile,
            gender=gender,
            dob=dob
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class PasswordRecoverySerializer(serializers.Serializer):
    email = serializers.EmailField()
    mobile = serializers.CharField()
    dob = serializers.DateField()

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = ['name', 'mobile', 'email', 'age', 'gender']
