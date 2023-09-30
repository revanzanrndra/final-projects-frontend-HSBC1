import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import Product from "../components/Product.jsx";
import kategoriHeader from "../assets/koleksi1.jpg";

function Kategori() {
    const [products, setProducts] = useState([])

    axios
        .get("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(function (response) {
            setProducts(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="my-8 px-6">
        <div className="pt-5 xl:block hidden text-gray-400">
            <div className="grid justify-self-auto">
            <ol className="flex text-xs gap-2 flex-row text-cGray pl-72">
                <li className="underline">
                <a href="#">BERANDA UNIQLO </a>
                </li>
                <li>/</li>
                <li className="underline">
                <a href="#">WANITA </a>
                </li>
                <li>/</li>
                <li>
                <a href="#">KOLEKSI ATASAN </a>
                </li>
            </ol>
            </div>
        </div>
        <div className="xl:px-32 text-2xl font-bold">
            <div className="bg-white pt-2">
            <div className="border-b-2  border-t border-zinc-200 pb-6 xl:border-none">
                <div className="w-full xl:hidden">
                <img src="assets/koleksi1.jpg" className="w-5/6" />
                </div>
                <div className="justify-self-auto pl-72 hidden xl:block pt-12">
                <h1 className="">KOLEKSI ATASAN</h1>
                </div>
            </div>
            </div>
        </div>
        <nav className="pt-2 bg-slate-100 xl:flex justify-center xl:bg-inherit text-xl font-bold">
            <ul className="flex border-slate-300 border-t 2xl:items-center xl:border-none">
            <li className="flex justify-center items-center border-r border-slate-300 h-12 w-full bg-white xl:border-none 2xl:px-24 xl:px-12">
                <a className="">WANITA</a>
            </li>
            <li className="flex justify-center items-center border-r border-b border-slate-300  h-12 w-full xl:border-none 2xl:px-24 xl:px-12 text-slate-400">
                <a href="#">PRIA </a>
            </li>
            <li className="flex justify-center items-center border-r border-b border-slate-300  h-12 w-full xl:border-none 2xl:px-24 xl:px-12 text-slate-400">
                <a href="#">ANAK </a>
            </li>
            <li className="flex justify-center items-center border-r border-b border-slate-300  h-12 w-full xl:border-none 2xl:px-24 xl:px-12 text-slate-400 ">
                <a href="#">BAYI </a>
            </li>
            </ul>
        </nav>
        <div className="px-52 hidden xl:block ">
            <div className="pl-56 pr-56">
            <div className="bg-gray-300 py-[1px] " />
            </div>
        </div>
        <div className="pt-3 font-bold text-xl">
            <div className="flex px-3 text-xl xl:hidden">
            <h1>KOLEKSI ATASAN</h1>
            </div>
            <div className="xl:px-10">
            <div className="hidden xl:grid justify-items-center xl:px-96">
                <img src={kategoriHeader} className="h-52" />
            </div>
            </div>
        </div>
        <div className="pt-3 xl:order-1 xl:hidden font-bold">
            <ul className="flex border-y border-slate-300 xl:border-none text-sm">
            <li className="flex items-center px-3 border-r border-slate-300 h-12 w-full bg-white 2xl:border-none ">
                <a>
                HASIL: <span className="text-lg">221</span> PRODUK
                </a>
            </li>
            <li className="flex items-center px-3 border-r border-slate-300 h-12 w-2/5 xl:border-none">
                <a href="#">TAMPILKAN </a>
            </li>
            <li className="flex items-center px-3 border-r border-slate-300 h-12 w-2/5 xl:border-none">
                <a href="#">FILTER </a>
            </li>
            </ul>
        </div>
        <div className="flex justify-between px-96 mt-14">
            <div className="px-12">
            <div className="xl:block hidden">
                <h2 className="text-sm font-bold">HASIL</h2>
                <h1 className="mt-6 text-lg">221 Items</h1>
            </div>
            </div>
            <div className="px-12">
            <div className="xl:block hidden">
                <h2 className="text-sm font-bold">PILIH BERDASARKAN</h2>
                <select className="mt-6 border border-gray-400 py-1 px-2 text-lg ">
                <option>Produk unggulan</option>
                <option>Baru datang</option>
                <option>Rendah ke Tinggi</option>
                <option>Tinggi ke Rendah</option>
                <option>Rating teratas </option>
                </select>
            </div>
            </div>
        </div>
        </div>
    </div>


    <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <section className="category-sidebar bg-white mr-5 w-[18.3125rem]">
        <div className="main-category text-2xl mb-4 font-extrabold">
            WANITA
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 font-extrabold">
            <div>ATASAN</div>
            <svg
            width={19}
            height={9}
            viewBox="0 0 19 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0.250019L19 6.28002L17.66 7.77002L12 2.89002L6.34 7.77002L5 6.28002L12 0.250019ZM-36 8.77002L-29 2.74002L-30.34 1.25002L-36 6.13002L-41.66 1.25002L-43 2.74002L-36 8.77002Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category-items">
            <ul className="text-gray-500 pl-4 text-sm">
            <li className="font-extrabold text-black mb-2">Koleksi Atasan</li>
            <li className="mb-2">T-Shirt Lengan Pendek</li>
            <li className="mb-2">T-Shirt Lengan Panjang</li>
            <li className="mb-2">Atasan Crop</li>
            <li className="mb-2">Bratop</li>
            <li className="mb-2">UT(Graphic T-Shirt)</li>
            <li className="mb-2">Koleksi Sweat &amp; Jaket Hoodie</li>
            <li className="mb-2">Fleece</li>
            <li className="mb-2">Kemeja &amp; Blus (Lengan Pendek)</li>
            <li className="mb-2">Kemeja &amp; Blus (Lengan Panjang)</li>
            <li className="mb-2">Cardigan</li>
            <li className="mb-2">Sweater</li>
            <li className="mb-2">PEACE FOR ALL</li>
            </ul>
        </div>
        <div className="sub-category flex justify-between items-center text-base my-4 text-gray-600 font-medium">
            <div>LUARAN</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>BAWAHAN</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>ROK</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>GAUN</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>DALAMAN</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>LOUNGEWEAR</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>AKSESORIS</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>MODEST WEAR</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>SPORT UTILITY WEAR</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>PAKAIAN MATERNITY</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="line box-content bg-lightGray border-white h-[1px] my-8" />
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>Ukuran</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>Warna</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>Harga</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        <div className="sub-category flex justify-between items-center text-base mb-4 text-gray-600 font-medium">
            <div>Kriteria Tambahan</div>
            <svg
            width={19}
            height={10}
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
            />
            </svg>
        </div>
        </section>

        
        <section className="products items-center justify-center mt-5 lg:mt-0">
        <div className="product-grid grid grid-cols-2 gap-[0.5px] lg:grid-cols-4 lg:gap-x-16 lg:gap-y-10">

            {products.length < 0 && <p>Loading...</p>
            }
            {
                products.length > 0 &&
                products.map(product => 
                    <Product key={product.id} product={product} />
                )
            }
        </div>

        <div className="line box-content bg-lightGray border-white h-[1px] my-8" />
        <a href="#">
            <div className="flex justify-center items-center text-base mb-4 text-gray-800 font-extrabold hover:text-lightGray">
            <div className="mr-4">MUAT LEBIH BANYAK</div>
            <svg
                width={19}
                height={10}
                viewBox="0 0 19 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9.12999L0 3.09999L1.34 1.60999L7 6.48999L12.66 1.60999L14 3.09999L7 9.12999ZM55 0.609985L48 6.63999L49.34 8.12999L55 3.24999L60.66 8.12999L62 6.63999L55 0.609985Z"
                fill="#757575"
                />
            </svg>
            </div>
        </a>
        </section>
    </div>
      <Footer />
    </>
  );
}

export default Kategori;





