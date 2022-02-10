<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeSection1 extends Model
{
    use HasFactory;

    protected $fillable = [
        'isSectionEnabled',
        'isButtonEnabled',
        'isTextsEnabled',
        'buttonText',
        'buttonColor',
        'title',
        'body',
        'uri',
    ];
}
