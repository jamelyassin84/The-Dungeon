<?php

namespace App\Http\Controllers;

class HelperController extends Controller
{
    public static function tooBooleanNumber(String $value): int
    {
        if ($value === 'true') {
            return 1;
        }
        return 0;
    }
}
