# Generated by Django 4.1.1 on 2022-12-01 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("gestionpedidos", "0015_recarga_detallerecarga"),
    ]

    operations = [
        migrations.AlterField(
            model_name="ingresarventa",
            name="fechaVenta",
            field=models.DateField(blank=True, null=True),
        ),
    ]
