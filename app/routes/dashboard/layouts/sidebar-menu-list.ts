
import { HomeIcon } from "~/components/icons";
import { AdminPanelIcon } from "~/components/icons/admin-panel-icon";
import { ChallengesIcon } from "~/components/icons/challenges-icon";
import { DiscussionsIcon } from "~/components/icons/discussions-icon";
import { PostsIcon } from "~/components/icons/posts-icon";
import { ResourcesIcon } from "~/components/icons/resources-icon";
import { SidebarMenuItemProps } from "./sidebar-menu";

export const sidebarMenuList: SidebarMenuItemProps[] = [
    {
        Icon: HomeIcon,
        link: "/dashboard/home",
        name: "Home",
        pattern: new RegExp("^/dashboard/home*"),
    },
    // {
    //     Icon: PostsIcon,
    //     link: "/dashboard/posts",
    //     name: "Posts",
    //     pattern: new RegExp("^/dashboard/posts*"),
    // },
    // {
    //     Icon: DiscussionsIcon,
    //     link: "/dashboard/discussion",
    //     name: "Discussion Forum",
    //     pattern: new RegExp("^/dashboard/discussion*"),
    // },
    {
        Icon: ResourcesIcon,
        link: "/dashboard/sessions",
        name: "Sessions Management",
        pattern: new RegExp("^/dashboard/sessions*"),
    },
    {
        Icon: ChallengesIcon,
        link: "/dashboard/users",
        name: "Users Management",
        pattern: new RegExp("^/dashboard/users*"),
    },
    // {
    //     Icon: AdminPanelIcon,
    //     link: "/dashboard/admin",
    //     name: "Admins Panel",
    //     pattern: new RegExp("^/dashboard/admin*"),
    // },
];
