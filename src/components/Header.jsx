function Header() {
  return (
    <>
      <header className="bg-stone-100 top-0 left-0 w-full items-center flex">
        <div className="container flex items-center justify-end px-40 h-10 font-normal">
          <div className="flex gap-3 items-center">
            <div>
              <a href="">Bantuan</a>
            </div>
            <div>
              <a href="">pencari lokasi toko</a>
            </div>
            <div>
              <span>
                <button>English</button>
              </span>
              <span>
                <button>Bahasa Indonesia</button>
              </span>
            </div>
          </div>
        </div>
      </header>
      <header className="bg-white top-0 left-0 w-full border-b border-slate-400 flex">
        <div className="container flex items-center justify-between px-40 h-20">
          <div className="flex">
            <h1>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 90 40"
                  width={90}
                  height={40}
                  role="img"
                  aria-label="ユニクロ｜UNIQLO"
                >
                  <title>ユニクロ｜UNIQLO</title>
                  <path fill="red" d="M50 0h40v40H50zM0 0h40v40H0z" />
                  <g fill="#fff">
                    <path d="M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z" />
                    <g>
                      <path d="M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z" />
                    </g>
                  </g>
                </svg>
              </a>
            </h1>
            <ul className="flex justify-start gap-6 items-center ml-10 font-bold">
              <li className="group">
                <a href="/Kategori">WANITA</a>
                <div className="dialog-menu hidden group-hover:block absolute border-t-2 border-stone-400 w-full h-full bg-white mt-7 left-0">
                  <div className="container px-40">
                    <div className="flex gap-10">
                      <div className="flex flex-wrap w-full">
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            ATASAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Atasan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">T-shirt Lengan Pendek</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">T-shirt Lengan Panjang</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Atasan Crop</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Bratop</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">UT(Graphic T-Shirt)</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Koleksi Sweat &amp; JAket Hodie
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Kemaja &amp; blus (Lengan Pendek)
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Kemaja &amp; blus (Lengan Panjang)
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Cardigan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sweater</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">PEACE FOR ALL</a>
                            </li>
                            <h3 className="font-bold text-lg mt-5 mb-4">
                              GAUN
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Gaun</a>
                            </li>
                            <h3 className="font-bold text-lg mt-5 mb-4">
                              MODEST WEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Modest Wear</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            LUARAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Luaran</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Blouson &amp; Jaket Parka</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Jaket &amp; Blazer</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AirSense</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Mantel</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Ultra Light Down</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              DALAMAN
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Dalaman</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Bra Tanpa Kawat</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Bratop</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AIRism</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">HEATTECH</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Dalaman Atas</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Legging</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Dalam</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kaos Kaki</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              SPORT UTILITY WEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sport Utility Wear</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            BAWAHAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Baawahan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Jeans</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Legging</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Lebar</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Sweat</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Casual</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Celana Panjang &amp;Celana Ankle
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Celana Pendek &amp; Rok Celana
                              </a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              LOUNGEWEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Loungewear</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Piyama</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">RELACO</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sandal Rumah</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              PAKAIAN MATERNITY
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Pakaian Maternity</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            ROK
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Rok</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              AKSESORIS
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Aksesoris</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Topi</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sarung Tangan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Tas</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Syal</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Ikat Pinggang</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Payung</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kacamata Hitam</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Lainnya</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-l border-stone-400 mt-7" />
                      <div className="mt-5">
                        <h3 className="font-semibold text-lg mb-4">Featured</h3>
                        <ul>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">New arrivals</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Limited Offers</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Value Buy</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Coming Soon</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Featured News</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">UT Graphic T-Shirts</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">STYLING BOOK</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">About LifeWear</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">
                              Extra Size (Online exclusive)
                            </a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Pembelian Jumlah Besar</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Kirim Kado</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">PEACE FOR ALL</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Special collaboration
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Uniqlo and Mame Kurogouchi</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">UNIQLO C</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">INES DE LA FRESSANGE</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Uniqlo U</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Special Collaboration</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Browse
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Koleksi Wanita</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <a href="/Kategori">PRIA</a>
                <div className="dialog-menu hidden group-hover:block absolute border-t-2 border-stone-400 w-full h-full bg-white mt-7 left-0">
                  <div className="container px-40">
                    <div className="flex gap-10">
                      <div className="flex flex-wrap w-full">
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            ATASAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Atasan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">T-shirt Lengan Pendek</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">T-shirt Lengan Panjang</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">UT(Graphic T-Shirt)</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kaos Polo</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Koleksi Sweat &amp; Jaket Hodie
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Kemeja Kasual (Lengan Pendek)
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Kemeja Kasual (Lengan Panjang)
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kemeja Formal</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sweater &amp; Cardigan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">PEACE FOR ALL</a>
                            </li>
                            <h3 className="font-bold text-lg mt-5 mb-4">
                              LOUNGEWEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Loungewear</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Piyama</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sandal Rumah</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            LUARAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Luaran</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Blouson &amp; Jaket Parka</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Jaket &amp; Blazer</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AirSense</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Ultra Light Down</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              AKSESORIS
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Aksesoris</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Topi</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sarung Tangan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Tas</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Syal</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Ikat Pinggang</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Payung</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kacamata Hitam</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Lainnya</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            BAWAHAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Baawahan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Relax &amp; Lebar</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Jeans</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Chino</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AIRSense</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Sweat</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Panjang &amp; Ankle</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Pendek</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              SPORT UTILITY WEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sport Utility Wear</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            DALAMAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Dalaman</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AIRism</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">HEATTECH</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Dalaman Atas</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Legging</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Dalam</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kaos Kaki</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-l border-stone-400 mt-7" />
                      <div className="mt-5">
                        <h3 className="font-semibold text-lg mb-4">Featured</h3>
                        <ul>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">New arrivals</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Limited Offers</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Value Buy</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Coming Soon</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Featured News</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">UT Graphic T-Shirts</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">STYLING BOOK</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">About LifeWear</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">
                              Extra Size (Online exclusive)
                            </a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Pembelian Jumlah Besar</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Kirim Kado</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">PEACE FOR ALL</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Special collaboration
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Kaws x UT</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Uniqlo U</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Special Collaboration</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">
                              Roger Federer collection By JW ANDERSON
                            </a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Browse
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Koleksi Pria</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <a href="/Kategori">ANAK</a>
                <div className="dialog-menu hidden group-hover:block absolute border-t-2 border-stone-400 w-full h-full bg-white mt-7 left-0">
                  <div className="container px-40">
                    <div className="flex gap-10">
                      <div className="flex flex-wrap w-full">
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            ATASAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Atasan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">T-shirt</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">UT(Graphic T-Shirt)</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">
                                Koleksi Sweat &amp; Jaket Hodie
                              </a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kemeja &amp; Blous</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              DALAMAN
                            </h3>
                          </ul>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Dalaman</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Dalaman</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AIRism</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">HEATTECH</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Bra</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Legging &amp; Celana Ketat</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Dalam</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kaos Kaki</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            LUARAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Luaran</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              LOUNGEWEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Loungewear</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Loungewear &amp; Piyama</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">RELACO</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            BAWAHAN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Baawahan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Panjang</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Celana Pendek</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Rok</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              AKSESORIS
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Aksesoris</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Lainnya</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            GAUN
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Gaun</a>
                            </li>
                            <h3 className="font-semibold text-lg mt-5 mb-4">
                              SPORT UTILITY WEAR
                            </h3>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Sport Utility</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-l border-stone-400 mt-7" />
                      <div className="mt-5">
                        <h3 className="font-semibold text-lg mb-4">Featured</h3>
                        <ul>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">New arrivals</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Limited Offers</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Value Buy</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Coming Soon</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Featured News</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">UT Graphic T-Shirts</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">STYLING BOOK</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">About LifeWear</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">
                              Extra Size (Online exclusive)
                            </a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Pembelian Jumlah Besar</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Kirim Kado</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Special collaboration
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Special Collaboration</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Browse
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Koleksi Anak</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group">
                <a href="/Kategori">BAYI</a>
                <div className="dialog-menu hidden group-hover:block absolute border-t-2 border-stone-400 w-full h-full bg-white mt-7 left-0">
                  <div className="container px-40">
                    <div className="flex gap-10">
                      <div className="flex flex-wrap w-full">
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            NEWBORN (6-18 BULAN)
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Pakaian Newborn</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Aksesoris</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            NEWBORN (18-24 BULAN)
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Newborn</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Luaran</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">One Piece</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Atasan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Baju Terusan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Legging</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">UT(Graphic T-Shirt)</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Gaun</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AIRism</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kaos Kaki</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Aksesoris</a>
                            </li>
                          </ul>
                        </div>
                        <div className="w-3/12">
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            TODDLER (3-4 YEAR)
                          </h3>
                          <ul>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Koleksi Balita</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Atasan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Luaran</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Bawahan</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Piyama</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Gaun</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">UT(Graphic T-Shirt)</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">HEATTECH</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Dalaman Atas</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">AIRism</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Kaos Kaki</a>
                            </li>
                            <li className="mb-4 text-sm font-normal">
                              <a href="/Kategori">Aksesoris</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-l border-stone-400 mt-5" />
                      <div className="mt-5">
                        <h3 className="font-semibold text-lg mb-4">Featured</h3>
                        <ul>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">New arrivals</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Limited Offers</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Value Buy</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Coming Soon</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Featured News</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">UT Graphic T-Shirts</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">STYLING BOOK</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">About LifeWear</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">
                              Extra Size (Online exclusive)
                            </a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Pembelian Jumlah Besar</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Kirim Kado</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">PEACE FOR ALL</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Special collaboration
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">
                              Roger Federer collection By JW ANDERSON
                            </a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Uniqlo U</a>
                          </li>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Special Collaboration</a>
                          </li>
                          <h3 className="font-semibold text-lg mt-5 mb-4">
                            Browse
                          </h3>
                          <li className="mb-4 text-sm font-normal">
                            <a href="/Kategori">Koleksi Pria</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex gap-10">
              {/* Search */}
              <li>
                <button className="">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={30}
                      height={30}
                    >
                      <g id="function_jp">
                        <path d="M4.57,10.59a6,6,0,1,1,6,6A6,6,0,0,1,4.57,10.59Zm11.91,4.78a7.6,7.6,0,1,0-1.11,1.11l4.29,4.29a.78.78,0,0,0,1.11-1.11Z" />
                      </g>
                    </svg>
                  </span>
                </button>
              </li>
              {/* login */}
              <li>
                <a href="/Login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      d="M3.4,21.9v-1.1c0-2.4,0.7-4.4,2.2-5.8C6.2,14.2,7,13.7,8,13.2l0.2-0.1L8,13.1c-1.6-1.3-2.4-3.3-2.2-5.4 c0.3-3.2,3-5.6,6.2-5.6c0.2,0,0.4,0,0.6,0c1.7,0.2,3.1,1,4.2,2.2s1.5,2.9,1.4,4.5C18,10.5,17.2,12,16,13l-0.1,0.1l0.2,0.1 c1,0.4,1.8,1,2.5,1.7c1.4,1.5,2.1,3.5,2.1,5.8v1.1L3.4,21.9L3.4,21.9z M12,14.5c-2.4,0-4.2,0.6-5.4,1.9c-0.7,0.7-1.2,1.9-1.5,3.5 l0,0.1h13.8l0-0.1c-0.3-1.7-0.7-2.8-1.4-3.6C16.2,15.1,14.4,14.5,12,14.5z M12,3.9c-2.3,0-4.2,1.7-4.4,4c-0.1,1.2,0.2,2.3,1,3.2 s1.8,1.5,3,1.6c0.2,0,0.3,0,0.4,0c2.3,0,4.2-1.7,4.4-4c0.1-1.2-0.2-2.3-1-3.2c-0.8-0.9-1.8-1.5-3-1.6C12.3,3.9,12.1,3.9,12,3.9z"
                      fill="black"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              {/* whitclist */}
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      d="M12,22.5c-0.2,0-0.4-0.1-0.6-0.2L9.9,21c-3.6-3.2-7.3-6.6-8.4-10.1c-1.3-4.1,0.4-8,4-9.2 c2.3-0.8,4.7,0,6.5,1.8c1.8-1.9,4.2-2.6,6.5-1.8c3.6,1.2,5.3,5.1,4,9.2c-1.1,3.5-4.8,6.9-8.4,10.1l-1.5,1.3 C12.4,22.5,12.2,22.5,12,22.5z M7.4,3.2C7,3.2,6.5,3.3,6.1,3.4c-2.6,0.9-3.8,3.8-2.9,6.9c1,3,4.5,6.2,7.9,9.3l0.8,0.8l0.8-0.8 c3.4-3.1,7-6.3,7.9-9.3c1-3.1-0.2-6.1-2.9-6.9c-2.8-0.9-4.7,1.4-5.2,2.1c-0.2,0.2-0.4,0.4-0.7,0.4l0,0c-0.3,0-0.6-0.1-0.7-0.4 C10.8,4.9,9.4,3.2,7.4,3.2z"
                      fill="black"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              {/* keranjang */}
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M18.1,22.5c-1.5,0-2.6-1.2-2.6-2.6c0-0.3,0-0.6,0.2-0.9l0-0.1H9.5l0,0.1c0.1,0.3,0.2,0.6,0.2,0.9 c0,1.4-1.2,2.6-2.6,2.6c-1.5,0-2.6-1.2-2.6-2.6c0-0.3,0-0.6,0.2-0.9l0-0.1H4.5l-0.1,0c-1.3-0.1-2.3-1.3-2.3-2.6s1-2.4,2.3-2.6l0.1,0 V3.1H0.9V1.5h5.2V4l16.3,1.2c0.2,0,0.5,0.1,0.6,0.3c0.1,0.2,0.2,0.4,0.1,0.7l-2.4,8.5c-0.1,0.3-0.4,0.6-0.8,0.6H4.7 c-0.6,0-1,0.5-1,1s0.5,1,1,1h13.6l0.1,0c1.3,0.1,2.3,1.3,2.3,2.6C20.7,21.3,19.5,22.5,18.1,22.5z M18.1,18.9c-0.6,0-1,0.5-1,1 s0.5,1,1,1s1-0.5,1-1S18.6,18.9,18.1,18.9z M7.1,18.9c-0.6,0-1,0.5-1,1s0.5,1,1,1s1-0.5,1-1S7.7,18.9,7.1,18.9z M6.1,13.6h13.2l2-7 L6.1,5.6V13.6z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
