# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import math
import json

def calculate_lcm(a: int, b: int) -> int:
    return abs(a * b) // math.gcd(a, b)

def calculate_lcm_interval(num1: int, num2: int) -> int:
    lower, upper = min(num1, num2), max(num1, num2)
    lcm_total = lower
    if lower == 1:
        return upper
    for i in range(lower + 1, upper + 1):
        lcm_total = calculate_lcm(lcm_total, i)
    return lcm_total

@csrf_exempt
@api_view(['POST'])
def calculate_lcm_view(request):
    try:
        data = json.loads(request.body)
        num1 = data.get("num1")
        num2 = data.get("num2")

        if num1 is None or num2 is None:
            return JsonResponse({"error": "Two numbers must be provided in the request body."}, status=400)
        
        result = calculate_lcm_interval(num1, num2)

        # Evitando saída de dados má formatada devido a intervalos muito grandes
        if result > 999999999999:
            return JsonResponse({"error": "Invalid result, the interval was too big"}, status=400)
        
        return JsonResponse({"lcm": result})

    except (TypeError, ValueError):
        return JsonResponse({"error": "Invalid input data. Please ensure the numbers are correct."}, status=400)
