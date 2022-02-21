<?php

namespace App\Http\Controllers;

use App\Models\Inbox;
use Illuminate\Http\Request;

class InboxController extends Controller
{
    public $target = '/Applicants/';

    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function destroy($id)
    {
        $inbox = Inbox::find($id);

        FileController::deleteFile($inbox['data']['uri'], $this->target);

        return $inbox->delete();
    }
}
