<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RuleValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'rule_id',
        'name',
    ];
}
