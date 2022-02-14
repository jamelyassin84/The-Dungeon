<?php

namespace App\Http\Controllers;

use App\Models\Email;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        $response = User::first();

        $response['emails'] = Email::OrderBy('created_at', 'DESC')->get();

        return $response;
    }

    public function store(Request $request)
    {
        $user = $request->all();
        if (!isset($user['oldPassword'])) return 'Invalid Request. Please put your  passwords';


        $data = User::where('email', $user['email'])
            ->first();

        if (empty($data)) return 'Invalid old username.';

        if (!Hash::check($user['oldPassword'], $data->password))  return 'Invalid old password.';

        $data->fill($user)->save();

        $this->destroy();

        foreach ($user['emails'] as $email) {
            Email::create($email);
        }

        return $this->index();
    }

    public function destroy()
    {
        $data = Email::all();
        foreach ($data as $field) {
            Email::find($field->id)->delete();
        }
    }
}
