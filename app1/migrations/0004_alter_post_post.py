# Generated by Django 4.0.5 on 2022-07-14 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0003_alter_post_post_alter_post_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='Post',
            field=models.CharField(default='', max_length=10000000000000000),
        ),
    ]
