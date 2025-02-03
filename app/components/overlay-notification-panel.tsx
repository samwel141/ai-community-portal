import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const OverlayNotificationPanel = () => {
    return (
        <div
            style={{ zIndex: 999999999999999 }}
            className={"center pointer-events-none fixed top-0 hidden w-full"}
        >
            <div
                className={
                    "flex w-fit items-center gap-3 rounded-b-xl bg-primary px-5 py-2 text-sm text-primary-100"
                }
            >
                <ExclamationTriangleIcon
                    className={"size-4 animate-pulse duration-700"}
                />
                <span className={""}>No internet connection</span>
            </div>
        </div>
    );
};

export default OverlayNotificationPanel;
