
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
        link: "/portal/home",
        name: "Home",
        pattern: new RegExp("^/portal/home*"),
    },
    {
        Icon: PostsIcon,
        link: "/portal/posts",
        name: "Posts",
        pattern: new RegExp("^/portal/posts*"),
    },
    {
        Icon: DiscussionsIcon,
        link: "/portal/discussion",
        name: "Discussion Forum",
        pattern: new RegExp("^/portal/discussion*"),
    },
    {
        Icon: ResourcesIcon,
        link: "/portal/resources",
        name: "Resources",
        pattern: new RegExp("^/portal/resources*"),
    },
    {
        Icon: ChallengesIcon,
        link: "/portal/challenges",
        name: "Challenges",
        pattern: new RegExp("^/portal/challenges*"),
    },
    {
        Icon: AdminPanelIcon,
        link: "/portal/admin",
        name: "Admins Panel",
        pattern: new RegExp("^/portal/admin*"),
    },
];
