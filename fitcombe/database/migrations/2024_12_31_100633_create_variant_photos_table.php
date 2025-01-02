<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('variant_photos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('detail_barang_id')->constrained()->cascadeOnDelete();
            $table->foreignId('barang_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('barang_promo_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('barang_terlaris_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('variant_photo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('variant_photos');
    }
};
