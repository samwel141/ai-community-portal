
import { HomeIcon } from "~/components/icons";
import { AdminPanelIcon } from "~/components/icons/admin-panel-icon";
import { ChallengesIcon } from "~/components/icons/challenges-icon";
import { DiscussionsIcon } from "~/components/icons/discussions-icon";
import { PostsIcon } from "~/components/icons/posts-icon";
import { ResourcesIcon } from "~/components/icons/resources-icon";
import { SidebarMenuItemProps } from "~/routes/portal/layouts/sidebar-menu";

export const sidebarMenuList: SidebarMenuItemProps[] = [
    {
        Icon: HomeIcon,
        link: "/app/home",
        name: "Home",
        pattern: new RegExp("^/app/home$"),
    },
    {
        Icon: PostsIcon,
        link: "/app/posts",
        name: "Posts",
        pattern: new RegExp("^/app/posts*"),
    },
    {
        Icon: DiscussionsIcon,
        link: "/app/discussions",
        name: "Discussion Forum",
        pattern: new RegExp("^/app/discussions*"),
    },
    {
        Icon: ResourcesIcon,
        link: "/app/resources",
        name: "Resources",
        pattern: new RegExp("^/app/resources*"),
    },
    {
        Icon: ChallengesIcon,
        link: "/app/challenges",
        name: "Challenges",
        pattern: new RegExp("^/app/challenges*"),
    },
    {
        Icon: AdminPanelIcon,
        link: "/app/dashboard",
        name: "Admins Panel",
        pattern: new RegExp("^/app/dashboard*"),
    },
];
