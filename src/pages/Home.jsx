import Footer from "../components/Footer";
import Header from "../components/Header";
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
                src="../public/images/banner-1.jpg"
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
                src="../public/images/banner-2.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-4/6 min-h-screen object-cover object-right-top"
                src="../public/images/banner-3.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-4/6 min-h-screen object-cover object-right-top"
                src="../public/images/banner-5.jpg"
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

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full bg-none min-h-screen -z-10 object-cover object-right-top"
                src="../public/images/bgbanner-1.jpg"
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
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-2.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-3.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-4.jpg"
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

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full bg-none min-h-screen -z-10 object-cover object-right-top"
                src="../public/images/bgbanner-5.jpg"
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
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-6.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-7.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-8.jpg"
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

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full bg-none min-h-screen -z-10 object-cover object-right-top"
                src="../public/images/banner-6.jpg"
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
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/banner-4.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-3.jpg"
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
          <SwiperSlide>
            <div className="min-h-screen flex">
              <img
                className="w-full min-h-screen object-cover object-right-top"
                src="../public/images/bgbanner-2.jpg"
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
