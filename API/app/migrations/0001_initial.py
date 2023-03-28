# Generated by Django 4.1.7 on 2023-03-08 00:48

import app.models
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name_genre', models.CharField(max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(null=True)),
                ('deleted_at', models.DateTimeField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='movie',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=90)),
                ('desc', models.TextField(max_length=1000)),
                ('image', models.ImageField(null=True, upload_to=app.models.upload_path)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(null=True)),
                ('deleted_at', models.DateTimeField(null=True)),
                ('genre_movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='genre_m', to='app.genre')),
            ],
        ),
    ]