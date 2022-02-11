<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('registration_fields', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('fieldName');

            $table->string('value')->nullable();

            $table->integer('order');
        });
    }

    public function down()
    {
        Schema::dropIfExists('registration_fields');
    }
};
