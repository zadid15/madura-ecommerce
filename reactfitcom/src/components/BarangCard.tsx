import { Barang } from "../types/type";

export default function BarangCard({ barang }: BarangCardProps) {
    const baseURL = "http://localhost:8000/storage";
    return (
        <div className="text-decoration-none">
            <div
                className="product-item custom-card bg-white rounded-4 shadow-sm overflow-hidden custom-border-color-dark zoom-effect"
                data-price={barang.harga}
                data-stock={barang.stok}
            >
                <img
                    src={`${baseURL}/${barang.photo}`}
                    alt="card-image"
                    className="h-50 mb-3"
                />
                <div className="p-2">
                    <p className="card-text-title text-title fw-semibold text-dark">
                        {barang.nama_barang}
                    </p>
                    <p className="card-text-price fw-normal">Rp {barang.harga.toLocaleString("id-ID")}</p>
                    <p className="card-text-stock fw-normal">Sisa Stock {barang.stok}</p>
                </div>
            </div>
        </div>
    );
}

interface BarangCardProps {
    barang: Barang
}