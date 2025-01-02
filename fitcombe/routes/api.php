<?php

use App\Http\Controllers\Api\BarangController;
use App\Http\Controllers\Api\BarangPromoController;
use App\Http\Controllers\Api\BarangTerlarisController;
use App\Http\Controllers\Api\DetailBarangController;
use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('api_key')->group(function () {
    Route::apiResource('/barangs', BarangController::class);
    Route::apiResource('/barang-promos', BarangPromoController::class);
    Route::apiResource('/barang-terlaris', BarangTerlarisController::class);
});