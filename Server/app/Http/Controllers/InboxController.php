<?php

namespace App\Http\Controllers;

use App\Models\Inbox;
use Illuminate\Http\Request;

class InboxController extends Controller
{
    public $target = '/Applicants/';

    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('destroy', 'update');
    }

    public function index()
    {
        return Inbox::all();
    }

    public function show($id)
    {
        $inbox = Inbox::find($id);

        $inbox->isRead = 1;

        $inbox->save();

        $inbox->data = json_decode($inbox->data);

        return $inbox;
    }

    public function update($id, Request $request)
    {
        $inbox = Inbox::find($id);

        $inbox->isAddedToParticipants = 1;

        $inbox->save();

        return $inbox;
    }

    public function destroy($id)
    {
        $inbox = Inbox::find($id);

        $inbox->data = json_decode($inbox->data);

        FileController::deleteFile($inbox->data->uri->url, $this->target);

        return $inbox->delete();
    }
}
