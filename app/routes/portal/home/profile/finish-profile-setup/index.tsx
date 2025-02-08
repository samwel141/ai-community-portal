import { Outlet } from "@remix-run/react";
import { Fragment, useState } from "react";
import GeneralErrorBoundary from "~/components/error-boundary";
import renderFormField from "~/utils/render-form-field";
import { ProfileFormType, useManageProfileInfoForm } from "~/routes/portal/home/profile/finish-profile-setup/manage-profile-setup-form";
import PageContainer from "~/components/page-container";
import { Controller } from "react-hook-form";
import { Button } from "~/components/button";
import { EditorSmall } from "~/components/tip-tap-editor";

const ProfileInfoForm = () => {

    const { handleSubmit, profileFormFields, setValue, control } = useManageProfileInfoForm();

    const onSubmit = (formData: ProfileFormType) => {
        console.log(formData);
    };

    const options = ["React", "Angular", "Vue", "Svelte", "Node.js"];
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

    const toggleTechnologies = (tag: string) => {
        const isSelected = selectedTechnologies.includes(tag);
        const newTags = isSelected
            ? selectedTechnologies.filter((t) => t !== tag)
            : [...selectedTechnologies, tag];
        setSelectedTechnologies(newTags);
        setValue("technologies", newTags);
    };


    const sectorOptions = ["Finance", "Healthcare", "Education", "Technology", "Retail"];
    const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

    const toggleSectors = (sector: string) => {
        const isSelected = selectedSectors.includes(sector);
        const newSectors = isSelected
            ? selectedSectors.filter((s) => s !== sector)
            : [...selectedSectors, sector];
        setSelectedSectors(newSectors);
        setValue("sectors", newSectors);
    };

    return (
        <PageContainer className="my-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <Outlet />
              
                <div className="sticky top-0 bg-primary z-10">
                    <h1 className="font-bold pt-0 text-lg md:text-xl text-textColor text-gray-700 sm:text-base">
                        Profile Information
                    </h1>
                </div>
                <div className={"space-y-4"}>
                    <div className="p-1 sm:p-4 rounded-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {profileFormFields.slice(0, 2).map((field) => (
                                <Fragment key={field.name}>
                                    {renderFormField(field)}
                                </Fragment>
                            ))}
                        </div>
                        <div className="pt-4">
                            <h1 className=" text-sm text-gray-400">Tools and Technologies</h1>
                            <Controller
                                name="technologies"
                                control={control}
                                render={() => (
                                    <div className="flex mt-4 flex-wrap gap-2">
                                        {options.map((tag) => (
                                            <Button
                                                key={tag}
                                                type="button"
                                                className={`px-4 py-2 rounded-full bg-transparent border-4 border-red-500 ${selectedTechnologies.includes(tag)
                                                    ? "bg-transparent text-textColor border-accent border-[1px]"
                                                    : "bg-secondary text-textColor border-primary border-1"
                                                    }`}
                                                onClick={() => toggleTechnologies(tag)}
                                            >
                                                {tag}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="pt-4">
                            <h1 className=" text-sm text-gray-400">Sectors</h1>
                            <Controller
                                name="sectors"
                                control={control}
                                render={() => (
                                    <div className="flex mt-4 flex-wrap gap-2">
                                        {sectorOptions.map((sector) => (
                                            <Button
                                                key={sector}
                                                type="button"
                                                className={`px-4 py-2 rounded-full bg-transparent border-4 border-red-500 ${selectedSectors.includes(sector)
                                                    ? "bg-transparent text-textColor border-accent border-[1px]"
                                                    : "bg-secondary text-textColor border-primary border-1"
                                                    }`}
                                                onClick={() => toggleSectors(sector)}
                                            >
                                                {sector}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            />
                        </div>

                        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"}>
                            {profileFormFields.slice(2).map((field) => (
                                <Fragment key={field.name}>
                                    {renderFormField(field)}
                                </Fragment>
                            ))}
                        </div>

                        <div className="pt-4 w-full space-y-4">
                            <p className="font-[300] text-sm text-gray-400">Achievements</p>
                            <Controller
                                name="achievements"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <EditorSmall
                                        defaultContents={value}
                                        onChange={onChange}
                                        className="w-full text-textColor focus:border-secondary border-textColor h-40"
                                    />
                                )}
                            />
                        </div>

                    </div>
                </div>
                <div className="flex justify-end  my-8  items-center gap-6 px-8">
                 
                    <Button
                    className="w-[7rem] bg-gray-200 text-gray-900 rounded-lg py-2.5 text-sm"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className={"w-[7rem] bg-textColor text-gray-900 rounded-lg py-2.5 text-sm"}
                    >
                        Submit
                    </Button>
                </div>

            </form>
        </PageContainer>
    );
};

export default ProfileInfoForm;

export const ErrorBoundary = () => {
    return <GeneralErrorBoundary />;
};
