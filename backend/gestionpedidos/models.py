
from email.policy import default
from enum import unique
from operator import length_hint
from django.db import models
import string
import random
# Create your models here.}
"""
Creación de base de datos, de los distintas tablas
"""
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
class Empleado(models.Model):
    id=models.AutoField(unique=True,primary_key=True)
    contrasena=models.CharField(max_length=100,unique=False)
    rol=models.CharField(max_length=100,unique=False,default="repartidor")
    tipoContrato=models.CharField(max_length=100,unique=False)
    estadoLaboral=models.CharField(max_length=100,unique=False)
    rut=models.CharField(max_length=100,unique=True,default="0")
    nombre=models.CharField(max_length=100,unique=False)
    salario=models.PositiveIntegerField(default=0)
    fechaInicio=models.DateField(blank=True,null=True)



    
class InventarioVehiculo(models.Model):
    patente=models.CharField(max_length=8,unique=True,primary_key=True)
    fechaRevision=models.DateField(blank=True)
class VehiculoOperativos(models.Model):
   IdVehiculo=models.AutoField(unique=True,primary_key=True)
   idEmpleado=models.ForeignKey(Empleado,on_delete=models.CASCADE)
   patente=models.ForeignKey(InventarioVehiculo,on_delete=models.CASCADE)

#este no
class Recarga(models.Model):

    idRecarga=models.AutoField(unique=True,primary_key=True)
    fechaRecarga=models.DateField(blank=True,null=True)
    IdVehiculo=models.ForeignKey(VehiculoOperativos,on_delete=models.CASCADE)

#este si


class InventarioRecarga(models.Model):
    idProducto=models.AutoField(unique=True,primary_key=True)
    NombreProducto=models.CharField(max_length=100,unique=False,default='gas')
    stock=models.IntegerField(default='0')
    precio=models.IntegerField()
    
class DetalleRecarga(models.Model):
    idDetalleRecarga=models.AutoField(unique=True,primary_key=True)
    idProductos=models.ForeignKey(InventarioRecarga,on_delete=models.CASCADE)
    idRecarga=models.ForeignKey(Recarga,on_delete=models.CASCADE)
    cantidad=models.IntegerField() 
 
    
#@receiver(post_save, sender =DetalleRecarga)  
#def update_stock(sender, instance, **kwargs):
 #   s=InventarioRecarga.objects.get(idProducto=instance.idProductos)
  #  s.stock=s.stock-instance.cantidad
   # s.save()

#@receiver(post_save, sender =DetalleRecarga)
#def update_stock(sender, instance, **kwargs):    
#    s=InventarioRecarga.objects.get(InventarioRecarga.idProducto)
#    s.stock = s.stock - instance.cantidad

    #s.save()
class IngresarVenta(models.Model):
    idVenta=models.IntegerField(unique=True,primary_key=True)
    fechaVenta=models.DateField(blank=True)
    idVehiculo=models.ForeignKey(VehiculoOperativos,on_delete=models.CASCADE)
class DetalleVenta(models.Model):#trigger
    idDetalleVenta=models.AutoField(unique=True,primary_key=True)     
    cantidadVenta=models.IntegerField()
    idProductos=models.ForeignKey(InventarioRecarga,on_delete=models.CASCADE)
    idVenta=models.ForeignKey(IngresarVenta,on_delete=models.CASCADE)
    subtotal=models.IntegerField()
class Pago(models.Model):
    tipoPago=models.CharField(max_length=100)
    idVenta=models.ForeignKey(IngresarVenta,on_delete=models.CASCADE)
#este 
class Pedido(models.Model):
    idPedido=models.AutoField(unique=True, primary_key=True)
    direccion=models.CharField(max_length=100)
    comentario=models.CharField(max_length=100)
    estado=models.CharField(max_length=100)

class PedidoActivo(models.Model):
    idPedidoActivo=models.AutoField(unique=True, primary_key=True)
    idPedido=models.ForeignKey(Pedido,on_delete=models.CASCADE)
    idPatente=models.ForeignKey(VehiculoOperativos,on_delete=models.CASCADE)




"""
@receiver(post_save, sender=DetalleRecarga)
def remove_from_inventory(sender, instance, **kwargs):
    inventory_item = InventarioRecarga.objects.get(id=instance.InventarioRecarga.idProducto)
    inventory_item.stock = inventory_item.stock - instance.cantidad

    inventory_item.save()
"""    
#@receiver(post_save,sender=DetalleRecarga)
#def update_stock(sender,instance,**kwargs):

#    instance.InventarioRecarga.stock-=instance.cantidad
#    instance.InventarioRecarga.save()

#sumatoris






"""
class Clientes(models.Model):
    nombre=models.CharField(max_length=100,unique=True)
    email=models.EmailField(max_length=100,default='agustinsoza12@gmail.com')
    telefono=models.CharField(max_length=8,null=True)
    
class Articulos(models.Model):
    nombre=models.CharField(max_length=100,unique=True)
    seccion=models.CharField(max_length=100,unique=False)
    precio=models.IntegerField()
class Pedidos(models.Model):
    numero=models.IntegerField(unique=True)
    fecha=models.DateField()
    entregado=models.BooleanField()

"""


