<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Transaksi extends Model
{
    //
    protected $table = 'transaksis';
    protected $fillable = [
        'tanggal_transaksi',
        'pelanggan_id',
    ];

    public function detailTransaksi(): HasMany
    {
        return $this->hasMany(DetailTransaksi::class);
    }
}
