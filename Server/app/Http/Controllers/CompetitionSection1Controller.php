<?php

namespace App\Http\Controllers;

use App\Models\CompetitionSection1;
use App\Http\Requests\StoreCompetitionSection1Request;
use App\Http\Requests\UpdateCompetitionSection1Request;
use Illuminate\Http\Request;

class CompetitionSection1Controller extends Controller
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
