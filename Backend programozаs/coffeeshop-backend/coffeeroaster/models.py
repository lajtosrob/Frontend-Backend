from django.db import models

# Create your models here.

class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Coffee(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    tags = models.ManyToManyField(Tag)
    amount_in_grams = models.IntegerField(default=200)
    price = models.IntegerField(blank=False, null=False)

    def __str__(self):
        return f"{self.name} ({self.amount_in_grams}g)"