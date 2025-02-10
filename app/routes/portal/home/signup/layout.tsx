import { Outlet } from "@remix-run/react";
import Modal from "~/components/modal";
import useRouteModal from "~/hooks/useRouteModal";

const SignUpFormLayout = () => {
    const { open, closeModal } = useRouteModal();
    return (
        <Modal open={open} onClose={closeModal}>
            <Modal.Panel size={"xs"} className={"md:w-[30rem] pb-[1.5rem] overflow-auto"}>
                <Modal.Header
                    title={"Sign Up"}
                    subtitle={""}
                />
                <Modal.Content className={"space-y-3"}>
                    <Outlet />
                </Modal.Content>
            </Modal.Panel>
        </Modal>
    );
};
export default SignUpFormLayout;
