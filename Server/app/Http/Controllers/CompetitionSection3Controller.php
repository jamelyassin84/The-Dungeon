<?php

namespace App\Http\Controllers;

use App\Models\CompetitionSection3;
use App\Models\Participant;
use Illuminate\Http\Request;

class CompetitionSection3Controller extends Controller
{

    public $target = '/CompetitionSection3/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        $response = CompetitionSection3::first();

        $categories = ['males', 'females', 'wildCards'];

        $response['participants'] = [
            'males' => Participant::where('sex', $categories[0])
                ->orderBy('created_at', 'Desc')
                ->get(),

            'females' => Participant::where('sex', $categories[1])
                ->orderBy('created_at', 'Desc')
                ->get(),

            'wildCards' => Participant::where('sex', $categories[2])
                ->orderBy('created_at', 'Desc')
                ->get()
        ];

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        $data = CompetitionSection3::first();

        if (!empty($data)) {
            if ($url !== false) {
                FileController::deleteFile($data['uri'], $this->target);
            }

            $data->fill($dto)->save();

            $this->index();
        }

        CompetitionSection3::create($dto);

        return $this->index();
    }
}
