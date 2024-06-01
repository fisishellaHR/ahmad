import Logo from "/src/assets/logo.png";
import person from "/src/assets/person-circle.png";
import newsn from "/src/assets/news.png";
import nmbap from "/src/assets/mbapenews.png";
import lnvoli from "/src/assets/lnmega.png";
import cnnlogo from "/src/assets/CNN .png";
import insta from "/src/assets/instagram.png";
import gplogo from "/src/assets/gpstorelogo.png";
import foot from "/src/assets/Footer.png";
import nindo from "/src/assets/Indonesianews.png";
import nlakers from "/src/assets/lakersnews.png";
import ntimnas from "/src/assets/timnasnews.png";
import nolimpiade from "/src/assets/olimpiadenews.png";
import nminsoc from "/src/assets/minisocnews.png";
import lnfo from "/src/assets/lnfone.png";
import lngim from "/src/assets/lngym.png";
import lnrem from "/src/assets/lnrm.png";
import fotlov from "/src/assets/fotlove.png";
import icontwitter from "/src/assets/twitter.png";
import iconfacebook from "/src/assets/facebook.png";
import { Link } from "react-router-dom";

export const NewsLayout = () => {
  return (
    <section>
      {/* Navbar */}
      <div className="flex justify-between items-center px-[41px] py-[22px] shadow-custom fixed top-0 w-full bg-white z-10">
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="flex items-center gap-11">
          <a
            href=""
            className="font-dm text-15px font-bold  hover:text-primary"
          >
            Home
          </a>
          <a
            href=""
            className="font-dm text-15px font-bold    hover:text-primary"
          >
            Booking
          </a>
          <a href="" className="text-primary font-dm text-15px font-bold ">
            News
          </a>
          <a href="">
            <img src={person} alt="Person" className="w-[58px]" />
          </a>
        </div>
      </div>
      {/* Navbar End */}

      {/* isi Content News Start */}
      <div className="grid-cols-12  px-[41px] mt-[200px]   ">
        <div className="container ">
          <div className=" flex gap-x-9   ">
            <div>
              <Link to="/pageNews">
                <img src={newsn} alt="" className="" />
                <h1 className="text-[20px] font-dm text-15px font-bold text-left  w-[339px] py-[9px] ">
                  Real Madrid juara LaLiga 2023/24 setelah Barcelona kalah dari
                  Girona
                </h1>
                <p className=" w-[339px] font-dm text-18px  font-normal text-left  ">
                  Mereka mengklaim jika Nathan merupakan pemain Swansea City
                  dengan follower.......
                </p>
              </Link>
            </div>

            <div className="container grid grid-rows-3 grid-flow-col gap-3 ">
              <div className=" flex gap-x-[12px]">
                <img src={nmbap} alt="" className="w-56 h-32  px-[12px]]" />
                <div className="w-[430px]">
                  <h2 className="text-[15px] font-dm font-bold text-left  ">
                    Kylian Mbappe resmi berlabuh ke <br />
                    Real Madrid musim depan secara transfer bebas
                  </h2>
                  <a
                    href=""
                    className="text-[10px] font-dm text-10px text-left text-secondary"
                  >
                    Read more..........
                  </a>
                </div>
              </div>
              <div className=" flex gap-x-[12px]">
                <img src={nindo} alt="" className="w-56 h-32  px-[12px]]" />
                <div className="w-[430px]">
                  <h2 className="text-[15px] font-dm font-bold text-left  ">
                    Indonesia kembali meraih satu <br /> kemenangan di lanjutan
                    piala <br /> All England
                  </h2>
                  <a
                    href=""
                    className="text-[10px] font-dm text-10px text-left text-secondary"
                  >
                    Read more..........
                  </a>
                </div>
              </div>
              <div className=" flex gap-x-[22px]">
                <img src={nlakers} alt="" className="w-56 h-32  px-[12px]]" />
                <div className="w-[430px]">
                  <h2 className="text-[15px] font-dm font-bold text-left  ">
                    Lakers dipastikan selangkah lagi <br /> menuju juara NBA
                    pada musim <br /> 2023/2024
                  </h2>
                  <a
                    href=""
                    className="text-[10px] font-dm  text-left text-secondary"
                  >
                    Read more..........
                  </a>
                </div>
              </div>
              <div className=" flex gap-x-[22px]">
                <img src={ntimnas} alt="" className="w-56 h-32  px-[12px]]" />
                <div className="w-[430px]">
                  <h2 className="text-[15px] font-dm font-bold text-left ">
                    Timnas Futsal Indonesia sukses lolos ke <br /> final Piala
                    AFF Futsal 2024
                  </h2>
                  <a
                    href=""
                    className="text-[10px] font-dm  text-left text-secondary"
                  >
                    Read more..........
                  </a>
                </div>
              </div>
              <div className=" flex gap-x-[22px]">
                <img
                  src={nolimpiade}
                  alt=""
                  className="w-56 h-32  px-[12px]]"
                />
                <div className="w-[430px]">
                  <h2 className="text-[15px] font-dm font-bold text-left ">
                    Olimpiade Musim Panas 2024 secara resmi bernama Games of the
                    XXXIII Olympiad
                  </h2>
                  <a
                    href=""
                    className="text-[10px]  font-dm  text-left text-secondary"
                  >
                    Read more..........
                  </a>
                </div>
              </div>
              <div className=" flex gap-x-[22px]">
                <img src={nminsoc} alt="" className="w-56 h-32  px-[12px]]" />
                <div className="w-[430px]">
                  <h2 className="text-[15px] font-bold  ">
                    Mini soccer semakin digemari oleh para kalangan dari usia
                    muda hingga tua di Indonesia
                  </h2>
                  <a href="" className="text-[10px]">
                    Read more..........
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[30px]">
            <h1 className="font-dm  font-bold text-left text-[30px]">
              Latest News
            </h1>
            <div className="w-[223px] bg-black h-1 ">
              <hr />
            </div>
          </div>
          <div className="container flex gap-7 mt-[30px]">
            <div className="gird grid-cols-3 grid-rows-3">
              <img src={lnvoli} alt="" className="w-[300px] h-[300px]" />
              <div className="flex  items-center px-4 gap-3">
                <img src={cnnlogo} alt="" className="w-[28px]" />
                <p className="text-14px text-secondary py-[14px]">
                  CNN Indonesia - 1 mnt ago
                </p>
              </div>
              <h2 className="font-dm text-15px font-bold text-left py-2">
                Gaji Megawati di Red Sparks Bisa Tembus Rp2,4 Miliar
              </h2>
              <p className="font-dm text-10px font-normal text-left">
                Gaji Megawati Hangestri Pertiwi di Red Sparks. Pevoli putri
                Indonesia ini resmi memperpanjang kontrak dengan Red Sparks.
              </p>
            </div>
            <div className="gird grid-cols-3 grid-rows-3">
              <img src={lnfo} alt="" className="w-[300px] h-[300px]" />
              <div className="flex  items-center px-4 gap-3">
                <img src={cnnlogo} alt="" className="w-[28px]" />
                <p className="text-14px text-secondary py-[14px]">
                  CNN Indonesia - 1 mnt ago
                </p>
              </div>
              <h2 className="font-dm text-15px font-bold text-left py-2">
                Keajaiban! Kalahkan Max Verstappen, Lando Norris Menang F1 Miami
                2024
              </h2>
              <p className="font-dm text-10px font-normal text-left">
                Pembalap McLaren Mercedes Lando Norris merasa sangat bangga
                setelah memenangi Grand Prix (GP) Formula 1 pertamanya dengan
                memenangi GP Miami
              </p>
            </div>
            <div className="gird grid-cols-3 grid-rows-3">
              <img src={lngim} alt="" className="w-[500px] h-[300px]" />
              <div className="flex  items-center px-4 gap-3">
                <img src={cnnlogo} alt="" className="w-[28px]" />
                <p className="text-14px text-secondary py-[14px]">
                  CNN Indonesia - 1 mnt ago
                </p>
              </div>
              <h2 className="font-dm text-15px font-bold text-left py-2">
                Ramai-ramai Berotot di Gym Majapahit
              </h2>
              <p className="font-dm text-10px font-normal text-left">
                Para pengguna akun sosial media TikTok ramai-ramai menjuluki
                tempat semacam ini dengan julukan gym Majapahit.
              </p>
            </div>
            <div className="gird grid-cols-3 grid-rows-3">
              <img src={lnrem} alt="" className="w-[300px] h-[300px]" />
              <div className="flex  items-center px-4 gap-3">
                <img src={cnnlogo} alt="" className="w-[28px]" />
                <p className="text-14px text-secondary py-[14px]">
                  CNN Indonesia - 1 mnt ago
                </p>
              </div>
              <h2 className="font-dm text-15px font-bold text-left py-2">
                Real Madrid Juara Liga Spanyol 2023/2024!
              </h2>
              <p className="font-dm text-10px font-normal text-left">
                Real Madrid menang atas Cadiz di lanjutan Liga Spanyol, Sabtu
                (4/5) malam WIB dengan skor 3-0. Setelahnya, Barcelona kalah 2-4
                dari Girona.
              </p>
            </div>
          </div>
          <button className="border-2 border-[#FF8400] mx-auto text-[#FF8400] text-center m-[40px] flex items-center justify-center h-[60px] w-[247px] rounded-[20px] hover:text-white hover:bg-primary hover:border-white ">
            <p>Lihat Lainya</p>
          </button>
        </div>
      </div>
      {/* isi Content News End*/}

      {/* Footer  Start */}
      <div className=" bg-[#FF8400] px-[41px] py-[50px]">
        <div className=" flex items-center justify-around">
          <div className="text-center">
            <img src={foot} alt="" />
            <p className="font-dm text-18px font-normal text-left text-white">
              Sporking is a multiplatform-based <br />
              application that can be used for <br />
              booking and more.
            </p>
          </div>
          <div className="text-left">
            <h1 className="py-3 font-dm text-18px font-bold text-left text-white">
              Contact Us
            </h1>
            <div className="font-dm text-18px font-normal text-left text-white">
              <p>+62 854-4123-5553</p>
              <p>sporking@gmail.com</p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="py-2 font-dm text-18px font-bold text-left text-white">
              Follow Us
            </h1>
            <div className="flex justify-center items-center gap-2 py-4">
              <a href="">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="">
                <img src={icontwitter} alt="Instagram" />
              </a>
              <a href="">
                <img src={iconfacebook} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="py-2 font-dm text-18px font-bold text-left text-white">
              Lebih Mudah dengan aplikasi
            </h1>
            <img src={gplogo} alt="Google Play Logo" className="py-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-3 px-2 text-primary">
        Crafted with{" "}
        <a href="">
          <img src={fotlov} alt="" />
        </a>{" "}
        by JAYALAGA. All Rights Reserved.
      </div>
      {/* Footer  End */}
    </section>
  );
};
