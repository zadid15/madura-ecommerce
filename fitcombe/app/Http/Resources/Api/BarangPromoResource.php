<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BarangPromoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nama_barang' => $this->nama_barang,
            'harga' => $this->harga,
            'stok' => $this->stok,
            'photo' => $this->photo,
            'slug' => $this->slug,
            'promo' => $this->promo,
            'detailBarang' => DetailBarangResource::collection($this->whenLoaded('detailBarang'))
        ];
    }
}
