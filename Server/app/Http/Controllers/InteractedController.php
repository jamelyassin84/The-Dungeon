<?php

namespace App\Http\Controllers;

use App\Models\Interacted;
use App\Http\Requests\StoreInteractedRequest;
use App\Http\Requests\UpdateInteractedRequest;
use Illuminate\Http\Request;

class InteractedController extends Controller
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
