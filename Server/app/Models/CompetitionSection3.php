<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionSection3 extends Model
{
    use HasFactory;

    protected $fillable = [
        'isSectionEnabled',
        'title',
        'body',
        'uri',
    ];

    protected $casts = [
        'isSectionEnabled' => 'boolean',
    ];
}
