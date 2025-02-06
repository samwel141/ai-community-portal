import Popover from "~/components/popover";

const EditorPopoverFooter = () => {
    return (
        <div className={"flex justify-end text-xs gap-4 pt-4"}>
            <Popover.Close>
                <button
                    type={"button"}
                    className={
                        " uppercase text-gray-500 w-fit hover:text-gray-600 font-medium"
                    }
                >
                    Cancel
                </button>
            </Popover.Close>
            <button className={" uppercase w-fit text-blue-500 font-medium"}>
                Okay
            </button>
        </div>
    );
};
export default EditorPopoverFooter;
