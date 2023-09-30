import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import logoLock from "../assets/lock.png";
// import DummyData from "../services/DummyData";

function Register() {
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const ProceedRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      // const user = DummyData.find((userData) => userData.email === email);

      const users = [
        {
          email: "tyas@gmail.com",
          password: "123",
          kodepos: "1234",
          date: "09/05/2023",
          gender: "Wanita",
        },
        {
          email: "ririn@gmail.com",
          password: "456",
          kodepos: "1234",
          date: "09/05/2023",
          gender: "Wanita",
        },
        {
          email: "yoce@gmail.com",
          password: "123456",
          kodepos: "1234",
          date: "09/05/2023",
          gender: "Pria",
        },
      ];
      const user = users.find((userData) => userData.email === email);

      if (user && user.password === password) {
        alert("Registration successful!, Silahkan Login!");
        window.location.href = "Login";
      } else {
        alert("Email atau Password Salah. Silahkan cek kembali! ");
        // window.location.href = "Login.jsx";
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
  return (
    <section>
      <form onSubmit={ProceedRegister} className="mx-4 my-3.5 lg:m-14">
        {/* link top */}
        <div className="mb-10 hidden sm:block  ">
          <ol className="flex text-sm gap-2 text-slate-400">
            <li className="underline">
              <a href="/">UNIQLO</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">BUAT AKUN</a>
            </li>
          </ol>
        </div>
        {/* end link top */}
        {/* text top */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">BUAT AKUN</h1>
          <img src={logoLock} alt="Lock" className="w-5 h-5 lg:mr-[580px]" />
        </div>
        {/* end text top */}
        {/* card registry */}
        <div className="border px-2 py-2 lg:max-w-2xl lg:px-5">
          <div className="flex mb-6">
            <p>
              Anda akan menerima email konfirmasi ke alamat e-mail Anda yang
              terkait dengan akun. Harap pastikan untuk memeriksa e-mail yang
              masuk dari UNIQLO.
            </p>
            <p className="text-xs whitespace-nowrap text-blue-800 after:content-['*'] after:ml-0.5 after:text-blue-800 flex items-end sm:items-start lg:items-start">
              Wajib diisi
            </p>
          </div>
          <div>
            <div className="py-2">
              <div className="flex">
                <p className="font-bold text-xl mr-1 after:content-['*'] after:ml-0.5 after:text-blue-800">
                  ALAMAT EMAIL
                </p>
              </div>
              <input
                value={email}
                onChange={(e) => emailchange(e.target.value)}
                type="text"
                placeholder="Masukan Email Anda"
                className="shadow border-b-2 border-x-slate-400 py-2 px-2 w-full bg-slate-100"
              />
            </div>
            <div className="py-2">
              <div className="flex">
                <p className="font-bold text-xl mr-1 after:content-['*'] after:ml-0.5 after:text-blue-800">
                  KATA SANDI
                </p>
              </div>
              <input
                value={password}
                onChange={(e) => passwordchange(e.target.value)}
                type="password"
                placeholder=""
                className="shadow border-b-2 border-x-slate-400 py-2 px-2 w-full bg-slate-100"
              />
              <p className="opacity-50 bg-slate-100">
                Kata sandi minimal 8 karakter, dan terdiri dari huruf dan angka.
                Hanya simbol -_.@ yang dapat digunakan.
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <input type="checkbox" name="" id="" className="w-4 h-4" />
              <p>Tunjukan kata sandi saya</p>
            </div>
            <div className="py-2">
              <div className="flex">
                <p className="font-bold text-xl mr-1 after:content-['*'] after:ml-0.5 after:text-blue-800">
                  KODE POS
                </p>
              </div>
              <input
                type="text"
                placeholder="Silahkan masukkan kode pos."
                className="shadow border-b-2 border-x-slate-400 py-2 px-2 w-full bg-slate-100"
              />
            </div>
            <div className="py-2">
              <div className="flex">
                <p className="font-bold text-xl mr-1">TANGGAL LAHIR</p>
              </div>
              <input
                type="date"
                className="shadow border-b-2 border-x-slate-400 py-2 px-2 w-72 bg-slate-100"
              />
              <p className="opacity-50 bg-slate-100">
                Tidak dapat mengubah tanggal lahir setelah Anda mendaftar.
              </p>
            </div>
            <div className="py-2">
              <div className="flex">
                <p className="font-bold text-xl mr-1">JENIS KELAMIN</p>
              </div>
              <div>
                <ol className="flex gap-2 py-2">
                  <li>
                    <input type="radio" name="sexing" id="" />
                    Pria
                  </li>
                  <li>
                    <input type="radio" name="sexing" id="" />
                    Wanita
                  </li>
                  <li>
                    <input type="radio" name="sexing" id="" />
                    Tidak dipilih
                  </li>
                </ol>
              </div>
            </div>
            <p className="font-bold text-xl mr-1">KONFIRMASI LANGGANAN</p>
            <div className="flex gap-1 items-center">
              <input type="checkbox" name="" id="" className="w-4 h-4" />
              <p>Newsletter Uniqlo</p>
            </div>
            <hr className="my-5" />
            <p className="font-bold text-xl py-2 after:content-['*'] after:ml-0.5 after:text-blue-800">
              PERJANJIAN KEANGGOTAAN
            </p>
            <p className="opacity-50 py-2">
              Dengan membuat akun, Anda setuju dengan persyaratan penggunaan dan
              kebijakan privasi UNIQLO.
            </p>
            <div className="flex justify-start gap-2 py-2">
              <input type="checkbox" name="" id="" className="w-4 h-4" />
              <p>
                Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN PRIVASI
                UNIQLO
              </p>
            </div>
            <div className="justify-center gap-5 py-2 lg:flex lg:justify-start">
              <p className="font-bold underline py-1.5">KETENTUAN PENGGUNAAN</p>
              <p className="font-bold underline py-1.5">KEBIJAKAN PRIVASI</p>
            </div>
            <div className="flex justify-center py-5">
              <button
                // onClick={() => navigate("/Login")}
                type="submit"
                className="bg-black text-white font-bold py-3.5 px-24 hover:opacity-80 sm:w-full lg:w-0 lg:justify-center lg:flex"
              >
                <p>DAFTAR</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Register;
