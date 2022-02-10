<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('home_pricings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('duration');
            $table->string('price');
            $table->string('billInterval');
            $table->string('summary');
            $table->string('trialPeriod');
            $table->string('backgroundColor');
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_pricings');
    }
};
