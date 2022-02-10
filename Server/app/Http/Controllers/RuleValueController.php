<?php

namespace App\Http\Controllers;

use App\Models\RuleValue;
use App\Http\Requests\StoreRuleValueRequest;
use App\Http\Requests\UpdateRuleValueRequest;
use Illuminate\Http\Request;

class RuleValueController extends Controller
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
