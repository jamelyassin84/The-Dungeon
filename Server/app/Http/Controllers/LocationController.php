<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public $target = '/Location/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return Location::first();
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        $data = Location::first();

        if (!empty($data)) {
            FileController::deleteFile($data['uri'], $this->target);

            $data->fill($dto)->save();

            return $data;
        }

        return Location::create($dto);
    }
}
