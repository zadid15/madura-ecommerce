<?php

namespace App\Filament\Resources\BarangTerlarisResource\Pages;

use App\Filament\Resources\BarangTerlarisResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBarangTerlaris extends ListRecords
{
    protected static string $resource = BarangTerlarisResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
