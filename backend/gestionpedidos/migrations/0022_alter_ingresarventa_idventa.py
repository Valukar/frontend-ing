# Generated by Django 4.1.1 on 2022-12-01 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionpedidos", "0021_remove_ingresarventa_fechaventita_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="ingresarventa",
            name="idVenta",
            field=models.AutoField(
                max_length=250, primary_key=True, serialize=False, unique=True
            ),
        ),
    ]
