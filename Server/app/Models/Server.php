<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    use HasFactory;


    protected $fillable = [
        'server',
        'website',
        'admin',
    ];


    protected $casts = [
        'server' => 'boolean',
        'website' => 'boolean',
        'admin' => 'boolean',
    ];
}
