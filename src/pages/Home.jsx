import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner1 from "../assets/banner-1.jpg";
import Banner2 from "../assets/banner-2.jpg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  return (
    <>
      <Header />
      <section className="">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </>
  );
}

export default Home;
