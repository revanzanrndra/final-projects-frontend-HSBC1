import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner1 from "../assets/banner-1.jpg";
import Banner2 from "../assets/banner-2.jpg";

function Home() {
  return (
    <>
      <Header />
      <section className="">
        <div className="min-h-screen flex">
          <img
            className="w-4/6 min-h-screen object-cover object-right-top"
            src={Banner1}
          />
          <div className="text-left pt-96 ml-20">
            <p className="font-bold tracking-wide text-3xl mb-5 ">
              Blazer Warna Abu Abu
            </p>
            <p className="font-semibold text-lg mb-2">
              Potongan skinny fat yang nyaman &amp; tidak terasa ketat.
            </p>
            <p className="font-bold text-2xl">Rp.799.000</p>
          </div>
        </div>
        <div className="min-h-screen flex">
          <img
            className="w-4/6 min-h-screen object-cover object-right-top"
            src={Banner2}
          />
          <div className="text-left pt-96 ml-20">
            <p className="font-bold tracking-wide text-3xl mb-5 ">
              Kemeja Pria Warna Biru Laut
            </p>
            <p className="font-semibold text-lg mb-2">
              Design yang casual dan terlihat menarik.
            </p>
            <p className="font-bold text-2xl">Rp.799.000</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
