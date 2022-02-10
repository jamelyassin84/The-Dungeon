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

            $table->integer('rule_id')
                ->foreignIdFor(Rule::class)
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->string('name');
        });
    }

    public function down()
    {
        Schema::dropIfExists('rule_values');
    }
};
