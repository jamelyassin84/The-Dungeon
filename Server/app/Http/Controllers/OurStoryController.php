<?php

namespace App\Http\Controllers;

use App\Models\OurStory;
use App\Models\StoryImages;
use Illuminate\Http\Request;

class OurStoryController extends Controller
{
    public $target = '/OurStory/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public static function index()
    {
        $response = OurStory::first();

        $response['images'] = StoryImages::orderBy('created_at', 'DESC')->get();

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $dto['isSectionEnabled'] = HelperController::tooBooleanNumber('isSectionEnabled');

        $dto['isSliderEnabled'] = HelperController::tooBooleanNumber('isSliderEnabled');

        $URLS = FileController::save_and_get_url($request, $this->target);

        $data = OurStory::first();

        if (!empty($data)) {
            $this->saveImages($URLS);


            $data->fill($dto)->save();

            return $this->index();
        }

        OurStory::create($dto);

        $this->saveImages($URLS);

        return $this->index();
    }

    public static function saveImages($URLS)
    {
        if ($URLS !== false) {
            foreach ($URLS['urls'] as $uri) {
                StoryImages::create(['uri' => $uri]);
            }
        }
    }

    public function destroy($id)
    {
        return  StoryImages::find($id)->delete();
    }
}
