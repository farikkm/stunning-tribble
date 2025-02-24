import Slider from "@/components/Slider";
import Button from "@/components/ui/Button";

import heroImg from "@/assets/images/hero.png"
import shopImg from "@/assets/images/shops/shop.png"

// Images
import img1 from "@/assets/images/statistics/1.svg";
import img2 from "@/assets/images/statistics/2.svg";
import img3 from "@/assets/images/statistics/3.svg";
import img4 from "@/assets/images/statistics/4.svg";

function Hero() {
    return (
        <>
            <section id="hero" className="md:flex flex-row-reverse justify-center items-center px-16">
                <div className="hero-img md:h-full">
                    <img className="w-full md:h-auto" src={heroImg} alt="hero-img" />
                </div>
                <div className="hero-content mt-5 px-6">
                    <h2 className="text-4xl font-black *:uppercase">
                        <span className="block drop-shadow-2xl bg-gradient-to-br from-[#6A6DBD] to-[#25254C] text-transparent bg-clip-text">
                            Первый текст
                        </span>
                        <span className="bg-gradient-to-b drop-shadow-2xl from-[#fa557b] to-[#bb2649] bg-clip-text text-transparent ml-[60px]">
                            Второй текст
                        </span>
                    </h2>
                    <p className="mt-10 mb-8 text-xl">
                        Приглашаем вас посетить современный тематически-развлекательный центр в
                        городе Самарканд - ТРЦ Family Park.
                    </p>

                    <div className="flex justify-center"><button
                        className="py-5 px-6 font-bold text-white uppercase bg-gradient-to-br rounded-4xl from-[#6A6DBD] to-[#25254C]"
                    >
                        Ознокомиться сейчас
                    </button></div>
                </div>
            </section>
        </>

    )
}

function Statistics() {
    return (
        <section id="statistics" className="z-20">
            <div className="statistics-top py-7 px-5 bg-gradient-to-br from-[#FA557B] to-[#BB2649] text-white">
                <h2 className="text-4xl max-w-sm  mx-auto text-center">ОТКРОЙТЕ <span className="font-black">МИР РАЗВЛЕЧЕНИЙ</span> ТОЛЬКО <span className="font-black">У НАС</span></h2>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div>
                        <h3 className="text-4xl font-bold">80+ </h3>
                        <span className="text-sm font-normal">Магазинов, ресторанов и развлечений</span>
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
                        <span className="text-sm font-normal">Хотите быть всегда на стиле? Крупные мировые бренды отлично подберут вам лук на сезон!</span>
                    </div>
                </div>
            </div>
            <div className="statistics-bottom mt-4 grid grid-cols-2 max-w-[420px] mx-auto rounded-4xl overflow-hidden *:text-white">
                <div className="relative p-3 pr-10 bg-[#FD7824] h-auto">
                    <div className="flex flex-col gap-8">
                        <h2 className="features-statistics__link">Развлечения</h2>
                        <p className="min-w-[180px] text-sm">
                            Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно
                            весело провести время с друзьями и семьей
                        </p>
                    </div>
                    <img className="absolute top-10 right-0" src={img1} alt="features-statistics-img" />
                </div>
                <div className="relative p-3 pr-10 bg-[#CF3559] h-auto">
                    <div className="flex flex-col gap-8">
                        <h2 className="features-statistics__link">Развлечения</h2>
                        <p className="min-w-[180px] text-sm">
                            Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно
                            весело провести время с друзьями и семьей
                        </p>
                    </div>
                    <img className="absolute top-10 right-0" src={img2} alt="features-statistics-img" />
                </div>
                <div className="relative p-3 pr-10 bg-[#8A6ABD] h-auto">
                    <div className="flex flex-col gap-8">
                        <h2 className="features-statistics__link">Развлечения</h2>
                        <p className="min-w-[180px] text-sm">
                            Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно
                            весело провести время с друзьями и семьей
                        </p>
                    </div>
                    <img className="absolute top-10 right-0" src={img3} alt="features-statistics-img" />
                </div>
                <div className="relative p-3 pr-10 bg-[#186E85] h-auto">
                    <div className="flex flex-col gap-8">
                        <h2 className="features-statistics__link">Развлечения</h2>
                        <p className="min-w-[180px] text-sm">
                            Ледовый каток, Картинг, Боулинг, Кинотеатр, где можно
                            весело провести время с друзьями и семьей
                        </p>
                    </div>
                    <img className="absolute top-10 right-0" src={img4} alt="features-statistics-img" />
                </div>
            </div>
        </section>
    )
}

function Shops() {
    return (
        <section id="shops">
            <div className="fixed left-0 top-0 w-full h-90 -z-1 bg-gradient-to-br from-[#25254C] to-[#6A6DBD]" />
            <div className="shops__content pt-5 px-5 text-white">
                <h2 className="text-5xl font-black uppercase">Магазины</h2>
                <button className="mt-5 py-2 px-5 text-[#25254C] bg-[#D1D1FF] rounded-4xl">Посмотреть все</button>

                <div className="mt-5 grid gap-2 grid-cols-2 sm:grid-cols-3 *:text-[#25254C] *:max-w-[200px]">
                    <div className="p-5 bg-gradient-to-br from-[#CECFEE] to=[#FFF] backdrop-blur-xl shadow-md shadow-black rounded-4xl">
                        <img className="rounded-4xl" src={shopImg} alt="shop-img" />
                        <span className="block mt-1 text-xs">Продукты</span>
                        <h4 className="text-lg font-bold">Сarrefour</h4>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#CECFEE] to=[#FFF] backdrop-blur-xl shadow-md shadow-black rounded-4xl">
                        <img className="rounded-4xl" src={shopImg} alt="shop-img" />
                        <span className="block mt-1 text-xs">Продукты</span>
                        <h4 className="text-lg font-bold">Сarrefour</h4>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#CECFEE] to=[#FFF] backdrop-blur-xl shadow-md shadow-black rounded-4xl">
                        <img className="rounded-4xl" src={shopImg} alt="shop-img" />
                        <span className="block mt-1 text-xs">Продукты</span>
                        <h4 className="text-lg font-bold">Сarrefour</h4>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#CECFEE] to=[#FFF] backdrop-blur-xl shadow-md shadow-black rounded-4xl">
                        <img className="rounded-4xl" src={shopImg} alt="shop-img" />
                        <span className="block mt-1 text-xs">Продукты</span>
                        <h4 className="text-lg font-bold">Сarrefour</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    const sections = [Hero, Statistics, Shops];

    return (
        <>
            <main id="home" className="home">
                <Slider sections={sections} />
                <div className="buttons hidden md:flex fixed bottom-7 right-27 z-6  gap-3 *:w-[150px] *:text-left *:active:scale-110">
                    <Button>Потерянные вещи</Button>
                    <Button bg="blue">Работа в Family Park</Button>
                </div>
            </main>
        </>
    )
}

export default Home
