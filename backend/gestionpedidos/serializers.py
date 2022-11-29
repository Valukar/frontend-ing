from dataclasses import fields
from rest_framework import serializers
from .models import Empleado,InventarioVehiculo,VehiculoOperativos
from .models import InventarioRecarga,Pedido,PedidoActivo, Recarga,DetalleRecarga

from django.contrib.auth.models import User



class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields='__all__'


class InventarioVeSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventarioVehiculo
        fields='__all__'

class InventarioVeOpSerializer(serializers.ModelSerializer):
    fechaRevision=serializers.CharField(source="patente.fechaRevision")
    nombre=serializers.CharField(source="idEmpleado.nombre")
    class Meta:
       
        model = VehiculoOperativos
        fields=("IdVehiculo","idEmpleado","patente","fechaRevision","nombre")
        depth=0

class InventarioRecargaSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventarioRecarga
        fields='__all__'

class RecargaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recarga
        fields='__all__'

class DetalleRecargaSerializer(serializers.ModelSerializer):
     class Meta:
        model = DetalleRecarga
        fields='__all__'

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields='__all__'
# autentificador



class UserSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Empleado.objects.all())

    class Meta:
        model = User
        fields=('id','nombre','telefono','tipoContrato','estadoLaboral')
    
class PedidoActivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidoActivo
        fields=("idPedidoActivo","idPedido","idPatente")#"idPedido_comentario"
        depth=1
