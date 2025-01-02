<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DetailTransaksi extends Model
{
    //
    protected $table = 'detail_transaksis';
    protected $fillable = [
        'transaksi_id',
        'barang_id',
        'jumlah',
        'subtotal'
    ];

    public function barang(): BelongsTo
    {
        return $this->belongsTo(Barang::class);
    }
}
