import { Outlet } from "@remix-run/react";
import Modal from "~/components/modal";
import useRouteModal from "~/hooks/useRouteModal";

const ProfileFormLayout = () => {
    const { open, closeModal } = useRouteModal();
    return (
        <Modal open={open} onClose={closeModal}>
            <Modal.Panel size={"sm"}>
                <Modal.Header
                    title={"Profile Setup"}
                    subtitle={""}
                />
                <Modal.Content className={"space-y-3"}>
                    <Outlet />
                </Modal.Content>
            </Modal.Panel>
        </Modal>
    );
};
export default ProfileFormLayout;
