<?php

namespace App\Http\Controllers;

use App\Models\StoryImages;
use App\Http\Requests\StoreStoryImagesRequest;
use App\Http\Requests\UpdateStoryImagesRequest;
use Illuminate\Http\Request;

class StoryImagesController extends Controller
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
