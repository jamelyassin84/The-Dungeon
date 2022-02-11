<?php

namespace App\Http\Controllers;

use App\Models\HomeSection3;
use App\Models\HomeSliderImage;
use Hamcrest\Core\IsNull;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isNull;

class HomeSection3Controller extends Controller
{
    public $target = '/HomeSection3/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public static function index()
    {
        $response = HomeSection3::first();

        $response['images'] = HomeSliderImage::orderBy('created_at', 'DESC')->get();

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $dto['isSectionEnabled'] = HelperController::tooBooleanNumber('isSectionEnabled');

        $dto['isSliderEnabled'] = HelperController::tooBooleanNumber('isSliderEnabled');

        $URLS = FileController::save_and_get_url($request, $this->target)['urls'];

        $data = $this->index();

        if (!IsNull($data)) {
            foreach ($URLS as $uri) {
                HomeSliderImage::create(['uri' => $uri]);
            }

            $data->fill($dto)->save();

            return $this->index();
        }

        $data =  HomeSection3::create($dto);

        foreach ($URLS as $uri) {
            HomeSliderImage::create(['uri' => $uri]);
        }

        $response = HomeSection3::first();

        $response['images'] = HomeSliderImage::all();

        return $this->index();
    }
}
