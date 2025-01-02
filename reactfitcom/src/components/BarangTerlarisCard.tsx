import { BarangTerlaris } from "../types/type"

export default function BarangTerlarisCard({ barangTerlaris }: BarangTerlarisCardProps) {
    const baseURL = "http://localhost:8000/storage";
    return (
        <div className="text-decoration-none">
            <div
                className="product-item custom-third-line-product bg-white rounded-4 shadow-sm overflow-hidden custom-border-color-dark zoom-effect"
                data-price={barangTerlaris.harga}
                data-stock={barangTerlaris.stok}
            >
                <img
                    src={`${baseURL}/${barangTerlaris.photo}`}
                    alt="card-image"
                    className="h-50 mb-3 mt-3"
                />
                <div className="p-2">
                    <p className="card-text-title-third-line-product text-title fw-semibold text-dark">
                        {barangTerlaris.nama_barang}
                    </p>
                    <p className="card-text-price-third-line-product fw-normal">
                        Rp {barangTerlaris.harga.toLocaleString("id-ID")}
                    </p>
                    <p className="card-text-third-line-product fw-normal">
                        Sisa Stock: {barangTerlaris.stok}
                    </p>
                </div>
            </div>
        </div>
    )
}

interface BarangTerlarisCardProps {
    barangTerlaris: BarangTerlaris
}