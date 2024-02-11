import React from "react";
import logo from '../../assets/logo.svg';
import Fece from '../../assets/icon-facebook.svg';
import Insta from '../../assets/icon-instagram.svg';
import Pint from '../../assets/icon-pinterest.svg';
import Twit from '../../assets/icon-twitter.svg';
import You from '../../assets/icon-youtube.svg';
import Button from "../Button";


const IconRede = [
    { id: 11, Icon: Fece },
    { id: 22, Icon: Insta },
    { id: 33, Icon: Pint },
    { id: 44, Icon: Twit },
    { id: 55, Icon: You }
]

const Footer = () => {

    return (
        <footer className="bg-Dark-Blue">
            <div className=" flex justify-around py-14 md:flex-col-reverse md:items-center md:gap-6 relative 2xl:max-w-[1440px] 2xl:mx-auto">
                <div className="flex flex-col justify-around md:flex-col-reverse md:items-center">
                    <figure className="flex ">
                        <img src={logo} alt="" className="text-zinc-50" />
                    </figure>
                    <figure className="flex space-x-3 md:gap-5 md:mb-5">
                        {
                            IconRede.map((icon) => <img key={icon.id} src={icon.Icon} alt="Icon rede social" className="w-5" />)
                        }
                    </figure>
                </div>


                <nav>
                    <ul className="text-zinc-50 font-light text-[16px] flex flex-col gap-3 md:items-center ">
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">Home</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">Products</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">About Us</a>
                        </li>

                    </ul>
                </nav>
                <nav>
                    <ul className="text-zinc-50 font-light text-[16px] flex flex-col gap-3  md:items-center">
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">Careers</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">Community</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-Dark-Grayish-Blue">Privacy Policy</a>
                        </li>
                    </ul>
                </nav>



                <div className="flex flex-col justify-around ">
                    <form
                        onSubmit={(event) => event.preventDefault()}>
                        <input
                            type="text"
                            name="text"
                            id="txText"
                            className="py-2 rounded-2xl px-4 mr-2 sm:w-40"
                            placeholder="Updates in your inbox..."
                        />
                        <Button title="Go" shadow={false} style="" />
                    </form>
                    <div className="md:absolute md:bottom-0 ">
                        <p className="text-[10px] text-Dark-Grayish-Blue  ">
                            &copy;Copyright 2020. All Rights Reserved
                        </p>
                    </div>

                </div>
            </div>

            <p className="text-center text-[7px] text-zinc-50">
                Desafio do
                <a href="https://www.frontendmentor.io/" target="_blank">Mentor Frontend</a> .
                Codificado pelo
                <a href="https://www.linkedin.com/in/HerbertlSouza/" target="_blank">Herbert souza</a>
            </p>
        </footer>
    );
}

export default Footer;