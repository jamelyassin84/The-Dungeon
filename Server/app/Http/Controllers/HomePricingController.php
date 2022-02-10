<?php

namespace App\Http\Controllers;

use App\Models\HomePricing;
use App\Http\Requests\StoreHomePricingRequest;
use App\Http\Requests\UpdateHomePricingRequest;
use Illuminate\Http\Request;

class HomePricingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
