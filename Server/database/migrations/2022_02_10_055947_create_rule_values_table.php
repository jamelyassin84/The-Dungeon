<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('rule_values', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('isSectionEnabled');
            $table->string('name');
            $table->string('data', 999);
        });
    }

    public function down()
    {
        Schema::dropIfExists('rule_values');
    }
};
