import Slider from "@/components/Slider";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

import heroImg from "@/assets/images/hero.png";
import shopImg from "@/assets/images/shops/shop.png";
import Header from "@/components/Header";
import CatalogItem from "@/components/CatalogItem";

// Images
import img1 from "@/assets/images/statistics/1.svg";
import img2 from "@/assets/images/statistics/2.svg";
import img3 from "@/assets/images/statistics/3.svg";
import img4 from "@/assets/images/statistics/4.svg";

// =================================== SECTION =================================== //

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="block md:flex flex-row-reverse justify-center items-center"
      >
        <div className="hero-img md:h-full">
          <img className="w-full md:h-auto" src={heroImg} alt="hero-img" />
        </div>
        <div className="hero-content py-5 px-6">
          <h2 className="text-4xl font-black *:uppercase">
            <span className="block drop-shadow-2xl bg-gradient-to-br from-[#6A6DBD] to-[#25254C] text-transparent bg-clip-text">
              Первый текст
            </span>
            <span className="bg-gradient-to-b drop-shadow-2xl from-[#fa557b] to-[#bb2649] bg-clip-text text-transparent ml-[60px]">
              Второй текст
            </span>
          </h2>
          <p className="mt-10 mb-8 text-xl">
            Приглашаем вас посетить современный тематически-развлекательный
            центр в городе Самарканд - ТРЦ Family Park.
          </p>

          <div className="flex justify-center">
            <button className="py-5 px-6 font-bold text-white uppercase bg-gradient-to-br rounded-4xl from-[#6A6DBD] to-[#25254C]">
              Ознокомиться сейчас
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function Statistics() {
  return (
    <section id="statistics" className="z-20">
      <div className="statistics-top py-7 px-5 bg-gradient-to-br from-[#FA557B] to-[#BB2649] text-white">
        <h2 className="text-4xl max-w-sm  mx-auto text-center">
          ОТКРОЙТЕ <span className="font-black">МИР РАЗВЛЕЧЕНИЙ</span> ТОЛЬКО{" "}
          <span className="font-black">У НАС</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h3 className="text-4xl font-bold">80+ </h3>
            <span className="text-sm font-normal">
              Магазинов, ресторанов и развлечений
            </span>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10+ </h3>
            <span className="text-sm font-normal">Развлекательных точек</span>
          </div>
          <div className="hidden md:block">
            <h3 className="text-4xl font-bold">20+ </h3>
            <span className="text-sm font-normal">Мировых брендов </span>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-normal">
              Хотите быть всегда на стиле? Крупные мировые бренды отлично
              подберут вам лук на сезон!
            </span>
          </div>
        </div>
      </div>
      <div className="statistics-bottom my-4 grid grid-cols-2 max-w-[420px] mx-auto rounded-4xl overflow-hidden *:text-white">
        <div className="relative p-3 pr-10 bg-[#FD7824] h-auto">
          <div className="flex flex-col gap-8">
            <h2 className="features-statistics__link">Развлечения</h2>
            <p className="min-w-[180px] text-sm">
              Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно весело
              провести время с друзьями и семьей
            </p>
          </div>
          <img
            className="absolute top-10 right-0"
            src={img1}
            alt="features-statistics-img"
          />
        </div>
        <div className="relative p-3 pr-10 bg-[#CF3559] h-auto">
          <div className="flex flex-col gap-8">
            <h2 className="features-statistics__link">Развлечения</h2>
            <p className="min-w-[180px] text-sm">
              Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно весело
              провести время с друзьями и семьей
            </p>
          </div>
          <img
            className="absolute top-10 right-0"
            src={img2}
            alt="features-statistics-img"
          />
        </div>
        <div className="relative p-3 pr-10 bg-[#8A6ABD] h-auto">
          <div className="flex flex-col gap-8">
            <h2 className="features-statistics__link">Развлечения</h2>
            <p className="min-w-[180px] text-sm">
              Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно весело
              провести время с друзьями и семьей
            </p>
          </div>
          <img
            className="absolute top-10 right-0"
            src={img3}
            alt="features-statistics-img"
          />
        </div>
        <div className="relative p-3 pr-10 bg-[#186E85] h-auto">
          <div className="flex flex-col gap-8">
            <h2 className="features-statistics__link">Развлечения</h2>
            <p className="min-w-[180px] text-sm">
              Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно весело
              провести время с друзьями и семьей
            </p>
          </div>
          <img
            className="absolute top-10 right-0"
            src={img4}
            alt="features-statistics-img"
          />
        </div>
      </div>
    </section>
  );
}

function Shops() {
  return (
    <section id="shops" className="relative">
      {/* Decor */}
      <div className="absolute left-0 top-0 w-full h-90 -z-1 bg-gradient-to-br from-[#25254C] to-[#6A6DBD]" />
      {/* Content */}
      <div className="shops__content py-5 px-5 text-white">
        <h2 className="text-5xl font-black uppercase">Магазины</h2>
        <Link to={'/catalog'} className="inline-block mt-5 py-2 px-5 text-[#25254C] bg-[#D1D1FF] rounded-4xl">
          Посмотреть все
        </Link>

        <div className="mt-5 grid gap-2 grid-cols-2 sm:grid-cols-3 *:text-[#25254C] *:max-w-[200px]">
          <CatalogItem img={shopImg} catalog="Продукты" name="Carrefour" />
          <CatalogItem img={shopImg} catalog="Продукты" name="Carrefour" />
          <CatalogItem img={shopImg} catalog="Продукты" name="Carrefour" />
          <CatalogItem img={shopImg} catalog="Продукты" name="Carrefour" />
        </div>
      </div>
    </section>
  );
}

function Tenant() {
  return (
    <div id="tenant" className="py-20 px-5 relative">
      <div className="absolute left-0 top-0 w-full h-120 -z-1 bg-gradient-to-br from-[#fa557b] to-[#bb2649]" />
      <div className="*:text-white">
        <h2 className="text-4xl font-black">ХОТИТЕ СТАТЬ НАШИМ АРЕНДАТОРОМ?</h2>
        <p className="text-2xl mt-3 font-light">
          Будьте в курсе мировых премьер в нашем кинопрокате!
        </p>
      </div>
      <div>
        <form
          className="p-10 mt-5 bg-gradient-to-br from-[#F1F1F1] to=[#FFF] backdrop-blur-xl shadow-md shadow-black rounded-4xl"
          action="#"
        >
          <div>
            <div>
              <h3 className="uppercase font-bold mb-2">Ваш бизнес:</h3>
              <label className="flex flex-col mb-3" htmlFor="first-label">
                <span className="text-[#858585] font-bold">
                  Торговый профиль
                </span>
                <select className="*:font-thin py-2 border-b" id="first-label">
                  <option value="Магазин">Магазин</option>
                  <option value="Магазин">Магазин</option>
                  <option value="Магазин">Магазин</option>
                  <option value="Магазин">Магазин</option>
                </select>
              </label>
              <label className="flex flex-col mb-3" htmlFor="second-label">
                <span className="text-[#858585] font-bold">
                  Желаемая площадь
                </span>
                <input
                  className="*:font-thin py-1 border-b"
                  type="text"
                  id="second-label"
                />
              </label>
              <label className="flex flex-col mb-3" htmlFor="third-label">
                <span className="text-[#858585] font-bold">
                  Название бренда/компании
                </span>
                <input
                  className="*:font-thin py-1 border-b"
                  type="text"
                  id="third-label"
                />
              </label>
            </div>
            <div>
              <h3 className="uppercase font-bold mb-2">
                Ваши контактные данные:
              </h3>
              <label className="flex flex-col mb-3" htmlFor="fourth-label">
                <span className="text-[#858585] font-bold">
                  Имя контактного лица
                </span>
                <input
                  className="*:font-thin py-1 border-b"
                  type="text"
                  id="fourth-label"
                />
              </label>
              <label className="flex flex-col mb-3" htmlFor="fifth-label">
                <span className="text-[#858585] font-bold">Почта</span>
                <input
                  className="*:font-thin py-1 border-b"
                  type="text"
                  id="fifth-label"
                />
              </label>
              <label className="flex flex-col mb-3" htmlFor="sixth-label">
                <span className="text-[#858585] font-bold">Телефон</span>
                <input
                  className="*:font-thin py-1 border-b"
                  type="text"
                  id="sixth-label"
                  placeholder="+998 __ ___ __ __"
                />
              </label>
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-gradient-to-br from-[#fa557b] to-[#bb2649] py-4 px-20 rounded-4xl text-white font-bold">
                ОТПРАВИТЬ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer" className="py-10 px-5 bg-[#F2F2F2]">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">+998 94 440 44 40</span>
        <span className="text-2xl font-bold">familypark@gmail.com</span>
        <div className="mt-4 flex gap-3 items-center">
          <img src="/icons/clock.svg" alt="" />
          <span>Пн-Вс с 10:00 до 23:00 </span>
        </div>
      </div>
      <div className="mt-10 mb-7">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">Социальные сети</h3>
            <div className="flex gap-3 items-center">
              <img
                src="/icons/instagram.svg"
                alt="instagram-icon"
                className="w-6"
              />
              <span>Instagram</span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="/icons/telegram.svg"
                alt="instagram-icon"
                className="w-6"
              />
              <span>Telegram</span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="/icons/tiktok.svg"
                alt="instagram-icon"
                className="w-6"
              />
              <span>Tik Tok</span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="/icons/facebook.svg"
                alt="instagram-icon"
                className="h-6 w-6"
              />
              <span>Facebook</span>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="/icons/youtube.svg"
                alt="instagram-icon"
                className="w-6"
              />
              <span>Youtube</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Правила</h3>
            <span>Правила посетителя</span>
            <span>Правила парковки</span>
            <span>Правила размещения рекламы</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="/footerLogo.svg" alt="footer-logo" />
        <h3 className="mt-10 text-2xl text-center">
          Тематически-развлекательный центр в городе Самарканд
        </h3>
      </div>
    </footer>
  );
}

// =================================== HOME PAGE =================================== //

const Home = () => {
  return (
    <>
      <Header />
      <main id="home" className="home mt-25">
        <Hero />
        <Statistics />
        <Shops />
        <Tenant />
        <Footer />
      </main>
      <div className="buttons hidden md:flex fixed bottom-7 right-27 z-6  gap-3 *:w-[150px] *:text-left *:active:scale-110">
        <Button>Потерянные вещи</Button>
        <Button bg="blue">Работа в Family Park</Button>
      </div>
    </>
  );
};

export default Home;
