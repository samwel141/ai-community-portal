import { Logo } from "~/components/icons";
import SidebarMenuItem from "~/routes/portal/layouts/sidebar-menu";
import { sidebarMenuList } from "~/routes/portal/layouts/sidebar-menu-list";

const Sidebar = () => {
    return (
        <aside
            className={
                "hidden md:flex md:h-full md:w-64 md:border-r md:border-secondary md:px-5 md:pb-2 md:flex-col md:justify-between md:bg-primary md:pt-6"
            }
        >
            <div className={"space-y-2"}>
                <div className="flex">
                   <Logo />
                </div>
             
                <div className={"space-y-4"}>
                    <div className={"space-y-2"}>
                        {sidebarMenuList.map((menu) => (
                            <SidebarMenuItem {...menu} key={menu.name} />
                        ))}
                    </div>
                </div>
            </div>
        
        </aside>
    );
};
export default Sidebar;
