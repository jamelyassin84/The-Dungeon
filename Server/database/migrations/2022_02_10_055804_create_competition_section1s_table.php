<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('competition_section1s', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->boolean('isSectionEnabled');

            $table->string('competitionDate')->nullable();
            $table->string('category')->nullable();
            $table->string('categoryType')->nullable();

            $table->string('hostedBy')->nullable();
            $table->string('levels')->nullable();
            $table->string('deadline')->nullable();

            $table->string('date')->nullable();
            $table->string('time')->nullable();

            $table->string('uri');
        });
    }

    public function down()
    {
        Schema::dropIfExists('competition_section1s');
    }
};
