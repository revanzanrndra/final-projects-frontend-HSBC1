import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function Detail() {
  const [product, setProduct] = useState([])
  const { id } = useParams();

    axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            setProduct(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

  return (
    <>
      <Header />
      <div>
        <div className="text-gray-500 text-xs pt-3">
          <a href="/" className="underline">
            UNIQLO
          </a>
          <span> / </span>
          <a href="" className="underline">
            WANITA
          </a>
          <span> / </span>
          <span>ATASAN</span>
          <span> / </span>
          <a href="" className="underline">
            T-SHIRT LENGAN PANJANG
          </a>
          <span> / </span>
          <span>
            {product.title}
          </span>
        </div>
        <div className="flex gap-20 pt-10">
          <div className="">
            <div className="flex items-start pb-10">
              <div className="grid grid-cols-2 gap-1 gap-y-6 pr-8">
                <button className="p-1 border border-black">
                  <img
                    src={product.image}
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459793/sub/idgoods_459793_sub7.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459793/sub/idgoods_459793_sub9.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459793/sub/goods_459793_sub11.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459793/sub/goods_459793_sub14.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459793/sub/goods_459793_sub17.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459793/sub/goods_459793_sub18.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459793/sub/goods_459793_sub19.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
                <button>
                  <img
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459793/sub/idgoods_459793_sub23.jpg?width=60"
                    width={50}
                    height={50}
                  />
                </button>
              </div>
              <div>
                <img
                  className=""
                  src= {product.image}
                  width={519}
                  height={519}
                />
                <p>1/9</p>
              </div>
            </div>
            <div className="flex justify-between pb-4">
              <p className="text-lg font-bold">DESKRIPSI</p>
              <div className="text-sm">
                <p className="text-slate-500">Kode Produk:</p>
                <p className="text-slate-500">{product.id}</p>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div
              id="ikhtisar"
              className="flex justify-between text-md py-4 cursor-pointer"
            >
              <p>Ikhtisar</p>
              <i
                data-feather="chevron-down"
                className="text-slate-700 chevron-down-ikhtisar transition duration-200 ease-in-out"
              />
            </div>
            <p id="ikhtisar-paragraf" className="pt-5 pl-8 pb-3 hidden">
              - 'HEATTECH' dengan fitur menahan panas dan menyerap panas plus
              fleece penahan panas.
              <br />
              - Bahan campuran akrilik-rayon-fleece yang lembut.
              <br />
              - Terasa elastis untuk kenyamanan.
              <br />
              - Desain turtleneck untuk kehangatan ekstra.
              <br />
              - Potongan leluasa di bagian bahu untuk gaya santai.
              <br />
              - Serbaguna dan mudah dipadankan.
              <br />- Cocok dipadukan dengan bawahan apa pun.
            </p>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div
              id="material"
              className="flex justify-between text-md py-4 cursor-pointer"
            >
              <p>Material</p>
              <i
                data-feather="chevron-down"
                className="text-slate-700 chevron-down-material transition duration-200 ease-in-out"
              />
            </div>
            <p id="material-paragraf" className="pt-5 pl-8 pb-3 hidden">
              Kode Produk 459793
              <br />
              Harap dicatat bahwa produk ini mungkin memiliki ID produk yang
              berbeda, meskipun itu <br />
              adalah produk yang serupa.
              <br />
              <span className="font-bold">DETAIL KAIN</span>
              <br />
              70% Akrilat, 30% Viskosa
              <br />
              <span className="font-bold">INSTRUKSI PENCUCIAN</span>
              <br />
              Dicuci dengan mesin menggunakan air dingin, kecepatan putaran
              rendah, Tidak boleh <br />
              dilakukan dry clean, Jangan gunakan mesin pengering.
              <br />- Beberapa warna produk mungkin tidak tersedia.
            </p>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div className="flex justify-between text-md py-4 cursor-pointer">
              <a href="">Kebijakan Pengembalian</a>
              <i data-feather="chevron-right" className="text-slate-700" />
            </div>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div className="flex mt-16 mb-5">
              <p className="font-bold text-lg">ULASAN</p>
              <div className="mt-1 flex">
                <div className="ml-6">
                  <img src="assets/star.png" width="" height="" />
                </div>
                <a className="text-sm ml-2" href="">
                  (23)
                </a>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-2 mb-8" />
            <div className="flex gap-32">
              <div>
                <p className="font-bold mb-4">RATING</p>
                <div className="flex">
                  <img src="assets/starpack.png" width="" height="" />
                  <div className="text-sm">
                    <p className="pb-4">(22)</p>
                    <p className="pb-4">(1)</p>
                    <p className="pb-4">(0)</p>
                    <p className="pb-4">(0)</p>
                    <p>(0)</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold mb-4">UKURAN YANG PAS</p>
                <div className="ml-10">
                  <div className="flex justify-between font-bold text-sm">
                    <p>KETAT</p>
                    <p className="text-center">
                      UKURAN
                      <br />
                      PAS
                    </p>
                    <p>LONGGAR</p>
                  </div>
                  <img className="ml-4" src="assets/slider.png" />
                </div>
              </div>
            </div>
            <button className="border-black border font-bold w-2/5 py-2 mt-8 mb-3">
              TULIS ULASAN
            </button>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <p className="font-bold my-4">24 Ulasan</p>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div>
              <div className="flex justify-between items-center mt-6">
                <p className="font-bold text-lg">WORTH IT</p>
                <p className="text-sm text-slate-500">31/08/2023</p>
              </div>
              <img src="assets/s5.png" className="my-4" />
              <p>
                Ukuran yang dibeli XXL
                <br />
                Ukuran yang pas: Ukuran pas
                <br />
                Bahannya alus banget bagus plus lagi promo jadi makin worth it.
                <br />
              </p>
              <p className="py-3">
                <span className="font-bold">ANITA </span>
                <span className="text-slate-500">
                  <span> · Wanita </span>
                  <span>· 25 sampai 34 tahun </span>
                  <span>· Tinggi: 156 - 160cm </span>
                  <span>· Bobot: 51 - 55kg </span>
                  <span>
                    · Ukuran sepatu: <br />
                    EU38 
                  </span>
                  <span>· JABODETABEK</span>
                  <span className="text-slate-500"> · JABODETABEK </span>
                </span>
              </p>
            </div>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div>
              <div className="flex justify-between items-center mt-6">
                <p className="font-bold text-lg">PERFECT FOR WINTER</p>
                <p className="text-sm text-slate-500">29/08/2023</p>
              </div>
              <img src="assets/s5.png" className="my-4" />
              <p>
                Ukuran yang dibeli: M<br />
                Ukuran yang pas: Ukuran pas
                <br />
                Warm, soft and very comfy... looks expensive on me
                <br />
              </p>
              <p className="py-3">
                <span className="font-bold">BUNBOO </span>
                <span className="text-slate-500">
                  <span> · Wanita </span>
                  <span>· 25 sampai 34 tahun </span>
                  <span>· Tinggi: 156 - 160cm </span>
                  <span>· Bobot: 51 - 55kg </span>
                  <span>
                    · Ukuran sepatu: <br />
                    EU38 
                  </span>
                  <span>· JABODETABEK</span>
                  <span className="text-slate-500"> · JABODETABEK </span>
                </span>
              </p>
            </div>
            <div className="bg-gray-200 py-[1px] mt-2" />
            <div>
              <div className="flex justify-between items-center mt-6">
                <p className="font-bold text-lg">TERASA HANGAT DAN LEMBUT</p>
                <p className="text-sm text-slate-500">29/08/2023</p>
              </div>
              <img src="assets/s5.png" className="my-4" />
              <p>
                Ukuran yang dibeli: L<br />
                Ukuran yang pas: Ukuran pas
                <br />
                Sangat cocok digunakan waktu cuaca dingin karena terasa hangat
                di kulit, namun tetap <br />
                lembut dan ringan. Tidak terlalu tebal jadi terasa nyaman saat
                digunakan.
                <br />
              </p>
              <p className="py-3">
                <span className="font-bold">ANANDYA </span>
                <span className="text-slate-500">
                  <span>· Wanita </span>
                  <span>· 25 sampai 34 tahun </span>
                  <span>· Tinggi: 156 - 160cm </span>
                  <span>· Bobot: 51 - 55kg </span>
                  <span>
                    · Ukuran sepatu: <br />
                    EU38 
                  </span>
                  <span>· JABODETABEK</span>
                </span>
              </p>
            </div>
            <button className="border-black border font-bold w-2/5 py-2 hover:text-gray-400 hover:border-gray-400 mt-6 mb-20">
              LIHAT LEBIH BANYAK
            </button>
          </div>
          <div id="box-beli">
            <h1 className="text-4xl font-bold">
              {/* HEATTECH Pullover <br />
              Fleece Kerah Tinggi <br />
              Lengan Panjang <br />
              (Turtleneck) */}
              {product.title}
            </h1>
            <div className="flex">
              <div className="pb-5">
                {/* <p className="font-bold line-through py-2">Rp199.000</p> */}
                <p className="text-4xl font-bold text-red-500">${product.price}</p>
                <p className="text-red-500">
                  Limited Offer dari 25 Aug 2023 - 31 Aug <br />
                  2023
                </p>
              </div>
              <div className="flex mt-4">
                <div>
                  <img src="assets/star.png" width="" height="" />
                </div>
                <a className="text-sm" href="">
                  (23)
                </a>
              </div>
            </div>
            <p>
              {product.description}
            </p>
            <div className="bg-gray-200 py-[1px] my-5" />
            <p className="text-xs font-bold">WARNA: 46 YELLOW</p>
            <div className="grid grid-cols-8 gap-1 my-4">
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-gray-100"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-gray-200"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-gray-700"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-black"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-pink-200"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-red-400"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-yellow-700"
              />
              <a
                href=""
                className="box-content border-2 border-black hover:border-gray-400 h-10 w-10 bg-yellow-500"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-green-800"
              />
              <a
                href=""
                className="box-content border-2 border-white hover:border-black h-10 w-10 bg-blue-950"
              />
            </div>
            <p className="text-xs font-bold">UKURAN: WANITA S</p>
            <div className="grid grid-cols-8 gap-1 my-4">
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-gray-100 hover:border-black h-10 w-10"
              >
                XS
              </a>
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-black hover:border-gray-400 h-10 w-10 bg-black text-white"
              >
                S
              </a>
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-gray-100 hover:border-black h-10 w-10"
              >
                M
              </a>
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-gray-100 hover:border-black h-10 w-10"
              >
                L
              </a>
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-gray-100 hover:border-black h-10 w-10"
              >
                XL
              </a>
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-gray-100 hover:border-black h-10 w-10"
              >
                XXL
              </a>
              <a
                href=""
                className="flex items-center justify-center box-content border-2 border-gray-100 hover:border-black h-10 w-10"
              >
                3XL
              </a>
            </div>
            <button className="border-2 p-2 px-20 border-black font-bold hover:text-gray-400 hover:border-gray-400 mb-4">
              CEK BERDASARKAN TINGGI BADAN
            </button>
            <div className="flex justify-between">
              <p className="text-xs font-bold">JUMLAH</p>
              <div className="flex">
                <img src="assets/ukuran.png" width="" height="" />
                <a href="" className="underline text-xs font-bold">
                  GRAFIK UKURAN
                </a>
              </div>
            </div>
            <div className="w-32">
              <button
                id="box-jumlah"
                className="border p-2 border-slate-500 mt-3 flex w-full justify-between"
              >
                <p className="pl-1 text-base">1</p>
                <i
                  data-feather="chevron-down"
                  className="text-slate-500 chevron-down-jumlah duration-200 ease-in-out"
                />
              </button>
              <div
                id="bar-jumlah"
                className="border-b border-l border-r border-slate-700 flex flex-col text-base hidden"
              >
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  1
                </button>
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  2
                </button>
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  3
                </button>
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  4
                </button>
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  5
                </button>
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  6
                </button>
                <button className="pr-24 py-2 hover:bg-slate-100 hover:text-slate-500">
                  7
                </button>
              </div>
              <p id="p-jumlah" className="text-sm text-gray-500 pb-1 pt-2">
                Stok hampir habis
              </p>
            </div>
            <button className="text-white font-bold bg-red-600 p-2 w-full my-5 hover:bg-red-500">
              TAMBAH KE KERANJANG
            </button>
            <div className="flex gap-4">
              <button className="font-bold p-2 w-1/2 border border-black">
                TAMBAH KE WISHLIST
              </button>
              <button className="font-bold p-2 w-1/2 border border-black">
                CARI STOK DI TOKO
              </button>
            </div>
            <div className="bg-gray-200 py-[1px] mt-4 mb-6" />
            <p className="text-sm font-semibold mb-3">BAGIKAN</p>
            <div className="flex gap-3">
              <button>
                <img
                  className="rounded-md"
                  src="assets/x.png"
                  width=""
                  height=""
                />
              </button>
              <button>
                <img
                  className="rounded-md"
                  src="assets/f.png"
                  width=""
                  height=""
                />
              </button>
            </div>
          </div>
        </div>
        <p className="font-bold text-lg mb-4">Rekomendasi Gaya</p>
        <div className="flex justify-between mb-20">
          <img
            src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23080201132_official_styling_120017651_c-600-800"
            width={293}
            height={389}
          />
          <img
            src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230821061537_official_styling_120017894_c-600-800"
            width={293}
            height={389}
          />
          <img
            src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230821061537_official_styling_120017895_c-600-800"
            width={293}
            height={389}
          />
          <img
            src="https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/230821061537_official_styling_120017897_c-600-800"
            width={293}
            height={389}
          />
        </div>
        <p className="font-bold text-lg">Referensi StyleHint</p>
        <p className="mb-4">
          Temukan berbagai inspirasi gaya dari komunitas global
        </p>
        <div className="flex justify-between mb-32">
          <div>
            <img
              src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_uq_id_photo_230817_1155013_c-600-800"
              width={293}
              height={389}
              className="pb-2"
            />
            <div className="flex">
              <img
                className="rounded-full"
                src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_user_5196613_c-50-50"
                width={34}
                height={34}
              />
              <div className="text-xs pl-1">
                <p>Sekar 169 cm</p>
                <p className="text-gray-400">Ukuran: M</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_uq_id_photo_230817_1154946_c-600-800"
              width={293}
              height={389}
              className="pb-2"
            />
            <div className="flex">
              <img
                className="rounded-full"
                src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_user_5018485_c-50-50"
                width={34}
                height={34}
              />
              <div className="text-xs pl-1">
                <p>Putri 159 cm</p>
                <p className="text-gray-400">Ukuran: S</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_uq_id_photo_230816_1154162_c-600-800"
              width={293}
              height={389}
              className="pb-2"
            />
            <div className="flex">
              <img
                className="rounded-full"
                src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_user_5196506_c-50-50"
                width={34}
                height={34}
              />
              <div className="text-xs pl-1">
                <p>Nosi 158 cm</p>
                <p className="text-gray-400">Ukuran: M</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_uq_id_photo_230730_1143791_c-600-800"
              width={293}
              height={389}
              className="pb-2"
            />
            <div className="flex">
              <img
                className="rounded-full"
                src="https://api.fastretailing.com/ugc/v1/uq/id/SR_IMAGES/ugc_stylehint_user_5005633_c-50-50"
                width={34}
                height={34}
              />
              <div className="text-xs pl-1">
                <p>Maria 169 cm</p>
                <p className="text-gray-400">Ukuran: M</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-4xl font-bold pb-8">BARU SAJA DILIHAT</p>
        <div>
          <div className="w-[293px]">
            <img
              src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459793/item/idgoods_46_459793.jpg?width=320"
              width={293}
              height={293}
            />
            <div className="flex justify-between text-gray-400 py-4 font-semibold text-sm">
              <p>WANITA</p>
              <p>XS-3XL</p>
            </div>
          </div>
          <p className="font-bold">
            HEATTECH Pullover Fleece Kerah <br />
            Tinggi Lengan Panjang (Turtleneck)
          </p>
          <p className="text-sm font-bold py-4">Rp149.000</p>
          <div className="flex mb-5">
            <img src="Assets/star.png" />
            <p>(23)</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
