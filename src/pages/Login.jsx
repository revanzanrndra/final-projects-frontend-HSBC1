import { useState } from "react";
import DummyData from "../DummyData.jsx";


function Login() {
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = DummyData.find((userData) => userData.email === email);
      if (user && user.password === password) {
        alert("Login succes");
      } else {
        alert("Login failed, check your email and password ");
      }
    }
  };
  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Please input your email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please input your password");
    }
    return result;
  };

  const redirectReg = () => {

    window.location.href = "Home"; 
  };
  

  return (
    <>
      <>
        <div className="flex flex-wrap mx-4 md:mx-16 my-4 md:my-9 border-gray-200 border-2">
          <form className="w-full md:w-1/2 px-4" onSubmit={ProceedLogin}>
            <h1 className="text-2xl md:text-4xl font-bold my-2 md:my-4 text-left text-black">
              Masuk
            </h1>
            <p className="text-[#398795] pr-3 text-sm my-0 md:pr-3 text-right font-normal">
              Wajib
              <br />
              diisi*
            </p>
            <p className="text-base md:text-lg my-2 md:my-5 text-left">
              Masuk dengan alamat email dan kata sandi Anda
            </p>

            <h3 className="font-bold my-2 md:my-3 text-left">
              ALAMAT EMAIL <span className="text-[#398795]">*</span>
            </h3>
            <input
              className="w-full h-10 md:h-12 bg-gray-100"
              type="text"
              placeholder="Alamat email Anda"
              value={email}
              onChange={(e) => emailchange(e.target.value)}
            />
            <hr className="w-full border-1 border-black" />
            <h3 className="font-bold my-2 md:my-3 text-left">
              KATA SANDI <span className="text-[#398795]">*</span>
            </h3>
            <input
              className="w-full h-10 md:h-12 bg-gray-100"
              type="password"
              placeholder="Kata sandi Anda"
              value={password}
              onChange={(e) => passwordchange(e.target.value)}
            />
            <hr className="w-full border-1 border-black" />
            <p className="text-[#7D7D7D] text-xs md:text-sm mt-1 text-left">
              Kata sandi minimal 8 karakter, dan terdiri dari huruf dan angka.
              Hanya simbol -_.@ yang dapat digunakan.
            </p>
            <div className="my-2 md:my-3 text-left">
              <input type="checkbox" name="pass" />
              <label className="text-black" htmlFor="pass">
                Tunjukkan kata sandi saya
              </label>
            </div>
            <a
              href="#"
              className="font-bold text-sm md:text-base underline text-left"
            >
              <p className="my-2 md:my-5">KETENTUAN PENGGUNAAN</p>
            </a>
            <a
              href="#"
              className="font-bold text-sm md:text-base underline text-left"
            >
              <p>KEBIJAKAN PRIVASI</p>
            </a>

            <button
              type="submit"
              className="bg-black w-full md:w-2/4 h-10 md:h-11 mt-4 md:mt-5"
            >
              <p className="text-white text-base font-bold">MASUK</p>
            </button>

            <a
              href="#"
              className="font-bold text-sm md:text-base underline my-3 md:my-5 text-left"
            >
              <p className="my-2 md:my-3">LUPA SANDI ANDA?</p>
            </a>
          </form>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 text-left">
            <h1 className="text-2xl md:text-3xl font-bold mt-2 md:mt-5">
              BUAT AKUN
            </h1>
            <p className="text-base md:text-lg text-black my-2 md:my-4">
              Jika Anda membuat akun, Anda bisa mendapatkan layanan yang
              dipersonalisasi seperti melihat riwayat pembelian dan mendapatkan
              kupon diskon dengan keanggotaan Anda. Daftar hari ini, gratis!
            </p>
            <button onClick={redirectReg} className="bg-black w-full md:w-2/4 h-10 md:h-11 mt-2 md:mt-5">
              <p className="text-white text-base font-bold">BUAT AKUN</p>
            </button>
          </div>

          <div className="font-bold text-xs mt-4 md:my-5 text-center">
            <p className>
              HAK CIPTA © UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default Login;
