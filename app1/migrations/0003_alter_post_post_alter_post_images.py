# Generated by Django 4.0.5 on 2022-07-14 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_alter_post_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='Post',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='post',
            name='images',
            field=models.ImageField(default='', upload_to='pro/'),
        ),
    ]
