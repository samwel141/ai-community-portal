import { Link, Outlet, useLocation, useNavigate } from "@remix-run/react";
import { DropdownMenu } from "~/components/dropdown-menu";
import { HomeIcon } from "~/components/icons";
import { CommunityIcon } from "~/components/icons/community-icon";
import { MenuIcon } from "~/components/icons/menu-icon";
import { QuestionMarkIcon } from "~/components/icons/question-mark-icon";
import SearchBox from "~/components/search-box";
import AuthButton from "~/routes/portal/layouts/auth-button";
import { sidebarMenuList } from "./sidebar-menu-list";

const TopHeader = () => {
    const { pathname } = useLocation();
    const pageName = pathname.split("/")[2] || "Home";
    const navigate = useNavigate();


    return (
        <div className={"py-3 flex bg-[#232531] items-center px-5 items-between border-b border-secondary"}>
            <div className="block sm:hidden">
              <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <div className="flex items-center gap-2">
                            <HomeIcon className="text-white size-4" />
                            </div>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Content className={"w-40 bg-primary border-none rounded-none"}>
                            <div className={""}>
                                {sidebarMenuList.map((menu) => (
                                    <DropdownMenu.Item
                                        key={menu.name}
                                        className={"focus:bg-secondary text-textColor opacity-80"}
                                        onClick={() => navigate(menu.link)}
                                    >
                                        {menu.name}
                                    </DropdownMenu.Item>
                                ))}
                            </div>
                        </DropdownMenu.Content>
                    </DropdownMenu>
            </div>
     

            <div className="flex items-center gap-4">
                <Link className="flex gap-2 px-4 py-2 rounded-full hover:opacity-80" to={""}>
                    <CommunityIcon className="text-textColor size-5" />
                    <p className="text-textColor text-sm">Community</p>
                </Link>
                <div>
                    <SearchBox placeholder={"Search"} />
                </div>
            </div>
            <div className="ml-12">
                <Link className="flex gap-2 md:ml-20 ml-8 hover:opacity-80" to={""}>
                    <QuestionMarkIcon className="size-5" />
                    <p className="text-textColor text-sm">Get Help</p>
                </Link>
            </div>

            <div className={"flex items-center hover:opacity-80 gap-3"}>
                <AuthButton />
            </div>
        </div>
    );
};
export default TopHeader;
