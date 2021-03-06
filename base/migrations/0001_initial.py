# Generated by Django 3.1.6 on 2021-04-21 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(blank=True, max_length=200, null=True)),
                ('lastname', models.CharField(blank=True, max_length=200, null=True)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('email', models.CharField(blank=True, max_length=200, null=True)),
                ('city', models.CharField(blank=True, max_length=200, null=True)),
                ('state', models.CharField(blank=True, max_length=200, null=True)),
                ('zip', models.CharField(blank=True, max_length=200, null=True)),
                ('illness', models.CharField(blank=True, max_length=200, null=True)),
                ('hospital', models.CharField(blank=True, max_length=200, null=True)),
                ('severity', models.IntegerField(blank=True, default=0, null=True)),
            ],
        ),
    ]
