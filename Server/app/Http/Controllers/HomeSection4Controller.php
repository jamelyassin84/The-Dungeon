<?php

namespace App\Http\Controllers;

use App\Models\HomeSection4;
use App\Http\Requests\StoreHomeSection4Request;
use App\Http\Requests\UpdateHomeSection4Request;
use Illuminate\Http\Request;

class HomeSection4Controller extends Controller
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
