# Generated by Django 4.0.5 on 2022-07-19 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_rename_post_post_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=200)),
                ('lastname', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.CharField(max_length=50000)),
            ],
        ),
    ]
