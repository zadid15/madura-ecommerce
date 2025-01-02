import { BarangPromo } from "../types/type";

export default function PromoBarangCard({barangPromo}: BarangPromoCardProps) {
    const baseURL = "http://localhost:8000/storage";
    return (
        <div className="text-decoration-none">
            <div
                className="product-item custom-card-promo bg-white rounded-4 shadow-sm overflow-hidden custom-border-color-dark zoom-effect"
                data-price={barangPromo.harga}
                data-stock={barangPromo.stok}
            >
                <img
                    src={`${baseURL}/${barangPromo.photo}`}
                    alt="card-image"
                    className="h-50 mb-3 mt-3"
                />
                <div className="p-2">
                    <p className="card-text-title-promo text-title fw-semibold text-dark">
                        {barangPromo.nama_barang}
                    </p>
                    <p className="card-text-price-line-through fw-semibold text-decoration-line-through">
                        Rp {barangPromo.promo.toLocaleString("id-ID")}
                    </p>
                    <p className="card-text-price-promo fw-normal">Rp {barangPromo.harga.toLocaleString("id-ID")}</p>
                    <p className="card-text-stock-promo fw-normal">Sisa Stock: {barangPromo.stok}</p>
                </div>
            </div>
        </div>
    );
}

interface BarangPromoCardProps {
    barangPromo: BarangPromo;
}