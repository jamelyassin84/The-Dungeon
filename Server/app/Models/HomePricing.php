<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomePricing extends Model
{
    use HasFactory;

    protected $fillable = [
        'duration',
        'price',
        'billInterval',
        'summary',
        'trialPeriod',
        'backgroundColor',
    ];
}
