<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class DetailBarang extends Model
{
    protected $table = 'detail_barangs';
    protected $fillable = [
        'id_detail_barang',
        'barang_id',
        'barang_terlaris_id',
        'detail_barang',
        'rating',
        'jumlah_terjual',
    ];

    public function barang(): BelongsTo
    {
        return $this->belongsTo(Barang::class);
    }

    public function barangPromo(): BelongsTo
    {
        return $this->belongsTo(BarangPromo::class);
    }

    public function barangTerlaris(): BelongsTo
    {
        return $this->belongsTo(BarangTerlaris::class);
    }

    public function variantPhotos(): HasMany
    {
        return $this->hasMany(VariantPhoto::class, 'detail_barang_id');
    }
}
