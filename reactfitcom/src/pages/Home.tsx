import { useEffect, useState } from "react";
import BarangPromoWrapper from "../wrappers/BarangPromoWrapper";
import BarangWrapper from "../wrappers/BarangWrapper";
import { Barang, BarangPromo, BarangTerlaris } from "../types/type";
import axios from "axios";
import BarangTerlarisWrapper from "../wrappers/BarangTerlarisWrapper";

export default function Home() {

    const [barang, setBarang] = useState<Barang[]>([]);
    const [barangPromos, setBarangPromos] = useState<BarangPromo[]>([]);
    const [barangTerlaris, setBarangTerlaris] = useState<BarangTerlaris[]>([]);
    const [filteredBarang, setFilteredBarang] = useState<Barang[]>([]);
    const [filteredBarangPromos, setFilteredBarangPromos] = useState<BarangPromo[]>([]);
    const [filteredBarangTerlaris, setFilteredBarangTerlaris] = useState<BarangTerlaris[]>([]);
    const [priceFilter, setPriceFilter] = useState<string>("");
    const [stockFilter, setStockFilter] = useState<string>("");

    // Fetch data barang
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/barangs", {
                headers: {
                    "X-API-KEY": "shqiuhwwqdeqwndiu23",
                },
            })
            .then((response) => {
                setBarang(response.data.data);
                setFilteredBarang(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch barang promo data
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/barang-promos", {
                headers: {
                    "X-API-KEY": "shqiuhwwqdeqwndiu23",
                },
            })
            .then((response) => {
                setBarangPromos(response.data.data); // Simpan data barang promo
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Fetch barang terlaris data
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/barang-terlaris", {
                headers: {
                    "X-API-KEY": "shqiuhwwqdeqwndiu23",
                },
            })
            .then((response) => {
                setBarangTerlaris(response.data.data);
                setFilteredBarangTerlaris(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    useEffect(() => {
        let filtered = barang;

        // Filter by price
        if (priceFilter) {
            const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
            filtered = filtered.filter((barang) => {
                const price = barang.harga;
                return price >= minPrice && (maxPrice ? price < maxPrice : true);
            });
        }

        // Filter by stock
        if (stockFilter) {
            const [minStock, maxStock] = stockFilter.split("-").map(Number);
            filtered = filtered.filter((barang) => {
                const stock = barang.stok;
                return stock >= minStock && (maxStock ? stock < maxStock : true);
            });
        }

        setFilteredBarang(filtered);
    }, [priceFilter, stockFilter, barang]);

    useEffect(() => {
        let filteredPromos = barangPromos;

        // Filter by price
        if (priceFilter) {
            const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
            filteredPromos = filteredPromos.filter((promo) => {
                const price = promo.harga;
                return price >= minPrice && (maxPrice ? price < maxPrice : true);
            });
        }

        // Filter by stock
        if (stockFilter) {
            const [minStock, maxStock] = stockFilter.split("-").map(Number);
            filteredPromos = filteredPromos.filter((promo) => {
                const stock = promo.stok;
                return stock >= minStock && (maxStock ? stock < maxStock : true);
            });
        }

        setFilteredBarangPromos(filteredPromos); // Set barang promo yang sudah difilter
    }, [priceFilter, stockFilter, barangPromos]);

    useEffect(() => {
        let filtered = barangTerlaris;

        // Filter by price
        if (priceFilter) {
            const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
            filtered = filtered.filter((barang) => {
                const price = barang.harga;
                return price >= minPrice && (maxPrice ? price < maxPrice : true);
            });
        }

        // Filter by stock
        if (stockFilter) {
            const [minStock, maxStock] = stockFilter.split("-").map(Number);
            filtered = filtered.filter((barang) => {
                const stock = barang.stok;
                return stock >= minStock && (maxStock ? stock < maxStock : true);
            });
        }

        setFilteredBarangTerlaris(filtered);
    }, [priceFilter, stockFilter, barangTerlaris]);


    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tokmad</title>
            {/* Icon */}
            <link rel="icon" href="../images/icon/icon.PNG" />
            {/* CDN Links CSS */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            />
            {/* My CSS */}
            <link rel="stylesheet" href="css/main.css" />
            <link rel="stylesheet" href="css/details.css" />
            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
                rel="stylesheet"
            />
            {/* Fonts 2 */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bungee+Tint&family=Outfit:wght@100..900&display=swap"
                rel="stylesheet"
            />
            {/* jQuery */}
            {/* Header Start */}
            <div className="shadow-header custom-height-header fixed-top d-flex justify-content-center">
                <img src="/images/icon/banner.PNG" alt="header-tokmad" />
            </div>
            {/* Header End */}
            {/* Filter Start */}
            <div className="mt-filter">
                <div className="d-flex justify-content-center mb-filter">
                    {/* Filter by Price */}
                    <select
                        id="price-filter"
                        className="p-2 custom-border-color-dark rounded-5 mx-3 mx-sm-3 mx-lg-5 text-black fw-medium font-size-filter shadow-sm"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="">Filter By Price</option>
                        <option value="0-5000">Di Bawah 5000</option>
                        <option value="5000-10000">5000 - 10000</option>
                        <option value="10000-20000">10000 - 20000</option>
                        <option value="20000-50000">Di Atas 20000</option>
                    </select>
                    {/* Filter by Stock */}
                    <select
                        id="stock-filter"
                        className="p-2 custom-border-color-dark rounded-5 mx-3 mx-sm-3 mx-lg-5 text-black fw-medium font-size-filter shadow-sm"
                        value={stockFilter}
                        onChange={(e) => setStockFilter(e.target.value)}
                    >
                        <option value="">Filter By Stock</option>
                        <option value="0-50">0 - 50</option>
                        <option value="51-100">51 - 100</option>
                        <option value="101-200">101 - 200</option>
                        <option value="201-500">Di Atas 200</option>
                    </select>
                </div>
            </div>
            {/* Filter End */}
            {/* First Line Product Start */}
            <BarangWrapper barangs={filteredBarang} />
            {/* First Line Product End */}
            {/* Second Line Product Start */}
            <BarangPromoWrapper barangPromos={filteredBarangPromos} />
            {/* Second Line Product End */}
            {/* Third Line Product Start */}
            <BarangTerlarisWrapper barangTerlaris={filteredBarangTerlaris} />
            {/* Third Line Product End */}
            {/* Bootstrap JS */}
        </>

    );
}