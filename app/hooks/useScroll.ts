import { RefObject, useEffect, useState } from "react";

const useScroll = (ref?: RefObject<HTMLElement>) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        if (ref && ref.current) {
            setScrollY(ref.current.scrollTop);
        } else {
            setScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        const target = ref && ref.current ? ref.current : window;
        target.addEventListener("scroll", handleScroll);
        return () => {
            target.removeEventListener("scroll", handleScroll);
        };
    }, [ref]);

    return { scrollY };
};

export default useScroll;
