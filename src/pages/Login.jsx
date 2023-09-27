function Login() {
  return (
    <>
      <div>
        <div className="px-14 py-8">
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
        </div>
        <hr className="w-100% border-1 border-gray-200" />
        <div className="flex flex-wrap mx-16 my-9 border-gray-200 border-2">
          <form className="px-4">
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold my-4 text-black">Masuk</h1>
              <p className="text-[#398795] pr-3 text-right text-sm py-3 font-normal">
                Wajib
                <br />
                diisi*
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg my-5">
                Masuk dengan alamat email dan kata sandi anda
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
                />
              </svg>
            </div>
            <h3 className="font-bold my-3">
              AlAMAT EMAIL <span className="text-[#398795]">*</span>
            </h3>
            <input
              className="w-11/12 h-12 bg-gray-100"
              type="text"
              placeholder="Masukkan alamat email Anda"
            />
            <hr className="w-11/12 border-1 border-black" />
            <h3 className="font-bold my-3">
              KATA SANDI <span className="text-[#398795]">*</span>
            </h3>
            <input
              className="w-11/12 h-12 bg-gray-100"
              type="password"
              placeholder=""
            />
            <hr className="w-11/12 border-1 border-black" />
            <p className="text-[#7D7D7D] text-sm mt-1">
              Kata sandi minimal 8 karakter, dan terdiri dari huruf dan angka.
              Hanya simbol -_.@ yang
              <br />
              dapat digunakan.
            </p>
            <div className="my-3">
              <input type="checkbox" name="pass" />
              <label className="text-black" htmlFor="pass">
                Tunjukkan kata sandi saya
              </label>
            </div>
            <a href="#" className="font-bold text-base underline">
              <p className="mt-5">KETENTUAN PENGGUNAAN</p>
            </a>
            <a href="#" className="font-bold text-base underline">
              <p>KEBIJAKAN PRIVASI</p>
            </a>
            <button className="bg-black w-2/4 h-11 mt-5">
              <p className="text-white text-base font-bold">MASUK</p>
            </button>
            <a href="#" className="font-bold text-base underline my-5">
              <p className="my-3">LUPA SANDI ANDA?</p>
            </a>
          </form>
          <div>
            <h1 className="text-3xl font-bold mt-5">BUAT AKUN</h1>
            <p className="text-base text-black my-4">
              Jika Anda membuat akun, Anda bisa mendapatkan layanan yang
              dipersonalisasi
              <br />
              seperti melihat riwayat pembelian dan mendapatkan kupon diskon
              dengan
              <br />
              keanggotaan Anda. Daftar hari ini, gratis!
            </p>
            <button className="bg-black w-2/4 h-11 mt-5">
              <p className="text-white text-base font-bold">BUAT AKUN</p>
            </button>
          </div>
        </div>
      </div>
      <div className="font-bold text-center text-xs my-5">
        <p>HAK CIPTA © UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.</p>
      </div>
    </>
  );
}

export default Login;
