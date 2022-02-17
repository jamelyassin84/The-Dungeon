<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('server')->nullable();
            $table->boolean('website')->nullable();
            $table->boolean('admin')->nullable();
        });
    }


    public function down()
    {
        Schema::dropIfExists('servers');
    }
};
