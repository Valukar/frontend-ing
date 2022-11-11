from venv import create
from django.contrib import admin
from django.urls import path,include
from .views import UserAPIView,user_detail,InventarioVeView,InventarioVe_detail
from .views import VehiculoOpView,VehiculoOp_detail,InventarioReView,InventarioRe_detail,PedidoView,Pedido_detail


from rest_framework.authtoken import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from django.contrib import admin
from django.contrib.auth import views as auth_views

from django.urls import path
from .viewss import MyObtainTokenPairView,RegisterView,LogoutAPIView
from rest_framework_simplejwt.views import TokenRefreshView
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

    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('logout/', LogoutAPIView.as_view(), name="logout"),


    


   
  






]