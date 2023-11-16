import logoFacebook from "../assets/facebook.svg";
import logoTwitter from "../assets/twitter.svg";
import logoInstagram from "../assets/instagram.svg";
import logoYoutube from "../assets/youtube-.svg";
import { useTranslation } from "react-i18next";
import i18n from "../lib/language";

function Footer() {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-stone-100 w-full pt-12 border-b items-center flex">
        <div className="container px-40">
          <div className="flex flex-wrap">
            <div className="w-1/6">
              <h3 className="font-semibold text-lg mt-5 mb-4">
                {t("Tentang")}
              </h3>
              <ul>
                <li className="mb-4 text-sm font-normal">
                  <a className="" href="">
                    {t("Informasi")}
                  </a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">{t("Toko")}</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a className="" href="">
                    {t("Pembelianjmlbesar")}
                  </a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Layanan Alterasi</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Layanan Kirim Kado</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Live Station</a>
                </li>
              </ul>
            </div>
            <div className="w-1/6">
              <h3 className="font-semibold text-lg mt-5 mb-4">
                {t("Bantuan")}
              </h3>
              <ul>
                <li className="mb-4 text-sm font-normal">
                  <a href="">FAQ</a>
                </li>
                <li className="mb-4 text-sm font-normal max-w-sm">
                  <a href="">Panduan Berbelanja Secara Online</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Kebijakan Pengembalian</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Kebijakan Privasi</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Aksesibilitas</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Hubungi Kami</a>
                </li>
              </ul>
            </div>
            <div className="w-1/6">
              <h3 className="font-semibold text-lg mt-5 mb-4">{t("Akun")}</h3>
              <ul>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Membership</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Profil</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Kupon</a>
                </li>
              </ul>
            </div>
            <div className="w-48">
              <h3 className="font-semibold text-lg mt-5 mb-4">
                {t("Hubungi")}
              </h3>
              <ul>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Untuk Layanan Pengaduan</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Konsumen UNIQLO Indonesia</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">
                    (001) 80332160290 dan customersupport@uniqlo.co.id
                  </a>
                </li>
                <hr />
                <li className="mb-4 text-sm font-normal">
                  <a href="">Layanan Pengaduan Konsumen</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">
                    Direktorat Jenderal Perlindungan Konsumen Dan Tertib Niaga
                  </a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">Kementrian Perdagangan Republik Indonesia</a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="">0853-1111-1010 (WhatsApp)</a>
                </li>
              </ul>
            </div>
            <div className="w-44 ml-4">
              <h3 className="font-semibold text-lg mt-5 mb-4">E-Newsletter</h3>
              <ul>
                <li className="mb-4 text-sm font-normal max-w-sm">
                  <a href="">
                    Daftar dan jadilah yang pertama mengetahui tentang pendatang
                    baru,promosi,acara di dalam toko,dan banyak lagi
                  </a>
                </li>
                <li className="mb-4 text-sm font-normal">
                  <a href="" className="font-bold underline text-xl">
                    Berlangganan Sekarang
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-44 ml-4">
              <h3 className="font-semibold text-lg mt-5 mb-4">
                Akun Sosial UNIQLO
              </h3>
              <div className="flex gap-4">
                <a href="" target="_blank">
                  <img src={logoFacebook} width={40} height={40} alt="" />
                </a>
                <a href="" target="_blank">
                  <img src={logoTwitter} width={40} height={40} alt="" />
                </a>
                <a href="" target="_blank">
                  <img src={logoInstagram} width={40} height={40} alt="" />
                </a>
                <a href="" target="_blank">
                  <img src={logoYoutube} width={40} height={40} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-items-start mt-8 mb-4">
            <button
              onClick={() => {
                changeLanguage("en");
              }}
            >
              English
            </button>
            <span>|</span>
            <button
              onClick={() => {
                changeLanguage("id");
              }}
            >
              Bahasa Indonesia
            </button>
          </div>
        </div>
      </footer>
      <div className="container left-0 w-full bg-stone-100">
        <div className="flex justify-between items-center h-12 px-40">
          <div>
            <p className="text-sm text-stone-400">
              HAK CIPTA UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <a className="text-stone-400 underline" href="">
                Ketentuan pengguna
              </a>
            </div>
            <div>
              <a className="text-stone-400 underline" href="">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
