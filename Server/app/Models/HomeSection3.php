<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeSection3 extends Model
{
    use HasFactory;

    protected $fillable = [
        'isSectionEnabled',
        'isSliderEnabled',
        'title',
        'body',
    ];

    protected $casts = [
        'isSectionEnabled' => 'boolean',
        'isSliderEnabled' => 'boolean',
    ];
}
