<?php

namespace App\Http\Controllers;

use App\Models\HomeSection2;
use App\Http\Requests\StoreHomeSection2Request;
use App\Http\Requests\UpdateHomeSection2Request;
use Illuminate\Http\Request;

class HomeSection2Controller extends Controller
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
