<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailBarangResource extends JsonResource
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
            'detail_barang' => $this->detail_barang,
            'jumlah_terjual' => $this->jumlah_terjual,
            'rating' => $this->rating,
            'barang' => BarangResource::collection($this->whenLoaded('barang')),
            'variantPhotos' => VariantPhotoResource::collection($this->whenLoaded('variantPhotos'))
        ];
    }
}


