import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export function Socials() {
  const links = [
    {
      href: "https://www.instagram.com/gfmontiform/",
      icon: <FaInstagram size={16} aria-label="instagram" />,
    },

    {
      href: "https://www.facebook.com/profile.php?id=61557967092489",
      icon: <FaFacebook size={16} aria-label="facebook" />,
    },
    {
      href: "https://www.youtube.com/@gfmontiform9930",
      icon: <FaYoutube size={16} aria-label="youtube" />,
    },
    {
      href: "https://web.whatsapp.com/send?tel=+393396287155",
      icon: <FaWhatsapp size={16} aria-label="whatsapp" />,
    },
    {
      href: "https://linktr.ee/gfmontiform?utm_source=linktree_profile_share&ltsid=db0fa306-7315-469b-b60e-0a1aec6f7a81",
      icon: <SiLinktree size={16} aria-label="linktree" />,
    },
  ];

  return (
    <div className="flex justify-center gap-2">
      {links.map(({ href, icon }) => (
        <Link key={href} href={href} target="_blank">
          {icon}
        </Link>
      ))}
    </div>
  );
}
