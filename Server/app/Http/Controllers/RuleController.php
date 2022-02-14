<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use App\Models\RuleValue;
use Illuminate\Http\Request;

class RuleController extends Controller
{
    public $target = '/Rule/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        $response = Rule::first();

        $response['rules'] = RuleValue::orderBy('created_at', 'DESC')->get();

        if (count($response['rules']) !== 0) {
            foreach ($response['rules'] as $key) {
                $key['data'] = json_decode($key['data']);
            }
        }

        return $response;
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $data = Rule::first();

        $url = FileController::save_and_get_url($request, $this->target);

        if ($url !== false) {
            $dto['uri'] = $url['url'];
        }

        if (!empty($data)) {

            if ($url !== false) {
                FileController::deleteFile($data['uri'], $this->target);
            }

            $data->fill($dto)->save();

            if (isset($dto['rules'])) {
                $this->destroy();
            }

            $this->storeRules($dto);

            return $this->index();
        }

        Rule::create($dto);

        $this->storeRules($dto);

        return $this->index();
    }

    public function storeRules($dto)
    {
        if (isset($dto['rules'])) {
            foreach ($dto['rules'] as $rule) {
                $rule['data'] = json_encode($rule['data']);

                RuleValue::create($rule);
            }
        }
    }

    public function destroy()
    {
        $data = RuleValue::all();
        foreach ($data as $field) {
            RuleValue::find($field->id)->delete();
        }
    }
}
