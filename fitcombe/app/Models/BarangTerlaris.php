<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class BarangTerlaris extends Model
{
    //
    protected $table = 'barang_terlaris';
    protected $fillable = [
        'nama_barang',
        'harga',
        'stok',
        'slug',
        'photo',
        'kategori_id',
    ];

    public function setNamaBarangAttribute($value)
    {
        $this->attributes['nama_barang'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
    public function kategori(): BelongsTo
    {
        return $this->belongsTo(Kategori::class);
    }

    public function detailBarang(): HasMany
    {
        return $this->hasMany(DetailBarang::class, 'barang_terlaris_id');
    }

    public function variantPhotos(): HasMany
    {
        return $this->hasMany(VariantPhoto::class, 'barang_terlaris_id');
    }
}
