<?php

namespace App\Http\Controllers;

use App\Models\Inbox;
use App\Models\Interacted;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class PasskitController extends Controller
{

    public $target = '/Applicants/';

    public function addMember(Request $request)
    {
        if ($request->file('file')) {
            return $this->storeImage($request);
        }

        $dto = $request->all();

        $body = [
            'programId' => env('COMPETITION_PROGRAM_ID'),
            'tierId' => 'bronze',
            'person' => [
                'displayName' => $dto['data']['displayName'],
                'emailAddress' => $dto['data']['email']
            ]
        ];

        try {
            $client = new Client();

            $client->request(
                'POST',
                env('PASS_KIT_CREATE_MEMBER_URL'),
                [
                    'body' => json_encode($body), 'headers' => [
                        'authorization' => $dto['token'],
                        'content-type' => 'application/json'
                    ]
                ]
            );

            return $this->saveMember($request);
        } catch (\Throwable $th) {
            return  $th;
        }
    }


    public function saveMember(Request $request)
    {
        $dto = $request->all();

        $dto['data'] = json_encode($dto['data']);

        Interacted::create($dto);

        return Inbox::create($dto);
    }


    public function storeImage(Request $request)
    {
        $dto = $request->all();

        $inbox = Inbox::find($dto['inbox_id']);

        $inbox->data = json_decode($inbox->data);

        $url = FileController::save_and_get_url($request, $this->target);

        $inbox->data->uri =  $url;

        $inbox->data = json_encode($inbox->data);

        $inbox->save();

        $inbox->data = json_decode($inbox->data);

        return  $inbox;
    }
}
