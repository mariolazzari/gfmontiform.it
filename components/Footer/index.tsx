import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaRegCopyright,
} from "react-icons/fa";

export function Footer() {
  const links = [
    {
      href: "https://www.instagram.com/gfmontiform/",
      icon: <FaInstagram size={20} />,
    },

    {
      href: "https://www.facebook.com/profile.php?id=61557967092489",
      icon: <FaFacebook size={20} />,
    },
    {
      href: "https://www.youtube.com/@gfmontiform9930",
      icon: <FaYoutube size={20} />,
    },
    {
      href: "https://web.whatsapp.com/send?tel=+3396287155",
      icon: <FaWhatsapp size={20} />,
    },
  ];

  return (
    <footer className="h-[50px] p-1">
      <div className="flex justify-center gap-2">
        {links.map(({ href, icon }) => (
          <Link key={href} href={href}>
            {icon}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 text-md">
        <FaRegCopyright size={16} />
        <Link href="https://mariolazzari.it" target="_blank">
          Mario Lazzari
        </Link>
      </div>
    </footer>
  );
}
