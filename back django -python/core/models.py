from django.db import models

# api para gestão de membros 
class Menber(models.Model):
    
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField(blank=True,null=True)
    andress = models.CharField(max_length=200, blank=True,null=True)
    photo = models.ImageField(upload_to='members_profile',blank=True,null=True)
   
# definir metodo para retornar a classe como vai retornar no banco 
    def __str__(self):
        return self.name + " " + self.surname


    
