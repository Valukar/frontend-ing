from rest_framework.response import Response
from rest_framework import  status
from rest_framework.authtoken.views import  ObtainAuthToken

class login(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        login_serializer=self.serializer_class(data=request.data,context={'request':request})
        if login_serializer.is_valid():
            print('paso validacion')
        return({'mensaje':'hola que tal'})