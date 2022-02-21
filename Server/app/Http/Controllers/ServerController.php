<?php

namespace App\Http\Controllers;

use App\Models\Server;

class ServerController extends Controller
{

    public function index($type, $value)
    {
        $server =  Server::first();
        $server->fill([$type => $value])->save();
        return $server;
    }
}
