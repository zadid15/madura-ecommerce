<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\BarangTerlarisResource;
use App\Models\BarangTerlaris;
use Illuminate\Http\Request;

class BarangTerlarisController extends Controller
{
    //
    public function index()
    {
        // Ambil semua barang beserta detail dan foto variannya
        $barangs = BarangTerlaris::with('detailBarang.variantPhotos')->get();
        return BarangTerlarisResource::collection($barangs);
    }

    public function show($slug)
    {
        // Ambil barang beserta detail dan foto variannya menggunakan slug
        $barang = BarangTerlaris::with(['detailBarang.variantPhotos'])->where('slug', $slug)->firstOrFail();
        return new BarangTerlarisResource($barang);
    }
}
