from urllib import response
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework import generics,permissions,viewsets
from rest_framework import status
from .serializers import EmpleadoSerializer,UserSerializer,InventarioVeSerializer,InventarioVeOpSerializer,InventarioRecargaSerializer,PedidoSerializer 
from .models import Empleado,InventarioVehiculo,VehiculoOperativos,InventarioRecarga,Pedido,PedidoActivo,Recarga,DetalleRecarga,IngresarVenta,DetalleVenta,IngresarVentas
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from rest_framework import mixins
from .serializers import PedidoActivoSerializer,prueba,IngresarVentaSerializer,DetalleVentaSerializer,RecargaSerializer,DetalleRecargaSerializer,pedidoactivose,vehiculooperativo
from django.db.models import Count


# Create your views here.
#def main(request):
 #   return HttpResponse("hola rodenitas")


#class EmpleadoView(generics.ListAPIView):
 #   queryset=Empleado.objects.all()
  #  serializer_class=EmpleadoSerializer
#createEmpleadoView


@api_view(['GET', 'POST'])
def UserAPIView(request):

    if request.method == 'GET':
        snippets = Empleado.objects.all()
        serializer = EmpleadoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EmpleadoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    
    try:
        snippet = Empleado.objects.get(pk=pk)
    except Empleado.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmpleadoSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmpleadoSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def InventarioVeView(request):

    if request.method == 'GET':
        snippets = InventarioVehiculo.objects.all()
        serializer = InventarioVeSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InventarioVeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def InventarioVe_detail(request, pk):
    try:
        snippet = InventarioVehiculo.objects.get(pk=pk)
    except InventarioVehiculo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = InventarioVeSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = InventarioVeSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def VehiculoOpView(request):

    if request.method == 'GET':
        snippets = VehiculoOperativos.objects.all()
        serializer = InventarioVeOpSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InventarioVeOpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def VehiculoOp_detail(request, pk):
    try:
        snippet = VehiculoOperativos.objects.get(pk=pk)
    except VehiculoOperativos.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = InventarioVeOpSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = InventarioVeOpSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def InventarioReView(request):

    if request.method == 'GET':
        snippets = InventarioRecarga.objects.all()
        serializer = InventarioRecargaSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InventarioRecargaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def recarga_inventario(request):
    if request.method == 'GET':
        snippets = Recarga.objects.all()
        serializer = RecargaSerializer(snippets, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RecargaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'POST'])
def detallerecarga_inventario(request):
    if request.method == 'GET':
        snippets = DetalleRecarga.objects.all()
        serializer = DetalleRecargaSerializer(snippets, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DetalleRecargaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def InventarioRe_detail(request, pk):
    try:
        snippet = InventarioRecarga.objects.get(pk=pk)
    except InventarioRecarga.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = InventarioRecargaSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = InventarioRecargaSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def PedidoView(request):

    if request.method == 'GET':
        snippets = Pedido.objects.all()
        serializer = PedidoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def Pedido_detail(request, pk):
    try:
        snippet = Pedido.objects.get(pk=pk)
    except Pedido.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PedidoSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PedidoSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def pedido_activo(request):
    if request.method == 'GET':
        snippets = PedidoActivo.objects.all()
        serializer = PedidoActivoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PedidoActivoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def pedido_activo_detail(request, pk):
    try:
        snippet = PedidoActivo.objects.get(pk=pk)
    except Pedido.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PedidoActivoSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PedidoActivoSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['GET', 'POST'])
def PedidoView(request):

    if request.method == 'GET':
        snippets = Pedido.objects.all()
        serializer = PedidoSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PedidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#ventas
@api_view(['GET', 'POST'])
def IngresarVentaView(request):
    if request.method == 'GET':
        snippets = IngresarVentas.objects.all()
        serializer = IngresarVentaSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = IngresarVentaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def DetalleVentaView(request):
    if request.method == 'GET':
        snippets = DetalleVenta.objects.all()
        serializer =DetalleVentaSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DetalleVentaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def detalle_venta_detail(request, pk):
    try:
        snippet = DetalleVenta.objects.get(pk=pk)
    except Pedido.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DetalleVentaSerializer(snippet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DetalleVentaSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#insercion de datos por tabla
@api_view(['GET', 'POST'])
def pedidoActivo(request):
    if request.method == 'GET':
        snippets = PedidoActivo.objects.all()
        serializer = pedidoactivose(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = pedidoactivose(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def vehiculoopera(request):
    if request.method == 'GET':
        snippets = VehiculoOperativos.objects.all()
        serializer = vehiculooperativo(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = vehiculooperativo(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#reportes
@api_view(['GET'])
def pruebita(request):
    #DetalleRecarga.objects.values('idProductos__NombreProducto','idRecargas__fechaRecarga','idRecargas__IdVehiculo__patente').order_by('idRecargas__fechaRecarga')
    return Response(DetalleRecarga.objects.values('idProductos__NombreProducto','idRecargas__fechaRecarga','idRecargas__IdVehiculo__patente','cantidad').order_by('idRecargas__fechaRecarga'))#cambiar idrecar en front
@api_view(['GET'])
def pruebitados(request):
    #
    return Response(DetalleVenta.objects.values('idVenta__fechaVenta','idVenta__idVehiculo__patente','idProductos__NombreProducto','cantidadVenta').order_by('idVenta__fechaVenta'))




"""
class UserList(generics.ListAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer


class UserDetail(generics.ListAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    permission_classes=(permissions.IsAuthenticatedOrReadOnly,)


class SnippetList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    permission_classes=(permissions.IsAuthenticatedOrReadOnly,)
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
class SnippetDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class UserAPIView(APIView):
    def get(self, request):
        user=Empleado.objects.all()
        user_seri=CreateEmpleadosSerializer(user,many=True)#many muchos atributos listado
        return Response(user_seri.data)
"""     
"""
class createEmpleadoView(APIView):
    serializer_class=CreateEmpleadosSerializer
    def post(self, request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializers=self.serializer_class(data=request.data)   
        if serializers.is_valid():
            
            telefono=serializers.data.get('telefono')
            tipoContrato=serializers.data.get('tipoContrato')
            estadoLaboral=serializers.data.get('estadoLaboral')
            nombre=self.request.session.session_key
            queryset=Empleado.objects.filter(nombre=nombre)
            if queryset.exists():
                Empleado=queryset[0]
                Empleado.telefono=telefono
                Empleado.tipoContrato=tipoContrato
                Empleado.estadoLaboral=estadoLaboral
                Empleado.save(update_fields=['telefono','tipoContrato','estadoLaboral'])

            else:
                Empleado=Empleado(Nombre=nombre,telefono=telefono,tipoContrato=tipoContrato,estadoLaboral=estadoLaboral)
                Empleado.save()
        return Response(EmpleadoSerializer(Empleado).data)
           
"""

