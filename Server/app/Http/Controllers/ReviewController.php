<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return Review::OrderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $dto = (object) $request->all();

        $this->destroy();

        foreach ($dto->data as $data) {
            Review::create($data);
        }

        return $this->index();
    }

    public function destroy()
    {
        $data = Review::all();
        foreach ($data as $field) {
            Review::find($field->id)->delete();
        }
    }
}
