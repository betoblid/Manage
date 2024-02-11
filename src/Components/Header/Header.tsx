import { useState } from "react"
import logo from '../../assets/logo.svg';
import Button from "../Button";

import MenuIcon from '../../assets/icon-hamburger.svg';
import CloseIcon from '../../assets/icon-close.svg'

function Header() {

    const [menu, setMenu] = useState<boolean>(true)

    return (
        <header className="flex flex-1 justify-around items-center w-full py-10
       absolute right-1/2 translate-x-1/2 2xl:max-w-[1440px] 2xl:mx-auto">
            <figure>
                <img src={logo} alt="Logo do nosso site" />
            </figure>

            <nav className={`md:absolute md:top-24 md:bg-Dark-Blue md:w-3/4 md:z-10 md:rounded-2xl md:py-2 ${menu && 'md:hidden'}`}>
                <ul className="flex gap-6 font-bold text-Vary-Light-Gray md:block md:text-slate-50">
                    <li>
                        <a href="" className=" hover:text-Dark-Grayish-Blue md:block md:py-3 md:text-center md:hover:bg-slate-900 md:hover:text-zinc-50">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className=" hover:text-Dark-Grayish-Blue md:block md:py-3 md:text-center md:hover:bg-slate-900 md:hover:text-zinc-50">Product</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-Dark-Grayish-Blue md:block md:py-3 md:text-center md:hover:bg-slate-900 md:hover:text-zinc-50">About Us</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-Dark-Grayish-Blue md:block md:py-3 md:text-center md:hover:bg-slate-900 md:hover:text-zinc-50">Careers</a>
                    </li>
                    <li>
                        <a href="" className=" hover:text-Dark-Grayish-Blue md:block md:py-3 md:text-center md:hover:bg-slate-900 md:hover:text-zinc-50">Community</a>
                    </li>
                </ul>
            </nav>
            <div className="hidden md:block">
                <button type="button" onClick={() => setMenu(!menu)}>
                    <img
                        src={menu ? MenuIcon : CloseIcon}
                        alt="Icon Menu" />
                </button>
            </div>
            <Button title="Get Started" shadow={true} style="md:hidden" />
        </header >
    )
}
export default Header;