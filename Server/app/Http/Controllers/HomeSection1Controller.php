<?php

namespace App\Http\Controllers;

use App\Models\HomeSection1;
use App\Http\Requests\StoreHomeSection1Request;
use App\Http\Requests\UpdateHomeSection1Request;
use Illuminate\Http\Request;

class HomeSection1Controller extends Controller
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
