<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DetailBarangResource\Pages;
use App\Filament\Resources\DetailBarangResource\RelationManagers;
use App\Models\DetailBarang;
use Faker\Core\File;
use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DetailBarangResource extends Resource
{
    protected static ?string $model = DetailBarang::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function getLabel(): string
    {
        return 'Detail Barang'; // Ubah label di sini
    }

    public static function getPluralLabel(): string
    {
        return 'Detail Barang'; // Ubah label jamak di sini
    }

    public static function getNavigationLabel(): string
    {
        return static::getLabel(); // Label untuk sidebar
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                // Pilihan untuk barang
                Select::make('barang_id')
                    ->relationship('barang', 'nama_barang')
                    ->nullable()
                    ->reactive()
                    ->afterStateUpdated(fn($state, callable $set) => $set('barang_promo_id', null))
                    ->afterStateUpdated(fn($state, callable $set) => $set('barang_terlaris_id', null)),

                Select::make('barang_promo_id')
                    ->relationship('barangPromo', 'nama_barang')
                    ->nullable()
                    ->reactive()
                    ->afterStateUpdated(fn($state, callable $set) => $set('barang_id', null))
                    ->afterStateUpdated(fn($state, callable $set) => $set('barang_terlaris_id', null)),

                Select::make('barang_terlaris_id')
                    ->relationship('barangTerlaris', 'nama_barang')
                    ->nullable()
                    ->reactive()
                    ->afterStateUpdated(fn($state, callable $set) => $set('barang_id', null))
                    ->afterStateUpdated(fn($state, callable $set) => $set('barang_promo_id', null)),

                TextInput::make('detail_barang'),

                TextInput::make('jumlah_terjual'),

                TextInput::make('rating'),

                Repeater::make('variantPhotos')
                    ->relationship('variantPhotos')
                    ->schema([
                        FileUpload::make('variant_photo')
                            ->required(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('barang.nama_barang')
                    ->label('Nama Barang')
                    ->getStateUsing(function ($record) {
                        if ($record->barangTerlaris) {
                            return $record->barangTerlaris->nama_barang; // Prioritas 1: Barang Terlaris
                        } elseif ($record->barangPromo) {
                            return $record->barangPromo->nama_barang; // Prioritas 2: Barang Promo
                        } elseif ($record->barang) {
                            return $record->barang->nama_barang; // Prioritas 3: Barang
                        } else {
                            return 'Tidak Ada';
                        }
                    }),
                TextColumn::make('jumlah_terjual'),
                
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDetailBarangs::route('/'),
            'create' => Pages\CreateDetailBarang::route('/create'),
            'edit' => Pages\EditDetailBarang::route('/{record}/edit'),
        ];
    }
}
