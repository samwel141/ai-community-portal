import { FC } from "react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from "~/components/icons"; 
import { cn } from "~/utils"; 

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={cn("flex space-x-4", className)}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon className="w-6 h-6" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className="w-6 h-6" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;

