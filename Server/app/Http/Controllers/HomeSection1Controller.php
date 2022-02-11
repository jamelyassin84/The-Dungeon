<?php

namespace App\Http\Controllers;

use App\Models\HomeSection1;
use Illuminate\Http\Request;

class HomeSection1Controller extends Controller
{
    public $target = '/HomeSection1/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return HomeSection1::first();
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        $data = HomeSection1::first();

        if (!empty($data)) {
            FileController::deleteFile($data['uri'], $this->target);

            $data->fill($dto)->save();

            return $data;
        }

        return HomeSection1::create($dto);
    }
}
