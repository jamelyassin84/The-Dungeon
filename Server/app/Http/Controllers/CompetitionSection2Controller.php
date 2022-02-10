<?php

namespace App\Http\Controllers;

use App\Models\CompetitionSection2;
use App\Http\Requests\StoreCompetitionSection2Request;
use App\Http\Requests\UpdateCompetitionSection2Request;
use Illuminate\Http\Request;

class CompetitionSection2Controller extends Controller
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
