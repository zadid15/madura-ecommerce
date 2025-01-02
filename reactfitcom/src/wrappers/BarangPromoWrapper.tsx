import { Link } from "react-router-dom";
import PromoBarangCard from "../components/PromoBarangCard";
import { BarangPromo } from "../types/type";

interface BarangPromoWrapperProps {
    barangPromos: BarangPromo[]
}

export default function BarangPromoWrapper({ barangPromos }: BarangPromoWrapperProps) {
    return (
        <div className="mt-5">
            <div className="promo-dekstop mx-auto width-promo rounded-5 shadow-sm border border-2 border-dark">
                <h1 className="pt-3 pb-3 w-full text-center text-white d-lg-none bungee-tint-regular w posi">
                    Promo Merdeka
                </h1>
                <div className="d-flex flex-wrap justify-content-center text-center align-items-center gap-4 custom-gap">
                    <h1 className="d-none d-lg-inline-block bungee-tint-regular w ">
                        Promo Merdeka
                    </h1>
                    {barangPromos.map((barangPromo) => (
                        <Link style={{ textDecoration: 'none' }} key={barangPromo.id} to={`/barang/${barangPromo.slug}?type=promo`}>
                            <PromoBarangCard barangPromo={barangPromo} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}