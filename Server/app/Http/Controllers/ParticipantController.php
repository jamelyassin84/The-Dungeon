<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public $target = '/Participant/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
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

        return Participant::create($dto);
    }

    public function resolveCategoryAndAddPath($dto)
    {
        if ($dto['sex'] === 'males') {
            return $this->target . 'Males/';
        }
        if ($dto['sex'] === 'females') {
            return $this->target . 'Females/';
        }
        if ($dto['sex'] === 'wildCards') {
            return $this->target . 'WildCards/';
        }
    }

    public function destroy($id)
    {
        $data =  Participant::find($id);

        FileController::deleteFile($data['uri'], $this->resolveCategoryAndAddPath($data));

        return $data->delete();
    }
}
