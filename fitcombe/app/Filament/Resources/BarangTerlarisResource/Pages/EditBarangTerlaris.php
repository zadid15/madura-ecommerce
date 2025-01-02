<?php

namespace App\Filament\Resources\BarangTerlarisResource\Pages;

use App\Filament\Resources\BarangTerlarisResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBarangTerlaris extends EditRecord
{
    protected static string $resource = BarangTerlarisResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
