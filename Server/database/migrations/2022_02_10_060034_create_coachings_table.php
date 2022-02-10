<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('coachings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->integer('uri');
            $table->integer('price');
        });
    }

    public function down()
    {
        Schema::dropIfExists('coachings');
    }
};
