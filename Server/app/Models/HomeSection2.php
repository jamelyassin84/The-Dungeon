<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeSection2 extends Model
{
    use HasFactory;

    protected $fillable = [
        'isSectionEnabled',
        'smallTitle',
        'largeTitle',
        'callToActionTitle',
    ];
}
