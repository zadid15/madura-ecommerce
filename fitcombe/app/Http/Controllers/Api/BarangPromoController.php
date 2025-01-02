<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\BarangPromoResource;
use App\Models\BarangPromo;
use Illuminate\Http\Request;

class BarangPromoController extends Controller
{
    //
    public function index()
    {
        // Ambil semua barang beserta detail dan foto variannya
        $barangs = BarangPromo::with('detailBarang.variantPhotos')->get();
        return BarangPromoResource::collection($barangs);
    }

    public function show($slug)
    {
        // Ambil barang beserta detail dan foto variannya menggunakan slug
        $barang = BarangPromo::with(['detailBarang.variantPhotos'])->where('slug', $slug)->firstOrFail();
        return new BarangPromoResource($barang);
    }
}
