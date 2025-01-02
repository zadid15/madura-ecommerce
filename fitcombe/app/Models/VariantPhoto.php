<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VariantPhoto extends Model
{
    //
    protected $table = 'variant_photos';

    protected $fillable = [
        'barang_promo_id',
        'barang_terlaris_id',
        'barang_id',
        'variant_photo',
    ];

    public function detailBarang(): BelongsTo
    {
        return $this->belongsTo(DetailBarang::class, 'detail_barang_id');
    }

    public function barang(): BelongsTo
    {
        return $this->belongsTo(Barang::class);
    }
}
