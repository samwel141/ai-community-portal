import { Link, useNavigate } from "@remix-run/react";
import { Avatar } from "~/components/avatar";
import { Button } from "~/components/button";
import { DropdownMenu } from "~/components/dropdown-menu";
import { ProfileIcon, SignOutIcon, UserIcon } from "~/components/icons";
import { useAppContext } from "~/providers/app-provider";
import { generateAvatar } from "~/utils/generate-avatar";

const AuthButton = () => {
    const { authUser } = useAppContext();
    const avatarUrl =
        authUser?.avatar ?? generateAvatar(`${authUser?.fullName}`);

        console.log(["Auth User"], authUser);

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/logout", { replace: true });
    };

    return (
        <div>
            {
                !authUser ? (
                    <div className="flex items-center gap-3">
                        <div>
                            <Button
                                className="bg-accent hidden md:block hover:opacity-80 focus:ring-0"
                                onClick={() => navigate("home/signup")}
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Link
                                className="focus:ring-0 text-white hover:opacity-90 border-none"
                                to="home/login"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                ) : (


                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <div className="flex items-center gap-2">
                                <p className="hidden sm:block text-sm text-textColor">{authUser.fullName}</p>
                                <Avatar
                                    Icon={UserIcon}
                                    imageUrl={avatarUrl}
                                    className={
                                        "size-8 rounded-full border border-[#D8DBD2] text-dark-green"
                                    }
                                />
                            </div>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Content className={"w-20 bg-primary border-none rounded-none"}>
                            <div className={""}>
                                <DropdownMenu.Item
                                    className={"focus:bg-secondary"}
                                    onClick={() => navigate("home/profile")}
                                >
                                    <ProfileIcon />
                                    <p className="text-sm text-white">Profile</p>
                                </DropdownMenu.Item>

                                <DropdownMenu.Separator />

                                <DropdownMenu.Item
                                    onClick={handleLogout}
                                    className={"text-red-600 focus:bg-secondary"}
                                >
                                    <SignOutIcon className="size-4" />
                                    <p className="text-sm text-white">Sign Out</p>
                                </DropdownMenu.Item>
                            </div>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                )
            }

        </div>
    );
};
export default AuthButton;
