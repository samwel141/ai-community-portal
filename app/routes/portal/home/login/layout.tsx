import { Outlet } from "@remix-run/react";
import Modal from "~/components/modal";
import useRouteModal from "~/hooks/useRouteModal";

const LoginFormLayout = () => {
    const { open, closeModal } = useRouteModal();
    return (
        <Modal open={open} onClose={closeModal}>
            <Modal.Panel size={"sm"}>
                <Modal.Header
                    title={"Login"}
                    subtitle={""}
                />
                <Modal.Content className={"space-y-3"}>
                    <Outlet />
                </Modal.Content>
            </Modal.Panel>
        </Modal>
    );
};
export default LoginFormLayout;
