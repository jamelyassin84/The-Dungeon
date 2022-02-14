<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('home_section4s', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->boolean('isSectionEnabled')->nullable();
            $table->boolean('isPricingEnabled')->nullable();

            $table->string('title')->nullable();
            $table->string('notice')->nullable();
            $table->string('body')->nullable();

            $table->string('uri')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_section4s');
    }
};
