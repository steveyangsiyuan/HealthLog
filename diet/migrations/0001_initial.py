# Generated by Django 4.1.2 on 2023-01-03 23:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=40)),
                ('equipment', models.CharField(default='', max_length=40)),
                ('PR', models.IntegerField(default=0)),
                ('reps', models.IntegerField(default=0)),
                ('sets', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='WorkOut',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=40)),
                ('exercises', models.ManyToManyField(to='diet.exercise')),
            ],
        ),
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-updated_at', '-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('calories', models.PositiveIntegerField()),
                ('amount', models.PositiveIntegerField()),
                ('serving_size', models.PositiveIntegerField()),
                ('serving_size_unit', models.CharField(max_length=50)),
                ('total_fat', models.PositiveIntegerField()),
                ('carbohydrates', models.PositiveIntegerField()),
                ('protein', models.PositiveIntegerField()),
                ('meal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='diet.meal')),
            ],
        ),
    ]
