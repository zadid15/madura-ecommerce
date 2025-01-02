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
        Schema::create('detail_barangs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('barang_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('barang_promo_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('barang_terlaris_id')->nullable()->constrained()->cascadeOnDelete();
            $table->text('detail_barang');
            $table->integer('jumlah_terjual');
            $table->decimal('rating', 2, 1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('variant_photos', function (Blueprint $table) {
            $table->dropForeign(['detail_barang_id']);
        });

        Schema::dropIfExists('detail_barangs');
    }
};
