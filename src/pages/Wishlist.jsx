import Header from "../components/Header";
import Footer from "../components/Footer";

function Wishlist() {
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
              <a href="#">WISHLIST </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="px-40 py-8 text-4xl font-bold mb-14">
        <h1>WISHLIST</h1>
      </div>
      <div className="container flex gap-4 px-10 py-10 mx-40 font-normal border mb-8">
        <div className="container flex gap-2">
          <div>
            <img
              src="../public/cartimage.png"
              alt=""
              width={200}
              height={400}
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
