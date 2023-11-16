import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "id",
  resources: {
    en: {
      translation: {
        Wanita: "women",
        Pria: "men",
        Anak: "kids",
        Bayi: "baby",
        Bantuan: "Help",
        Toko: "Store Locator",
        Keranjang: "Shoping Cart",
        Tentang: "About Uniqlo",
        Informasi: "Information",
        Pembelianjmlbesar: "Bulk Purchase",
        Akun: "Account",
        Hubungi: "Contact us",
      },
    },
    id: {
      translation: {
        Wanita: "wanita",
        Pria: "pria",
        Anak: "anak",
        Bayi: "bayi",
        Bantuan: "Bantuan",
        Toko: "Pencari lokasi toko",
        Keranjang: "Keranjang",
        Tentang: "Tentang Uniqlo",
        Informasi: "Informasi",
        Pembelianjmlbesar: "Pembelian Jumlah Besar",
        Akun: "Akun",
        Hubungi: "Hubungi",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
