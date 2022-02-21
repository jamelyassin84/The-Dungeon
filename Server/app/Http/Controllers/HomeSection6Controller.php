<?php

namespace App\Http\Controllers;

use App\Models\HomeSection6;
use Illuminate\Http\Request;

class HomeSection6Controller extends Controller
{
    public $target = '/HomeSection6/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return HomeSection6::first();
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        $data = HomeSection6::first();

        if (!empty($data)) {
            if ($url !== false) {
                FileController::deleteFile($data['uri'], $this->target);
            }

            $data->fill($dto)->save();

            return $data;
        }

        return HomeSection6::create($dto);
    }
}
