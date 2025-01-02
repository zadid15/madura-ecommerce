<?php

namespace App\Filament\Resources\BarangPromoResource\Pages;

use App\Filament\Resources\BarangPromoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBarangPromo extends EditRecord
{
    protected static string $resource = BarangPromoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
