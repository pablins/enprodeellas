# Generated by Django 2.1 on 2018-11-08 02:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0003_usuario_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='nickname',
        ),
    ]