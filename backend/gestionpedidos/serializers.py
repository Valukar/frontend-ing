from dataclasses import fields
from rest_framework import serializers
from .models import Empleado,InventarioVehiculo,VehiculoOperativos,IngresarVenta,DetalleVenta
from .models import InventarioRecarga,Pedido,PedidoActivo, Recarga,DetalleRecarga
from django.db.models import Sum
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
        fields=("idDetalleRecarga","idProductos","idRecargas","cantidad")

class prueba(serializers.ModelSerializer):    
   
    total=serializers.SerializerMethodField()   
    class Meta:
        model=DetalleRecarga
        fields=("total")
"""        

class prueba(serializers.ModelSerializer):
    rank=serializers.SerializerMethodField()
    class Meta:
        model = DetalleRecarga
        fields=("cantidad","rank")
    def get_rank(self,obj):
        if obj.cantidad<10:
            return "malo"
        else:
            return "bueno"
"""  
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
    #fechaRevision=serializers.CharField(source="patente.fechaRevision")

    comentario=serializers.CharField(source="idPedido.comentario")
    direccion=serializers.CharField(source="idPedido.direccion")# direccion, comentario #numbre repartidor
    patente=serializers.CharField(source="idPatente.patente.patente")
    nombre=serializers.CharField(source="idPatente.idEmpleado.nombre")
    class Meta:
        model = PedidoActivo
        fields=("idPedidoActivo","idPedido","idPatente","comentario","direccion","patente","nombre")#"idPedido_comentario"
        depth=0

class IngresarVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngresarVenta
        fields='__all__'
class DetalleVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleVenta
        fields='__all__'