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
            <section id="hero">
                <div className="hero-img">
                    <img className="w-full" src={heroImg} alt="hero-img" />
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

                <div className="mt-5 grid gap-2 grid-cols-2 *:text-[#25254C]">
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
            <footer>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur inventore ipsum quia vel, provident qui quas amet laudantium doloremque voluptatum eveniet nihil odit velit. Beatae neque tempora blanditiis possimus at sit eius. Porro distinctio nisi at totam quaerat alias eius. Accusamus modi reiciendis error temporibus dolore. Optio, rem. Dolorem nam ad praesentium adipisci atque natus repellat similique, dolore quisquam beatae nostrum voluptas cupiditate possimus? Nobis odio veritatis commodi aliquid incidunt voluptates recusandae consequuntur sapiente velit dolore! Sunt culpa ab dicta beatae amet eum, magnam saepe obcaecati ea repellat tempora rerum harum ratione voluptatum reiciendis? Culpa natus tempore illo laborum. Voluptatum nemo aperiam cum sed! Id voluptas alias ipsum, porro quaerat omnis est neque aut cumque at facilis odio doloremque. Nam eaque voluptatum expedita temporibus incidunt inventore dolorum voluptatem minus, non perferendis totam eum iusto quod aperiam voluptas esse eos adipisci hic soluta ipsam nesciunt eius nihil. Nulla rerum maxime, culpa, eligendi vero, quas consequatur voluptate consequuntur magni possimus optio ratione veritatis nam alias. Voluptates suscipit dolorum quos hic culpa a. Dolorem corrupti officia aliquam cupiditate dicta tenetur mollitia quam recusandae. Beatae incidunt sequi sint velit repellendus itaque nostrum quasi ea quos dicta, neque voluptatum pariatur quo facere error nesciunt alias culpa esse maxime praesentium doloribus vero iusto unde tempore! Repudiandae culpa delectus, laborum quibusdam dolor modi suscipit nesciunt adipisci at incidunt eaque veniam, labore explicabo iure ducimus accusamus. Sed aliquam qui illo facilis ducimus voluptate? Inventore ratione, tempora cupiditate, architecto sequi accusantium est alias ipsum eaque doloremque quos iusto, debitis asperiores ipsam. Obcaecati atque similique quis consequuntur ex iusto, natus omnis harum voluptas in cupiditate dicta fugit dolore ad! Asperiores nam delectus recusandae enim laudantium rem similique voluptatem fugit architecto, tempore modi vero natus aperiam est hic quasi voluptatum! Nemo suscipit incidunt voluptate quis voluptas doloremque optio porro nobis ad dicta mollitia sequi expedita nesciunt, vitae repellendus. Est unde aspernatur atque maxime porro, architecto molestias eligendi voluptatum. Laboriosam laudantium voluptates delectus alias doloribus laborum excepturi distinctio odio aperiam suscipit, deserunt accusantium dicta qui neque corrupti voluptatibus eveniet dolorem fugiat. Esse eaque praesentium rerum sapiente aperiam doloribus vero voluptatem recusandae rem explicabo incidunt ipsa voluptates repellat, illum dolor nisi fuga nesciunt voluptas tempore ex ut nulla sit fugit. Quisquam harum eligendi unde molestias perferendis a, ad tempora temporibus sit qui enim, totam iusto labore neque at et. Eaque quibusdam quia similique quaerat, voluptatibus nisi itaque sapiente totam dignissimos aliquid? Quam fugiat vitae odio quis itaque, aspernatur obcaecati quaerat praesentium porro laborum ipsum voluptas excepturi unde doloremque quisquam, accusantium quas, repellendus impedit quia! Inventore repellendus tenetur, officiis maiores culpa velit error sunt quam. Sit, explicabo quis! Provident aperiam placeat inventore eum consequuntur distinctio accusantium cupiditate aut id suscipit, earum voluptatem blanditiis exercitationem natus, ut vero. Minima facere, in odio laudantium excepturi, consectetur, voluptates pariatur quaerat fugit distinctio officia velit consequuntur commodi nisi tempore veritatis accusantium inventore cumque dicta. Dignissimos natus fuga asperiores unde consectetur quam tempore magni reiciendis nemo quas! Reiciendis non ducimus perspiciatis corporis exercitationem sit excepturi, sequi nihil repellat, aperiam quae aut atque consequuntur sed tenetur porro reprehenderit ea eaque doloremque? Eum delectus alias hic magni autem omnis temporibus! Eos odio quia incidunt enim autem praesentium corporis reiciendis rerum? Eveniet quibusdam repellat voluptas ut? Aspernatur eum sapiente eos delectus error neque eius soluta corrupti, dolor nihil iusto magnam nisi quaerat ab! Veritatis magni culpa porro nostrum recusandae voluptates modi dolorem illum, dignissimos nihil ea non aspernatur, quis delectus ratione saepe. Vel maxime officia deleniti aut quas? Quia cum quasi mollitia ex consectetur laboriosam suscipit architecto consequuntur ratione distinctio laborum natus, ipsa vero culpa facere? Animi sint possimus, iusto, illum error corrupti temporibus iste id nisi commodi nostrum laborum a dolorem tempore maxime mollitia eum magni quis sunt. Porro similique eius rem repellendus, ipsa odit dignissimos illo modi quia dolorem voluptatem laborum ab minus veniam ratione nisi quo iure tempora libero esse possimus omnis recusandae! Quod rem corrupti dolorum amet assumenda tempore? Voluptatum similique delectus voluptatibus voluptates officiis, a earum dolores corrupti suscipit voluptate quisquam rem tenetur veniam dignissimos placeat facilis dolorum et eveniet quaerat alias voluptas fugiat architecto aliquid. Ratione quasi, ea natus inventore corporis labore id illo iste quis, nemo eaque possimus fugiat atque ut repudiandae, odit tenetur sunt vitae hic assumenda molestiae voluptate. Enim soluta a eaque expedita nesciunt nulla velit illum ratione culpa voluptates dignissimos dolor illo cumque cupiditate ullam, dolorum necessitatibus vitae distinctio delectus quidem aut numquam. Et saepe praesentium ab, est voluptatum laborum explicabo, sint ex nesciunt eius ipsum recusandae tenetur dolorem accusamus sequi? Quaerat non praesentium explicabo nemo iusto sequi in natus minus! Dolor maxime dolorem provident quae, neque eaque ratione quas eum odio et in necessitatibus soluta. Quae minus maxime quis quasi cum recusandae officia suscipit officiis accusamus reprehenderit nisi numquam laborum odio repudiandae, earum blanditiis aliquid veritatis! Expedita ut quam iusto? Totam obcaecati provident aliquid iusto reiciendis fugit natus asperiores et quia nesciunt iure excepturi facere cumque deserunt assumenda, quisquam velit doloribus ratione molestiae aliquam accusantium, amet doloremque quibusdam? Sunt iusto expedita numquam quibusdam. Officia temporibus expedita harum eaque perferendis veniam, delectus debitis eos quia nisi ex aut consequuntur maiores similique inventore, consectetur unde libero corporis iure in dolorum, ut assumenda? Magnam accusamus amet repudiandae. Rem, neque vitae molestias iste minus deserunt sunt voluptate nemo hic ea totam dolor harum laboriosam rerum obcaecati recusandae facilis est quaerat aut, quo doloremque dicta ipsa? Consequatur odio vero itaque? Iure, rerum! Laborum possimus corrupti tempore dolores. Error asperiores mollitia sint qui quisquam nulla quam ea labore deserunt minus minima eius, similique hic, sapiente dolorum aperiam temporibus illum, illo totam pariatur? Eveniet tenetur exercitationem iusto minus iure inventore maxime delectus nisi soluta, suscipit reprehenderit facilis sed deleniti tempora obcaecati sunt velit aspernatur. Voluptate illum omnis optio similique velit exercitationem in alias culpa impedit quis! Illum, ipsam quidem rem dolores excepturi assumenda dignissimos iusto, labore nostrum, exercitationem voluptatum. Odit nihil ducimus dolore, et ullam esse impedit rem? Sed, expedita neque, tempore eveniet harum nostrum quo illo, ullam eum quasi alias placeat ut dolores doloribus assumenda perspiciatis vitae!</footer>
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
