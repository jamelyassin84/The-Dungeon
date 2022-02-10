<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('address');
            $table->string('email');
            $table->string('state');

            $table->string('contact');
            $table->string('googleMapURI');
            $table->string('uri');
        });
    }

    public function down()
    {
        Schema::dropIfExists('locations');
    }
};
