from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from core.views import MenberViewSet
# implementar foto
from django.conf import settings
from django.conf.urls.static import static
router = routers.DefaultRouter()
router.register(r'menbers', MenberViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
# implementar foto
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


