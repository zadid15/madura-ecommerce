import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { VariantPhoto } from "../types/type";

function DetailsBarang() {
    const baseURL = "http://localhost:8000/storage";
    const { slug } = useParams();
    const [type, setType] = useState<string | null>(null);
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const typeParam = queryParams.get("type");
        setType(typeParam); // Set type dari query string

        const fetchData = async () => {
            setLoading(true);
            try {
                let response;

                // Set headers untuk permintaan API
                const headers = {
                    "Accept": "application/json",
                    "X-API-KEY": "shqiuhwwqdeqwndiu23", // Ganti dengan token API yang valid
                };

                if (type === "barang") {
                    response = await axios.get(`http://127.0.0.1:8000/api/barangs/${slug}`, { headers });
                } else if (type === "promo") {
                    response = await axios.get(`http://127.0.0.1:8000/api/barang-promos/${slug}`, { headers });
                } else if (type === "terlaris") {
                    response = await axios.get(`http://127.0.0.1:8000/api/barang-terlaris/${slug}`, { headers });
                } else {
                    throw new Error("Tipe data tidak valid");
                }

                setData(response.data.data);
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    const errorMessage = error.response?.data.message || error.message;
                    console.error("Error fetching data:", errorMessage); // Log error detail
                    setError("Gagal mengambil data dari server.");
                } else if (error instanceof Error) {
                    console.error("An unknown error occurred:", error);
                    setError("An unknown error occurred.");
                } else {
                    console.error("An unknown error occurred:", error);
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        if (type) {
            fetchData();
        }
    }, [slug, type]);

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div>{error}</div>;
    }

    console.log(data);


    return (
        <div className="bg-light-gray">
            {/* Header Start */}
            <div className="shadow-header custom-height-header fixed-top d-flex justify-content-center shadow-lg">
                <img src="../images/icon/banner.PNG" alt="header-tokmad" />
            </div>
            {/* Header End */}

            {/* Main Start */}
            <Link to="/" className="d-inline-flex align-items-center m-icon">
                <img src="../images/icon/back.png" alt="back" className="w-50" />
            </Link>
            <div className="d-flex flex-wrap justify-content-center">
                {/* Kolom Kiri */}
                <div className="w-full w-col-left mb-4">
                    <div className="bg-white rounded-4 shadow-sm p-8 custom-border-color-dark shadow-sm">
                        <h2 className="text-2xl pt-4 text-center mb-1 mb-md-2">
                            {data.nama_barang}
                        </h2>
                        <div className="d-flex justify-content-center mb-5">
                            <img
                                className="img-product w-50"
                                src={`${baseURL}/${data.photo}`} />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center gap-3 mt-3">
                        {data.detailBarang[0].variantPhotos.map((photo: VariantPhoto) => (
                            <img
                                key={photo.id}
                                src={`${baseURL}/${photo.variant_photo}`}
                                alt="Variant Photo"
                                className="zoom-effect w-25 h-25 img-variant px-2 bg-white custom-border-color-dark rounded-3 shadow-sm"
                            />
                        ))}
                    </div>
                </div>

                {/* Kolom Tengah */}
                <div className="w-full w-col-center mb-4">
                    <div className="bg-white shadow-sm p-4 rounded-4 custom-border-color-dark shadow-sm">
                        <p className="mb-2">
                            <span className="fw-semibold text-base text-lg text-xl">Harga:</span>{" "}
                            Rp {data.harga.toLocaleString("id-ID")}
                        </p>
                        <p className="mb-2">
                            <span className="fw-semibold text-base text-lg text-xl">Stok Tersisa:</span>{" "}
                            {data.stok}
                        </p>
                        <p className="mb-2 text-base text-lg text-xl">
                            <span className="fw-semibold">Detail Barang:</span>{" "}
                            {data.detailBarang[0].detail_barang}
                        </p>
                        <p className="mb-2 text-base text-lg text-xl">
                            <span className="fw-semibold">Jumlah Terjual:</span>{" "}
                            {data.detailBarang[0].jumlah_terjual}
                        </p>
                        <p className="mb-2 text-base text-lg text-xl">
                            <span className="fw-semibold">Rating:</span>{" "}
                            {data.detailBarang[0].rating}
                        </p>
                    </div>
                </div>

                {/* Kolom Kanan */}
                <div className="w-full w-col-right">
                    <div className="bg-white p-4 rounded-4 shadow-sm custom-border-color-dark shadow-sm">
                        <p className="mb-2">
                            <span className="fw-semibold text-base text-lg text-xl">Jumlah Pesanan:</span>
                        </p>
                        <input
                            type="number"
                            className="form-control mb-4 border-primary-bright text-base text-lg text-xl"
                            placeholder="Jumlah"
                        />
                        <p className="mb-2">
                            <span className="fw-semibold text-base text-lg text-xl">Catatan:</span>
                        </p>
                        <textarea
                            className="form-control mb-4 border-primary-bright text-base text-lg text-xl"
                            placeholder="Tambahkan catatan di sini"
                        ></textarea>
                        <button className="bg-green text-white border border-0 p-2 rounded-3 shadow-lg btn-dark">
                            Pesan Sekarang!
                        </button>
                    </div>
                </div>
            </div>
            {/* Main End */}
        </div>
    );



}

export default DetailsBarang;
