<?php

namespace App\Filament\Resources\BarangPromoResource\Pages;

use App\Filament\Resources\BarangPromoResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBarangPromos extends ListRecords
{
    protected static string $resource = BarangPromoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
