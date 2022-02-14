<?php

namespace App\Http\Controllers;

use App\Models\HomeSection2;
use Illuminate\Http\Request;

class HomeSection2Controller extends Controller
{
    public $target = '/HomeSection2/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return HomeSection2::first();
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        $data = HomeSection2::first();

        if (!empty($data)) {
            if ($url !== false) {
                FileController::deleteFile($data['uri'], $this->target);
            }

            $data->fill($dto)->save();

            return $data;
        }

        return HomeSection2::create($dto);
    }
}
