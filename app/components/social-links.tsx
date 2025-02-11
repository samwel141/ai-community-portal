import { FC } from "react";
import { cn } from "~/utils"; 

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={cn("flex space-x-4", className)}>
      <a href="https://api.whatsapp.com/send?phone=+6285155550055&text=Halo%20AgriCom%21%20Saya%20tertarik%20dengan%20produk%20Anda" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src="/images/whatsapp1.svg" alt="WhatsApp" className="w-6 h-6 text-textColor" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src="/images/twitter.svg" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
        <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;

