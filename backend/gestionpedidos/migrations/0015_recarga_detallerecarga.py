# Generated by Django 4.1.1 on 2022-11-30 19:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        (
            "gestionpedidos",
            "0014_remove_recarga_idvehiculo_delete_detallerecarga_and_more",
        ),
    ]

    operations = [
        migrations.CreateModel(
            name="Recarga",
            fields=[
                (
                    "idRecarga",
                    models.AutoField(primary_key=True, serialize=False, unique=True),
                ),
                ("fechaRecarga", models.DateField(blank=True, null=True)),
                (
                    "IdVehiculo",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="gestionpedidos.vehiculooperativos",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="DetalleRecarga",
            fields=[
                (
                    "idDetalleRecarga",
                    models.AutoField(primary_key=True, serialize=False, unique=True),
                ),
                ("cantidad", models.IntegerField()),
                (
                    "idProductos",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="gestionpedidos.inventariorecarga",
                    ),
                ),
                (
                    "idRecargas",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="gestionpedidos.recarga",
                    ),
                ),
            ],
        ),
    ]
