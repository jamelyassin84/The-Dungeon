<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('home_slider_images', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('uri');
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_slider_images');
    }
};
