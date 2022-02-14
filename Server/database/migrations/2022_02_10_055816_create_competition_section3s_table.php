<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('competition_section3s', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->boolean('isSectionEnabled');

            $table->string('uri')->nullable();
            $table->string('title')->nullable();
            $table->string('body')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('competition_section3s');
    }
};
