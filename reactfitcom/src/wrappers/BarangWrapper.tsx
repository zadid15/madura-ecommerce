import BarangCard from "../components/BarangCard";
import { Link } from "react-router-dom";
import { Barang } from "../types/type";

interface BarangWrapperProps {
    barangs: Barang[];
}
export default function BarangWrapper({ barangs }: BarangWrapperProps) {

    return (
        <div className="mt-1 mt-lg-3">
            <div className="d-flex flex-wrap justify-content-center text-center custom-gap">
                {barangs.map((barang) => (
                    <Link style={{ textDecoration: 'none' }} key={barang.id} to={`/barang/${barang.slug}?type=barang`}>
                        <BarangCard barang={barang}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}