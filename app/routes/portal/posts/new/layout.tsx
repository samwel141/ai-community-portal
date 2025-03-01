// import { Outlet } from "@remix-run/react";
// import SlideOver from "~/components/slider-over/slide-over";
// import useRouteModal from "~/hooks/useRouteModal";

// const CreateNewPostLayout = () => {
//     const { open, closeModal } = useRouteModal({
//         navigateTo: {
//             url: BASE_URL,
//         },
//     });

//     return (
//         <SlideOver open={open} onClose={closeModal}>
//             <SlideOver.Panel size={"xl"}>
//                 Hello Africa
//                 <Outlet />
//             </SlideOver.Panel>
//         </SlideOver>
//     );
// };


// export default CreateNewPostLayout;




import { Outlet, useNavigate } from "@remix-run/react";
import { useState } from "react";
import NewSlideOver from "~/components/new-slide-over";

export default function SomePage() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate()

  const handleClose = () => {
     navigate(-1);
     setIsOpen(false)
  }

  return (
    <div className="p-6 bg-primary">
      <NewSlideOver isOpen={isOpen} onClose={handleClose} title="Add Post">
        <Outlet/>
      </NewSlideOver>
    </div>
  );
}
