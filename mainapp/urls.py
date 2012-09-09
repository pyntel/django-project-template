from django.conf.urls import patterns, include, url

urlpatterns = patterns('mainapp.views',
    url(r'^$', "index", name='index'),
)
