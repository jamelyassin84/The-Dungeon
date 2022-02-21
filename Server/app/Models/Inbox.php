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
        'isRead',
        'isAddedToParticipants',
    ];

    protected $casts = [
        'isRead' => 'boolean',
        'isAddedToParticipants' => 'boolean',
    ];
}
