<?php

namespace App\Http\Controllers;

use App\Models\HomePricing;
use App\Models\HomeSection4;
use Illuminate\Http\Request;

class HomeSection4Controller extends Controller
{
    public $target = '/HomeSection4/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        $response = HomeSection4::first();

        $response['prices'] = HomePricing::orderBy('created_at', 'DESC')->get();

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        $data = HomeSection4::first();

        if (!empty($data)) {
            if ($request->file('file')) {
                FileController::deleteFile($data['uri'], $this->target);
            }

            $data->fill($dto)->save();

            return $this->index();
        }

        HomeSection4::create($dto);

        return $this->index();
    }
}
