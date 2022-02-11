<?php

namespace App\Http\Controllers;

use App\Models\RegistrationField;

class RegistrationFieldController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function destroy($id)
    {
        RegistrationField::find($id)->destroy();
    }
}
