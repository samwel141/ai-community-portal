//⚠️ Refactor: This file need to be refactored
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "@remix-run/react";
import { FC, useRef } from "react";
import useClickAway from "~/hooks/useClickAway";
import { cn } from "~/utils";

export interface SubmenuType {
    name: string;
    link: string;
    pattern: RegExp;
}

interface IMenu {
    active?: boolean;
    disabled?: boolean;
    className?: string;
    dropdownIconClassName?: string;
    hasSubmenu?: boolean;
    Icon: FC<{ className?: string }>;
    name: string;
    open?: boolean;
    showDropdownIcon?: boolean;
}

export interface SidebarMenuItemProps extends IMenu {
    link: string;
    pattern: RegExp;
    submenu?: SubmenuType[];
    permission?: string | string[];
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
    Icon,
    link,
    name,
    pattern,
    submenu,
    disabled,
}) => {
    const closeDisclosureFunRef = useRef<VoidFunction | null>(null);
    const openDisclosureStateRef = useRef<{ open: boolean } | null>(null);

    const { pathname } = useLocation();
    const active = pattern.test(pathname);

    const disclosureRef = useClickAway(() => {
        if (closeDisclosureFunRef.current && openDisclosureStateRef.current) {
            if (openDisclosureStateRef.current?.open && !active) {
                closeDisclosureManually();
            }
        }
    });

    const closeDisclosureManually = () => {
        if (closeDisclosureFunRef.current) {
            closeDisclosureFunRef.current();
        }
    };

    return submenu ? (
        <Disclosure ref={disclosureRef} as={"div"}>
            {({ open, close }) => {
                closeDisclosureFunRef.current = close;
                openDisclosureStateRef.current = { open };
                return (
                    <>
                        <Disclosure.Button
                            className={`w-full `}
                            disabled={disabled}
                        >
                            <Menu
                                active={active}
                                className={
                                    open && !active ? "bg-primary-100/30" : ""
                                }
                                open={open}
                                Icon={Icon}
                                name={name}
                                hasSubmenu
                                disabled={disabled}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" mt-2 overflow-hidden flex flex-col ">
                            {submenu.map((submenu) => (
                                <Submenu submenu={submenu} key={submenu.name} />
                            ))}
                        </Disclosure.Panel>
                    </>
                );
            }}
        </Disclosure>
    ) : (
        <Link
            to={link}
            className={cn("flex space-x-4 items-center", {
                "pointer-events-none": disabled,
            })}
        >
            <Menu disabled={disabled} active={active} Icon={Icon} name={name} />
        </Link>
    );
};
export default SidebarMenuItem;

const Menu = ({ active, Icon, name, hasSubmenu, open, disabled }: IMenu) => {
    return (
        <div
            className={cn(
                "w-full border border-transparent text-textColor font-sm hover:bg-[#1E1E1E] px-3 py-2.5 flex space-x-3 items-center rounded-lg cursor-pointer",
                {
                    "bg-[#D6431E] border-[#D8DBD2]": active,
                },
                { " cursor-not-allowed opacity-50 ": disabled }
            )}
        >
            <Icon
                className={cn("size-5 opacity-95 text-textColor", {
                    "opacity-80 text-white": active,
                })}
            />
            <p
                className={cn("flex-1 text-start text-sm text-textColor", {
                    "text-white": active,
                })}
            >
                {name}
            </p>

            {hasSubmenu && (
                <ChevronRightIcon
                    strokeWidth={2}
                    className={cn(
                        "h-3 text-black/60 transition-all w-4 ",
                        { "text-white": active },
                        { "-rotate-90": open }
                    )}
                />
            )}
        </div>
    );
};

const Submenu = ({ submenu }: { submenu: SubmenuType }) => {
    const { pattern, link, name } = submenu;
    const { pathname } = useLocation();

    const active = pattern.test(pathname);

    return (
        <Link
            to={link}
            className={cn(
                "ml-8 px-4 py-2 flex space-x-4 items-center rounded-lg cursor-pointer bg-white hover:text-primary-500 text-sm",
                {
                    "text-primary bg-primary-50 text-sm": active,
                }
            )}
        >
            {name}
        </Link>
    );
};
