# Generated by Django 4.1.3 on 2024-09-23 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapp', '0007_remove_postsignup_email_remove_postsignup_full_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='postsignup',
            name='email',
            field=models.EmailField(default='example@example.com', max_length=254, unique=True),
        ),
    ]
