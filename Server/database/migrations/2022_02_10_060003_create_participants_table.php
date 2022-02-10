<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('participants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('name');
            $table->string('age')->nullable();
            $table->string('sex')->nullable();
            $table->string('uri');
        });
    }

    public function down()
    {
        Schema::dropIfExists('participants');
    }
};
