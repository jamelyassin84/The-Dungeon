<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionSection4 extends Model
{
    use HasFactory;

    protected $fillable = [
        'isSectionEnabled',
        'isParticipantsEnabled',

        'title',
        'body',
        'uri',
    ];

    protected $casts = [
        'isSectionEnabled' => 'boolean',
        'isParticipantsEnabled' => 'boolean',
    ];
}
