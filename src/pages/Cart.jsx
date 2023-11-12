import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart() {
  return (
    <>
      <Header />
      <div className="container px-40 py-4 font-normal">
        <div className="grid justify-self-auto">
          <ol className="flex text-xs gap-2 flex-row text-cGray">
            <li className="underline">
              <a href="#">UNIQLO </a>
            </li>
            <li>/</li>
            <li className="underline">
              <a href="#">KERANJANG BELANJA </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="px-40 py-8 text-4xl font-bold mb-14">
        <h1>KERANJANG BELANJA</h1>
      </div>
      <div className="container flex gap-4 pl-40 pr-96 py-4 font-normal">
        <div className="container flex gap-1">
          <div>
            <img
              src="../public/cartimage.png"
              alt=""
              width={250}
              height={700}
            />
          </div>
          <div>
            <p
              title="T-shirt Oversize Garis Lengan Half"
              className="font-semibold text-lg"
            >
              T-shirt Oversize Garis Lengan Half
            </p>
            <p className="text-slate-400">Kode Produk :</p>
            <p>Warna :</p>
            <p>Ukuran :</p>
            <br />
            <p>Rp199.000</p>
            <br />
            <p>JUMLAH</p>

            <select name="" id="" className="border border-spacing-8">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <div className="flex justify-end">SUBTOTAL :</div>
          </div>

          <button className="flex mt-0 justify-end">
            <img src="../public/close.png" alt="" width={20} height={20} />
          </button>
        </div>

        <div className="mr-36">
          <p title="ringkasan pesanan" className="font-semibold text-lg">
            RINGKASAN PESANAN
          </p>
          <br />
          <p>Subtotal produk</p>
          <br />
          <p>SUBTOTAL</p>
          <br />
          <p>TOTAL PESANAN</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
