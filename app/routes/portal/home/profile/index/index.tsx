import PageHeader from "~/components/page-header";
import { Tab } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "~/components/button";
import { useNavigate } from "@remix-run/react";

const ProfilePage = () => {
    
   const navigate = useNavigate();

    return (
        <div className="flex flex-col p-4 gap-12">
            <PageHeader
                title="Profile"
                hasFilter={false}
            />
            <div className="flex items-center justify-between gap-4 mt-4">
                <div>
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Profile Picture"
                        className="rounded-full w-[12rem] h-[12rem] md:w-[16rem] md:h-[8rem]"
                    />
                </div>
                <div>
                    <div className="flex flex-col mt-2">
                        <p className="text-textColor">John Doe</p>
                    </div>
                    <div className="flex flex-col mt-2">
                        <p className="text-textColor">johndoe@example.com</p>
                    </div>
                    <div className="flex flex-col mt-2">
                        <p className="text-textColor">012-345-6789</p>
                    </div>
                    <div className="flex flex-col mt-2">
                        <p className="text-[#CED0DC]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                            quidem pariatur, numquam qui et enim amet veritatis illo nisi eum! Ea
                            quidem pariatur, numquam qui et enim amet veritatis illo nisi eum!
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full px-12">
                <Tab.Group>
                    <Tab.List className="flex gap-4">
                        {["Education", "Achievements", "Saves"].map((tab) => (
                            <Tab key={tab} as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`pb-1 mx-2 border-b-2 transition-all ${selected
                                            ? "border-b-accent text-accent"
                                            : "border-transparent text-textColor"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels className="mt-4">
                        <Tab.Panel>
                            <p className="p-4">Education Content</p>
                        </Tab.Panel>
                        <Tab.Panel>
                            <p className="p-4">Achievements Content</p>
                        </Tab.Panel>
                        <Tab.Panel>
                            <p className="p-4">Saves Content</p>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <div className="flex justify-center pl-[20rem]">
                <Button
                    outline
                    onClick={() => navigate("/portal/home/profile/finish")}
                    className="border border-gray-400 rounded-md px-[6rem] text-xs bg-primary hover:opacity-80">
                    Finish Your Profile
                </Button>
            </div>

        </div>
    );
};


export default ProfilePage;