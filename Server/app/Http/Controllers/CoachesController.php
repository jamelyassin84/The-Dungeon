<?php

namespace App\Http\Controllers;

use App\Models\Coaches;
use Illuminate\Http\Request;

class CoachesController extends Controller
{
    public $target = '/Coaches/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        $response = [];

        $categories = ['males', 'females'];

        foreach ($categories as $category) {
            $response[$category]  = Coaches::where('sex', $category)
                ->orderBy('created_at', 'Desc')
                ->get();
        }

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url(
            $request,
            $this->resolveCategoryAndAddPath($dto)
        );

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        Coaches::create($dto);

        return $this->index();
    }

    public function resolveCategoryAndAddPath($dto)
    {
        if ($dto['sex'] === 'males') {
            return $this->target . 'Males/';
        }
        if ($dto['sex'] === 'females') {
            return $this->target . 'Females/';
        }
    }

    public function destroy($id)
    {
        $data =  Coaches::find($id);

        FileController::deleteFile($data['uri'], $this->resolveCategoryAndAddPath($data));

        $data->delete();

        return $this->index();
    }
}
