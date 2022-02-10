<?php

namespace App\Http\Controllers;

use App\Models\OurStory;
use App\Http\Requests\StoreOurStoryRequest;
use App\Http\Requests\UpdateOurStoryRequest;
use Illuminate\Http\Request;

class OurStoryController extends Controller
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
