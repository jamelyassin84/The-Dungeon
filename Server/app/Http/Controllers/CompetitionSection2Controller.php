<?php

namespace App\Http\Controllers;

use App\Models\CompetitionSection2;
use App\Models\RegistrationField;
use Illuminate\Http\Request;

class CompetitionSection2Controller extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public static function index()
    {
        $response = CompetitionSection2::first();

        $response['fields'] = RegistrationField::orderBy('order', 'DESC')->get();

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $data = CompetitionSection2::first();

        if (!empty($data)) {
            $data->fill($dto)->save();

            $this->destroy();

            $this->saveFields($dto);

            return $this->index();
        }

        CompetitionSection2::create($dto);

        $this->saveFields($dto);

        return $this->index();
    }

    public function saveFields($dto)
    {
        foreach ($dto['fields'] as $data) {
            RegistrationField::create($data);
        }
    }

    public function destroy()
    {
        $data = RegistrationField::all();
        foreach ($data as $field) {
            RegistrationField::find($field->id)->delete();
        }
    }
}
