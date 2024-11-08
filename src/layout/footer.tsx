import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="bg-white py-10 mt-5 z-50">
        <div className="container">
          <ul className="flex items-start justify-between flex-wrap">
            <li>
              <Link href={"/"}>
                <Image
                  className="w-[100px] cursor-pointer lg:w-[116px]"
                  width={100}
                  height={28}
                  src="/logo.svg"
                  alt="logo"
                />
              </Link>
              <p className="text-xl font-semibold">Mobilux © 2024</p>
              <p className="mb-4">Barcha huquqlar kafolatlangan</p>
              <div className="flex items-center gap-3">
                <Image
                  className="w-[100px] cursor-pointer lg:w-[116px]"
                  width={100}
                  height={28}
                  src="/googlePlay.svg"
                  alt="img"
                />
                <Image
                  className="w-[100px] cursor-pointer lg:w-[116px]"
                  width={100}
                  height={28}
                  src="/appStore.svg"
                  alt="img"
                />
              </div>
            </li>
            <li className="mt-10 lg:mt-0">
              <h3 className="text-xl font-semibold mb-4">Foydali havolalar</h3>
              <p className="mb-1.5 cursor-pointer">Bosh sahifa</p>
              <p className="mb-1.5 cursor-pointer">Yordam kerakmi?</p>
              <p className="mb-1.5 cursor-pointer">Foydalanish shartlari</p>
              <p className="cursor-pointer">Maxfiylik siyosati</p>
            </li>
            <li className="mt-10 lg:mt-0">
              <h3 className="text-xl font-semibold mb-4">Biz haqimizda</h3>
              <p className="mb-1.5 cursor-pointer">
                Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu,
                Seoul, 03113, Crescent Trade ltd
              </p>
              <p className="mb-1.5 cursor-pointer">
                Korxona nomi: Mobilux trade
              </p>
              <p className="mb-1.5 cursor-pointer">
                Korxona rahbari: HASANBOY TURSUNOV
              </p>
              <p className="mb-1.5 cursor-pointer">
                Registratsiya raqami: 433-62-00377
              </p>
              <p className="cursor-pointer">
                Telefon raqam: 93 000 66-44 97 000 66-44
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
