<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    public function run()
    {
        $user = [
            'name' => 'Jamel Eid Yassin',
            'email' => 'admin',
            'password' =>  Hash::make('admin'),
            'remember_token' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];

        User::create($user);
    }
}
