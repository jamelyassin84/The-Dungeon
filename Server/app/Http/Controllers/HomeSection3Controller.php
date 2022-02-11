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

        $URLS = FileController::save_and_get_url($request, $this->target);

        $data = HomeSection3::first();

        if (!empty($data)) {
            $this->saveImages($URLS);


            $data->fill($dto)->save();

            return $this->index();
        }

        HomeSection3::create($dto);

        $this->saveImages($URLS);

        return $this->index();
    }

    public static function saveImages($URLS)
    {
        if ($URLS !== false) {
            foreach ($URLS['urls'] as $uri) {
                HomeSliderImage::create(['uri' => $uri]);
            }
        }
    }

    public function destroy($id)
    {
        return  HomeSliderImage::find($id)->delete();
    }
}
