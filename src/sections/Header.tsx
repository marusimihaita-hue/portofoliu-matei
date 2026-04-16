import Image from "next/image";
import avatar from "@/assets/images/avatar.png";

export const Header = () => {
  return (
    <div className=" justify-center  items-center fixed w-full z-10">
      <nav className="flex p-0.5 bg-[#0D0D0D]/90 backdrop-blur justify-between p-7">
        <div className="flex ml-[125px]">
          <Image
            src={avatar}
            alt="Descriere scurtă pentru accesibilitate"
            className="size-[40px]"
          />
          <div className="ml-3  ">
            <p className="text-s font-semibold text-warm-muted">Marusi Matei</p>
            <p className="text-xs font-light text-warm-muted">
              Junior Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center mr-14">
          <a href="#" className="text-warm-muted text-base">
            Portofolio
          </a>
          <a href="#" className="text-warm-muted text-base">
            About/Contact
          </a>
        </div>
      </nav>
    </div>
  );
};
