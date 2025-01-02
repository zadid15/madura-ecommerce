export interface Barang {
    id: number;
    nama_barang: string;
    harga: number;
    stok: number;
    slug: string;
    photo: string;
    kategori: Kategori
    detailBarang: DetailBarang[];
}

export interface BarangTerlaris {
    id: number;
    nama_barang: string;
    harga: number;
    stok: number;
    slug: string;
    photo: string;
    kategori: Kategori
    detailBarang: DetailBarang[];
}

export interface BarangPromo{
    id: number;
    nama_barang: string;
    harga: number;
    promo: number;
    stok: number;
    slug: string;
    photo: string;
    kategori: Kategori
    detailBarang: DetailBarang[];
}

interface Kategori {
    id: number,
    nama_kategori: string;
}

interface DetailBarang {
    id: number;
    barang: Barang;
    rating: number;
    detail_barang: string;
    jumlah_terjual: number;
    variantPhotos: VariantPhoto[];
}

export interface VariantPhoto {
    id: number;
    variant_photo: string;
}