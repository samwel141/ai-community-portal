import { Link, useLocation, useNavigate } from "@remix-run/react";
import { DropdownMenu } from "~/components/dropdown-menu";
import { HomeIcon } from "~/components/icons";
import { CommunityIcon } from "~/components/icons/community-icon";
import { QuestionMarkIcon } from "~/components/icons/question-mark-icon";
import SearchBox from "~/components/search-box";
import { sidebarMenuList } from "./sidebar-menu-list";
import AuthButton from "./auth-button";

const TopHeader = () => {
    const navigate = useNavigate();

    const location = useLocation().pathname;
    let title = "";
    
    if(location.includes("home")) {
        title = "Home";
    }
    if(location.includes("sessions")) {
        title = "Sessions Management";
    }
    if(location.includes("users")) {
        title = "Users Management";
    }


    return (
        <div className={"py-3 flex bg-primary items-center px-5 items-between border-b border-secondary"}>
            <div className="block sm:hidden">
              <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <div className="flex items-center gap-2">
                            <HomeIcon className="text-white size-6" />
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
                    <p className="hidden sm:block text-textColor text-2xl">{title}</p>
                </Link>

                {/* <div className="hidden sm:block">
                    <SearchBox placeholder={"Search"} />
                </div> */}
            </div>

            <div className={"flex items-center hover:opacity-80 gap-3"}>
                <AuthButton />
            </div>
        </div>
    );
};
export default TopHeader;
