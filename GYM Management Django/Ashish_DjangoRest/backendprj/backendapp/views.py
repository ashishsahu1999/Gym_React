from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.shortcuts import render, redirect
import random

from .models import PostSignup, PostLogin, Enquiry
from .serializers import UserSignupSerializer, LoginSerializer, PasswordRecoverySerializer, EnquirySerializer

class PostSignupView(APIView):
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        users = PostSignup.objects.all()
        serializer = UserSignupSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PostLoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                PostLogin.objects.create(user=user, success=True, ip_address=request.META.get('REMOTE_ADDR'))
                return Response({'msg': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                PostLogin.objects.create(user=None, success=False, ip_address=request.META.get('REMOTE_ADDR'))
                return Response({'msg': 'Invalid username or password'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordRecoveryView(APIView):
    def post(self, request):
        serializer = PasswordRecoverySerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            mobile = serializer.validated_data['mobile']
            dob = serializer.validated_data['dob']

            user = User.objects.filter(email=email).first()
            if user and user.postsignup.mobile == mobile and user.postsignup.dob == dob:
                temp_password = str(random.randint(100000, 999999))
                send_mail(
                    'Password Recovery',
                    f'Your temporary password is: {temp_password}',
                    'from@example.com',
                    [email]
                )
                return Response({'msg': 'Recovery email sent'}, status=status.HTTP_200_OK)

            return Response({'msg': 'Invalid details'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        return Response({'msg': 'GET method not supported for password recovery'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

# Add Enquiry View
class AddEnquiryView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = EnquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Enquiry added successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
