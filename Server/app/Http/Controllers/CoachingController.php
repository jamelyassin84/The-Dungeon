<?php

namespace App\Http\Controllers;

use App\Models\Coaching;
use Illuminate\Http\Request;

class CoachingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return Coaching::OrderBy('created_at', 'DESC')->get();
    }

    public function store(Request $request)
    {
        $dto = (object) $request->all();

        $this->destroy();

        foreach ($dto->data as $data) {
            Coaching::create($data);
        }

        return $this->index();
    }

    public function destroy()
    {
        $data = Coaching::all();
        foreach ($data as $field) {
            Coaching::find($field->id)->delete();
        }
    }
}
