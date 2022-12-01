# Generated by Django 4.1.1 on 2022-12-01 05:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("gestionpedidos", "0026_ventitas_idvehiculo_alter_ventitas_fecha"),
    ]

    operations = [
        migrations.AlterField(
            model_name="ventitas", name="fecha", field=models.DateField(),
        ),
        migrations.AlterField(
            model_name="ventitas",
            name="idVehiculo",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="gestionpedidos.vehiculooperativos",
            ),
        ),
    ]