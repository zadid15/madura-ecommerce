<?php

namespace App\Filament\Resources\DetailBarangResource\Pages;

use App\Filament\Resources\DetailBarangResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDetailBarangs extends ListRecords
{
    protected static string $resource = DetailBarangResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
