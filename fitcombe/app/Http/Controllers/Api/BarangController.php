<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\BarangResource;
use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function index()
    {
        // Ambil semua barang beserta detail dan foto variannya
        $barangs = Barang::with('detailBarang.variantPhotos')->get();
        return BarangResource::collection($barangs);
    }

    public function show($slug)
    {
        // Ambil barang beserta detail dan foto variannya menggunakan slug
        $barang = Barang::with(['detailBarang.variantPhotos'])->where('slug', $slug)->firstOrFail();
        return new BarangResource($barang);
    }
}
