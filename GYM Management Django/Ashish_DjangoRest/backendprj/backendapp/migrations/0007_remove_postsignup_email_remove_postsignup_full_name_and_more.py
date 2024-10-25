# Generated by Django 4.1.3 on 2024-09-23 08:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('backendapp', '0006_postsignup_delete_employee'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='postsignup',
            name='email',
        ),
        migrations.RemoveField(
            model_name='postsignup',
            name='full_name',
        ),
        migrations.RemoveField(
            model_name='postsignup',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='postsignup',
            name='is_staff',
        ),
        migrations.RemoveField(
            model_name='postsignup',
            name='password',
        ),
        migrations.AddField(
            model_name='postsignup',
            name='mobile',
            field=models.CharField(blank=True, max_length=15),
        ),
        migrations.AddField(
            model_name='postsignup',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='postsignup',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='postsignup',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female')], max_length=10),
        ),
        migrations.CreateModel(
            name='PostLogin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('login_time', models.DateTimeField(auto_now_add=True)),
                ('ip_address', models.GenericIPAddressField(blank=True, null=True)),
                ('success', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]