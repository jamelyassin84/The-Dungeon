<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('home_section1s', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->boolean('isSectionEnabled');
            $table->boolean('isButtonEnabled');
            $table->string('isTextsEnabled');
            $table->string('buttonText')->nullable();
            $table->string('buttonColor')->nullable();
            $table->string('title')->nullable();
            $table->string('body')->nullable();
            $table->string('uri');
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_section1s');
    }
};
