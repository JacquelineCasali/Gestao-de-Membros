# Generated by Django 4.1.7 on 2023-03-18 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='menber',
            old_name='Name',
            new_name='name',
        ),
        migrations.AlterField(
            model_name='menber',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='members_profile'),
        ),
    ]
