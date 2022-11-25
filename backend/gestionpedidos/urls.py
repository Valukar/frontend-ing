from venv import create
from django.contrib import admin
from django.urls import path,include
from .views import UserAPIView,user_detail,InventarioVeView,InventarioVe_detail
from .views import VehiculoOpView,VehiculoOp_detail,InventarioReView,InventarioRe_detail,PedidoView,Pedido_detail
from .viewss import login
urlpatterns = [
    #path("admin/", admin.site.urls),
    #path(" ")
    path("crear_empleado/",UserAPIView),
    path("crear_empleado/<int:pk>",user_detail),


    path("InsertarVehiculo/",InventarioVeView),
    path("InsertarVehiculo/<str:pk>",InventarioVe_detail),

    path("VehiculoOperativo/",VehiculoOpView),
    path("VehiculoOperativo/<int:pk>",VehiculoOp_detail),

    path("Inventario/",InventarioReView),
    path("Inventario/<int:pk>",InventarioRe_detail),

    path("Pedido/",PedidoView),
    path("Pedido/<int:pk>",Pedido_detail),


    #path("", include('api.urls'))
    #path("Empleado/",EmpleadoView.as_view()),
    
    #path('userss/',UserList.as_view()),
    #path('userss/<int:pk>/',UserDetail.as_view()),
    #path('userss/',SnippetList.as_view()),
    #path('userss/<int:pk>/', SnippetDetail.as_view()),
    #path('',login.as_view(),name='Login')


]