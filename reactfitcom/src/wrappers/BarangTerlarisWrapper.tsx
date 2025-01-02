import { Link } from "react-router-dom";
import { BarangTerlaris } from "../types/type";
import BarangTerlarisCard from "../components/BarangTerlarisCard";

interface BarangTerlarisWrapperProps {
    barangTerlaris: BarangTerlaris[]
}
export default function BarangTerlarisWrapper({ barangTerlaris }: BarangTerlarisWrapperProps) {
    return (
        <div className="mt-5">
            <div className="d-flex flex-wrap text-center justify-content-center gap-4 custom-gap">
                {barangTerlaris.map((barangTerlaris) => (
                    <Link style={{ textDecoration: 'none' }} key={barangTerlaris.id} to={`/barang/${barangTerlaris.slug}?type=terlaris`}>
                        <BarangTerlarisCard barangTerlaris={barangTerlaris} />
                    </Link>
                ))}
            </div>
        </div>
    )
}