<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('competition_section2s', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->boolean('isSectionEnabled');

            $table->string('smallTitle')->nullable();
            $table->string('largeTitle')->nullable();
            $table->string('callToActionTitle')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('competition_section2s');
    }
};
