<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BarangResource\Pages;
use App\Filament\Resources\BarangResource\RelationManagers;
use App\Models\Barang;
use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BarangResource extends Resource
{
    protected static ?string $model = Barang::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function getLabel(): string
    {
        return 'Barang'; // Ubah label di sini
    }

    public static function getPluralLabel(): string
    {
        return 'Barang'; // Ubah label jamak di sini
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
                TextInput::make('nama_barang')
                ->required()
                ->maxLength(255),

                TextInput::make('harga')
                ->required()
                ->maxLength(255),

                TextInput::make('stok')
                ->required()
                ->maxLength(255),

                Select::make('kategori_id')
                ->relationship('kategori', 'nama_kategori')
                ->required(),

                FileUpload::make('photo')
                ->image()
                ->maxSize(102400)
                ->required(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('nama_barang')
                ->searchable(),

                TextColumn::make('harga'),

                TextColumn::make('stok'),

                TextColumn::make('kategori.nama_kategori'),

                ImageColumn::make('photo'),
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
            'index' => Pages\ListBarangs::route('/'),
            'create' => Pages\CreateBarang::route('/create'),
            'edit' => Pages\EditBarang::route('/{record}/edit'),
        ];
    }
}
