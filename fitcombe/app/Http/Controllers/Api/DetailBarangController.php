<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\DetailBarangResource;
use App\Models\DetailBarang;
use Illuminate\Http\Request;

class DetailBarangController extends Controller
{
    //
    public function index()
    {
        $detailBarangs = DetailBarang::with('variantPhotos')->get();
        return DetailBarangResource::collection($detailBarangs);
    }

    public function show($slug)
    {
        $detailBarang = DetailBarang::with('variantPhotos')->where('slug', $slug)->first();

        if ($detailBarang) {
            return new DetailBarangResource($detailBarang);
        }

        return response()->json(['message' => 'DetailBarang not found'], 404);
    }
}
