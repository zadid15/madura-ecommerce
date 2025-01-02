<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kategori extends Model
{
    //
    protected $table = 'kategoris';
    protected $fillable = [
        'nama_kategori',
    ];

    public function barang(): HasMany
    {
        return $this->hasMany(Barang::class);
    }

    public function barangPromo(): HasMany
    {
        return $this->hasMany(BarangPromo::class);
    }

    public function barangTerlaris(): HasMany
    {
        return $this->hasMany(BarangTerlaris::class);
    }
}
