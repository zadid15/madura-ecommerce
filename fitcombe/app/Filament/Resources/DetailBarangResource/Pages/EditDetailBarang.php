<?php

namespace App\Filament\Resources\DetailBarangResource\Pages;

use App\Filament\Resources\DetailBarangResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDetailBarang extends EditRecord
{
    protected static string $resource = DetailBarangResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
