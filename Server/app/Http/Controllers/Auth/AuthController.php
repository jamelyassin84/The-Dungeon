<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('log_out');
        return $this;
    }

    public function log_in(Request $request)
    {
        $user = (object) $request->all();

        if ($user->mode === 'Default') {
            $data = User::where('email', $user->email)
                ->where('type', 'seller')
                ->first();

            if (empty($data)) return response('User not Found', 404);

            if (!Hash::check($user->password, $data->password)) return response('Invalid Password', 401);

            return self::user($data);
        }
        return response('Invalid Mode', 401);
    }

    protected static function user($user)
    {
        return [
            'user' => $user,
            'token' =>  self::updateToken($user->id),
            'message' => 'Signed-in',
        ];
    }

    protected static function updateToken($id, $abilities = ['*'])
    {
        $user = User::find($id)->first();
        $ip = request()->ip();
        $token = $user->createToken("{$user->name}|{$ip}", $abilities);
        $user->remember_token = null;
        $user->save();
        return $token;
    }

    public function log_out(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
    }
}