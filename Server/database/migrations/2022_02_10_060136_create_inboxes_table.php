<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('inboxes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('email')->nullable();
            $table->string('message')->nullable();
            $table->string('data', 999);

            $table->boolean('isRead')->nullable();
            $table->boolean('isAddedToParticipants')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inboxes');
    }
};
