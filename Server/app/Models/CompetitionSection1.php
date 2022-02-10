<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionSection1 extends Model
{
    use HasFactory;

    protected $fillable = [
        'isSectionEnabled',

        'competitionDate',
        'category',
        'categoryType',
        'hostedBy',
        'levels',
        'deadline',
        'date',
        'time',

        'uri',
    ];
}
