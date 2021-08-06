from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def func3x(num):
    res = []

    for _ in range(1000):
        res.append(num)
        if num == 1:
            break
        if num % 2 == 0:
            num //= 2
        else:
            num = 3 * num + 1

    return res

def index (request):
    resp = render(request, 'index.html')
    return resp


def collatz (request, num):
    return HttpResponse(','.join([str(i) for i in func3x(int(num))]))
