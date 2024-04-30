import { useState } from "react";

export function useSubMenu() {
    const [subMenuOpen, setSubMenuOpen] = useState({});

    const handleMouseEnter = (menu) => {
        setSubMenuOpen((prevState) => ({
            ...prevState,
            [menu]: true,
        }));
    };

    const handleMouseLeave = (menu) => {
        setSubMenuOpen((prevState) => ({
            ...prevState,
            [menu]: false,
        }));
    };

    return { subMenuOpen, handleMouseEnter, handleMouseLeave };
}
