<?php

namespace App\Http\Controllers;

use App\Models\Footer;
use Illuminate\Http\Request;

class FooterController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return Footer::first();
    }

    public function store(Request $request)
    {
        $dto = $request->all();

        $data = Footer::first();

        if (!empty($data)) {

            $data->fill($request->all())->save();

            return $data;
        }

        return Footer::create($dto);
    }
}
