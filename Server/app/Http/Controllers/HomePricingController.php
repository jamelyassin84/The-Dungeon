<?php

namespace App\Http\Controllers;

use App\Models\HomePricing;
use Illuminate\Http\Request;

class HomePricingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function store(Request $request)
    {
        $dto = (object) $request->all();

        $pricing = HomePricing::all();

        foreach ($pricing as $price) {
            HomePricing::find($price->id)->delete();
        }

        foreach ($dto->prices as $price) {
            HomePricing::create($price);
        }
    }
}
