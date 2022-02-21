<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inbox extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'message',
        'data',
    ];

    protected $casts = [
        'isSectionEnabled' => 'boolean',
        'isPricingEnabled' => 'boolean',
    ];
}
