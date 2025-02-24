import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react"

const Header = ({ icons = 'normal' }: {icons?: string}) => {
    const modal = useRef<HTMLDivElement | null>(null)
    const searchInputRef = useRef<HTMLInputElement | null>(null)
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [iconState, setIconState] = useState(false)

    const openMenu = () => {
        document.body.classList.add("lock")
        setIsShowModal(true)
    }

    const closeMenu = () => {
        document.body.classList.remove("lock")
        setIsShowModal(false)
    }

    const closeMenuOnEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMenu()
    }

    useEffect(() => {
        window.addEventListener("keydown", (e) => closeMenuOnEscape(e))
        return () => window.removeEventListener("keydown", closeMenuOnEscape)
    }, [])

    useEffect(() => {
        const handleStorageChange = () => {
            const swiperIndex = Number(localStorage.getItem("swiperIndex")) || 0;
            setIconState(swiperIndex === 2 ? true : false);
        };
        handleStorageChange();

        const interval = setInterval(handleStorageChange, 500);
        return () => clearInterval(interval);
    }, []);

    const openSearchInputRef = () => {
        if (searchInputRef.current?.classList.contains("w-0")) {
            searchInputRef.current?.classList.remove("w-0", "opacity-0");
            searchInputRef.current?.classList.add("md:w-48", "w-32", "opacity-100");
            searchInputRef.current?.focus();
        } else {
            searchInputRef.current?.classList.remove("md:w-48", "w-32", "opacity-100");
            searchInputRef.current?.classList.add("w-0", "opacity-0");
        }
    }

    searchInputRef.current?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const searchText = searchInputRef.current?.value.trim();

            if (searchText) {
                console.log("User input:", searchText); // Используй searchText для отправки данных
            }

            searchInputRef.current!.value = "";
            searchInputRef.current?.classList.remove("w-48", "opacity-100");
            searchInputRef.current?.classList.add("w-0", "opacity-0");
            searchInputRef.current?.blur();
            closeMenu();
        }
    })

    return (
        <>
            {/* ======================================================= HEADER =======================================================*/}

            <header className={`header backdrop-blur-xs fixed top-0 left-0 z-5 w-full px-10 py-7 pb-0 ${icons === 'white' ? 'bg-transparent' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <div className="hidden md:flex gap-2 items-center *:cursor-pointer">
                            <span className="font-bold text-lg text-[#7878FF]">RU</span>
                            <span className="font-bold text-lg">EN</span>
                            <span className="font-bold text-lg">UZ</span>
                        </div>
                        <form id="header-search" className="flex items-center relative">
                            <motion.div
                                key={iconState.toString()} // Обеспечивает анимацию при смене
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                onClick={openSearchInputRef}
                                className="cursor-pointer h-8 md:h-6"
                            >
                                {iconState || icons === 'white' ? <img className="h-full" src="/icons/searchWhite.svg" alt="search-icon" /> : <img className="h-full" src="/icons/search.svg" alt="search-icon" />}
                            </motion.div>
                            <input ref={searchInputRef} type="text" className="w-0 opacity-0 p-2 border-b-2 outline-0 transition-all duration-300 ease-in-out focus:w-32 md:focus:w-48 focus:opacity-100" placeholder="Search..." />
                        </form>
                    </div>
                    <a href="/">
                        <motion.div
                            key={iconState.toString()} // Обеспечивает анимацию при смене
                            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            {iconState || icons === 'white' ? <img className="w-25" src="/headerLogoWhite.png" alt="header-logo" /> : <img src="/headerLogo.png" alt="header-logo" />}
                        </motion.div>
                    </a>
                    <div className="flex items-center gap-24">
                        <div className="hidden mt-3 md:flex items-center gap-5 *:w-8 *:h-8 *:cursor-pointer">
                            <img src="/icons/instagram.svg" alt="instagram-icon" />
                            <img src="/icons/telegram.svg" alt="telegram-icon" />
                            <img src="/icons/youtube.svg" alt="youtube-icon" />
                            <img src="/icons/facebook.svg" alt="facebook-icon" />
                            <img src="/icons/tiktok.svg" alt="tiktok-icon" />
                        </div>
                        <motion.div
                            key={iconState.toString()} // Обеспечивает анимацию при смене
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            onClick={openMenu}
                            className="cursor-pointer h-6 mt-2 p-1"
                        >
                            {iconState || icons === 'white' ? <img src="/icons/menuWhite.svg" alt="menu-icon" /> : <img src="/icons/menu-icon.svg" alt="menu-icon" />}
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* ======================================================= MODAL =======================================================*/}

            <AnimatePresence>
                {isShowModal && (
                    <motion.div
                        ref={modal}
                        className='modal fixed top-0 left-0 z-10 h-full w-full bg-transparent overflow-y-scroll'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="modal__heading px-10 py-7 pb-0">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-10">
                                    <div className="hidden md:flex gap-2 items-center *:cursor-pointer">
                                        <span className="font-bold text-lg text-[#7878FF]">RU</span>
                                        <span className="font-bold text-lg">EN</span>
                                        <span className="font-bold text-lg">UZ</span>
                                    </div>
                                    <form id="header-search" className="flex items-center relative">
                                        <img onClick={openSearchInputRef} className="cursor-pointer h-8 md:h-6" src="/icons/search.svg" alt="search-icon" />
                                        <input ref={searchInputRef} type="text" className="w-0 opacity-0 p-2 border-b-2 outline-0 transition-all duration-300 ease-in-out focus:w-32 md:focus:w-48 focus:opacity-100" placeholder="Search..." />
                                    </form>
                                </div>
                                <a href="/"><img src="/headerLogo.png" alt="header-logo" /></a>
                                <img onClick={closeMenu} className="cursor-pointer h-10" src="/icons/close.svg" alt="close-icon" />
                            </div>
                        </div>
                        <div className="modal__bottom p-5 md:flex md:flex-row-reverse md:gap-4 md:items-end md:justify-center">
                            <div className="md:w-full">
                                <div className="*:mr-2 md:hidden">
                                    <span className="font-bold text-lg text-[#7878FF]">RU</span>
                                    <span className="font-bold text-lg">EN</span>
                                    <span className="font-bold text-lg">UZ</span>
                                </div>
                                <div className="header-menu-links flex flex-col gap-5 text-[#25254C] *:text-3xl *:cursor-pointer mt-5 italic font-bold md:not-italic md:*:text-4xl">
                                    <span>Концерты и события</span>
                                    <span>Карта ТРЦ</span>
                                    <span>Расписание кино</span>
                                    <span>Магазины</span>
                                    <span>Еда</span>
                                    <span>Развлечения и услуги</span>
                                    <span>Акции и скидки</span>
                                    <span>Арендаторам</span>
                                </div>
                                <div className="mt-10 flex flex-col gap-3 *:text-3xl text-[#C83053] font-bold *:cursor-pointer">
                                    <span>Работа в Family Park</span>
                                    <span>Потерянные вещи</span>
                                </div>
                                <div className="mt-5 flex flex-col gap-3 *:cursor-pointer">
                                    <span>Правила посетителя</span>
                                    <span>Правила парковки</span>
                                    <span>Правила размещения рекламы</span>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-col gap-4 *:text-[#25254C] md:ml-10 md:w-[80%]">
                                <div className="flex items-center gap-3">
                                    <img src="/icons/gmail.svg" alt="gmail-icon" />
                                    <span className="font-bold text-base text-[#BB2649]">familypark@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src="/icons/phone.svg" alt="phone-icon" />
                                    <span className="text-3xl font-bold">+998 94 440 44 40</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src="/icons/location.svg" alt="location-icon" />
                                    <span className="text-3xl font-bold">Узбекистан, г.Самарканд <br /> ул. Нарпайская 76а</span>
                                </div>
                                <div className="mt-3 flex items-center gap-5 *:w-8 *:h-8 *:cursor-pointer">
                                    <img src="/icons/instagram.svg" alt="instagram-icon" />
                                    <img src="/icons/telegram.svg" alt="telegram-icon" />
                                    <img src="/icons/youtube.svg" alt="youtube-icon" />
                                    <img src="/icons/facebook.svg" alt="facebook-icon" />
                                    <img src="/icons/tiktok.svg" alt="tiktok-icon" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
