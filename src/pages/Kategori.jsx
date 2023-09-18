function Kategori() {
return (
    <>
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
                <img src="assets/koleksi1.jpg" className="h-52" />
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
            <div className="product-card flex flex-col bg-white w-[11rem] lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-1.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">WANITA</div>
                <div className="size-product">XS-3XL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>
                    HEATTECH Pullover Fleece Kerah Tinggi Lengan Panjang
                    (Turtleneck)
                </h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp199.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(29)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white flex flex-col w-[11rem] lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-2.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">UNISEKS</div>
                <div className="size-product">S-XL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>AIRism Katun T-Shirt Kerah Bulat Lengan Pendek</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp149.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(232)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white w-[11rem] flex flex-col lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-3.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">WANITA</div>
                <div className="size-product">XS-XXL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>Blus Katun Lyocell Kerut Lengan Pendek</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp399.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(2)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white w-[11rem] flex flex-col lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-4.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">UNISEKS</div>
                <div className="size-product">XS-XXL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>T-Shirt Oversize Saku Kerah Bulat Lengan Half</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp249.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(203)</span>
                </div>
            </div>
            </div>
            <div className="product-card flex flex-col bg-white w-[11rem] lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-1.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">WANITA</div>
                <div className="size-product">XS-3XL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>
                    HEATTECH Pullover Fleece Kerah Tinggi Lengan Panjang
                    (Turtleneck)
                </h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp199.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(29)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white flex flex-col w-[11rem] lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-2.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">UNISEKS</div>
                <div className="size-product">S-XL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>AIRism Katun T-Shirt Kerah Bulat Lengan Pendek</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp149.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(232)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white w-[11rem] flex flex-col lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-3.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">WANITA</div>
                <div className="size-product">XS-XXL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>Blus Katun Lyocell Kerut Lengan Pendek</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp399.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(2)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white w-[11rem] flex flex-col lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-4.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">UNISEKS</div>
                <div className="size-product">XS-XXL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>T-Shirt Oversize Saku Kerah Bulat Lengan Half</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp249.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(203)</span>
                </div>
            </div>
            </div>
            <div className="product-card flex flex-col bg-white w-[11rem] lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-1.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">WANITA</div>
                <div className="size-product">XS-3XL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>
                    HEATTECH Pullover Fleece Kerah Tinggi Lengan Panjang
                    (Turtleneck)
                </h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp199.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(29)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white flex flex-col w-[11rem] lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-2.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">UNISEKS</div>
                <div className="size-product">S-XL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>AIRism Katun T-Shirt Kerah Bulat Lengan Pendek</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp149.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(232)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white w-[11rem] flex flex-col lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-3.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">WANITA</div>
                <div className="size-product">XS-XXL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>Blus Katun Lyocell Kerut Lengan Pendek</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp399.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(2)</span>
                </div>
            </div>
            </div>
            <div className="product-card bg-white w-[11rem] flex flex-col lg:max-w-[13.4rem]">
            <a href="#" className="product-item">
                <div
                className="product-image flex justify-end pr-2.5 pt-2.5 w-[11rem] h-[11rem] lg:w-[13.4rem] lg:h-[13.4rem]"
                style={{
                    backgroundImage: 'url("/assets/model-produk-4.png")',
                }}
                >
                <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0694 20.1972L13.7791 22.3638L12.0231 24L10.2781 22.3638C6.06819 18.4368 1.71651 14.3744 0.462262 10.312C-0.901047 5.79827 0.833082 1.60048 4.58491 0.314055C7.57328 -0.70154 10.3108 0.86699 12.0013 3.28185C13.7027 0.86699 16.4402 -0.70154 19.4177 0.314055C23.1695 1.60048 24.8709 5.79827 23.5404 10.3007C23.4749 10.5264 23.3549 10.7634 23.2677 10.9891L21.4572 8.9579C22.1225 5.99011 21.0537 3.43983 18.6979 2.63864C16.0367 1.7246 13.899 4.28616 13.1029 6.22708L12.0231 8.91276L10.9325 6.22708C10.2672 4.56827 8.59849 2.44681 6.46082 2.44681C6.08976 2.45073 5.72164 2.51548 5.37017 2.63864C2.83987 3.49625 1.76013 6.36249 2.74171 9.58983C3.77783 12.9751 8.06407 17.015 11.8595 20.5583L12.034 20.7162L12.2085 20.5583L14.4771 18.4142L16.0694 20.1972ZM17.989 19.4862C17.9855 19.5168 17.9887 19.5477 17.9984 19.5767C18.0081 19.6058 18.0241 19.6321 18.0451 19.6539C18.0661 19.6756 18.0916 19.6921 18.1196 19.7022C18.1477 19.7122 18.1776 19.7156 18.2071 19.7119H20.0067C20.037 19.7175 20.0681 19.7156 20.0976 19.7064C20.1271 19.6972 20.154 19.681 20.1763 19.659C20.1986 19.6371 20.2156 19.61 20.2259 19.58C20.2362 19.5499 20.2396 19.5178 20.2357 19.4862V15.9429C20.234 15.9247 20.2362 15.9063 20.2422 15.8891C20.2482 15.8719 20.2578 15.8563 20.2703 15.8433C20.2828 15.8304 20.2979 15.8205 20.3146 15.8143C20.3312 15.8081 20.349 15.8058 20.3666 15.8075H23.7694C23.7997 15.8131 23.8309 15.8112 23.8603 15.802C23.8898 15.7928 23.9168 15.7766 23.9391 15.7546C23.9614 15.7327 23.9784 15.7056 23.9887 15.6756C23.999 15.6455 24.0023 15.6134 23.9984 15.5818V13.7763C24.0023 13.7447 23.999 13.7126 23.9887 13.6826C23.9784 13.6526 23.9614 13.6255 23.9391 13.6036C23.9168 13.5816 23.8898 13.5654 23.8603 13.5562C23.8309 13.547 23.7997 13.5451 23.7694 13.5507H20.3666C20.349 13.5524 20.3312 13.5501 20.3146 13.5439C20.2979 13.5377 20.2828 13.5278 20.2703 13.5149C20.2578 13.5019 20.2482 13.4863 20.2422 13.4691C20.2362 13.4518 20.234 13.4335 20.2357 13.4152V9.86065C20.2396 9.82906 20.2362 9.79696 20.2259 9.76694C20.2156 9.73693 20.1986 9.70984 20.1763 9.68787C20.154 9.66591 20.1271 9.64967 20.0976 9.64048C20.0681 9.63129 20.037 9.6294 20.0067 9.63497H18.2071C18.1776 9.63134 18.1477 9.63468 18.1196 9.64474C18.0916 9.65479 18.0661 9.67131 18.0451 9.69304C18.0241 9.71476 18.0081 9.74114 17.9984 9.77017C17.9887 9.7992 17.9855 9.83014 17.989 9.86065V13.404C17.9906 13.4222 17.9884 13.4405 17.9824 13.4578C17.9765 13.475 17.9669 13.4906 17.9544 13.5036C17.9419 13.5165 17.9267 13.5264 17.9101 13.5326C17.8934 13.5388 17.8757 13.5411 17.8581 13.5394H14.4553C14.4258 13.5357 14.3959 13.5391 14.3678 13.5491C14.3397 13.5592 14.3143 13.5757 14.2933 13.5974C14.2723 13.6192 14.2563 13.6455 14.2466 13.6746C14.2369 13.7036 14.2336 13.7345 14.2371 13.7651V15.5593C14.2336 15.5898 14.2369 15.6207 14.2466 15.6498C14.2563 15.6788 14.2723 15.7052 14.2933 15.7269C14.3143 15.7486 14.3397 15.7651 14.3678 15.7752C14.3959 15.7853 14.4258 15.7886 14.4553 15.785H17.8581C17.8757 15.7832 17.8934 15.7855 17.9101 15.7917C17.9267 15.7979 17.9419 15.8078 17.9544 15.8208C17.9669 15.8337 17.9765 15.8493 17.9824 15.8666C17.9884 15.8838 17.9906 15.9022 17.989 15.9204V19.4862Z"
                    fill="#1B1B1B"
                    />
                </svg>
                </div>
            </a>
            <div className="product-colors flex my-3 items-center px-2 lg:px-0">
                <a href="#" className="product-item"></a>
                <a className="box-content bg-red-100 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-red-200 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-orange-300 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="box-content bg-yellow-400 border-white hover:border-black border-2 h-[1rem] w-[1rem] mr-1" />
                <a className="text-2xl font-bold text-darkGray">
                <button className="hover:text-black">+</button>
                </a>
            </div>
            <div className="product-desc px-2 lg:px-0">
                <div className="gender-size flex justify-between text-sm text-darkGray font-extrabold mb-3">
                <div className="gender-product">UNISEKS</div>
                <div className="size-product">XS-XXL</div>
                </div>
                <div className="product-name text-softBlack text-base font-extrabold mb-3">
                <h3>T-Shirt Oversize Saku Kerah Bulat Lengan Half</h3>
                </div>
            </div>
            <div className="price-rating mt-auto px-2 lg:px-0">
                <div className="product-price font-extrabold text-xl">
                Rp249.000
                </div>
                <div className="product-rating flex gap-1 items-center">
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#EBBE00"
                    />
                    </svg>
                </span>
                <span className="star-rate">
                    <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.82857 16L5.58571 10.3321L1 6.76429H6.7L8.51071 1L10.3 6.76429H16L11.425 10.3321L13.1714 16L8.51071 12.4964L3.82857 16Z"
                        fill="#DADADA"
                    />
                    </svg>
                </span>
                <span className="rating-total text-darkGray">(203)</span>
                </div>
            </div>
            </div>
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
    </>
);
}

export default Kategori;
