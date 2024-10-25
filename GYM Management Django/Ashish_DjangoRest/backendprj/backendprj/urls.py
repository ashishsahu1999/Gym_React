"""
URL configuration for backendprj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from backendapp.views import PostSignupView, PostLoginView, PasswordRecoveryView, AddEnquiryView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', PostSignupView.as_view(), name='signup'),
    path('api/login/', PostLoginView.as_view(), name='login'),
    path('api/password-recovery/', PasswordRecoveryView.as_view(), name='password_recovery'),
    path('api/enquiries/add/', AddEnquiryView.as_view(), name='add_enquiry'),
]

