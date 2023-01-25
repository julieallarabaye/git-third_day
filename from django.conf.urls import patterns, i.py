from django.conf.urls import patterns, include, url
from django.views.generic import *
from django import forms

class ContactForm(forms.Form):
    subject = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)

    def send_email(self):
        print (self.cleaned_data)
        
class ContactView(FormView):
    template_name = 'backoffice/templates/contact.html'
    form_class = ContactForm
    success_url = '/thanks/'

    def form_valid(self, form):
        form.send_email()
        return super(ContactView, self).form_valid(form)
    
urlpatterns = patterns('',
    url(r'^contact/$', ContactView.as_view()),
)