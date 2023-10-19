import useMediaQuery from "@/hooks/useMediaQuery";
import React, { Dispatch, SetStateAction } from "react";
import { Drawer } from "vaul";

type Props = {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, setShowModal, showModal, className }: Props) => {
  const { isMobile } = useMediaQuery();
  if (isMobile) {
    return (
      <Drawer.Root open={showModal} onOpenChange={setShowModal}>
        <Drawer.Overlay className="fixed inset-0 z-40 dark:bg-black dark:bg-opacity-20 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-50 rounded-t-xl border-t dark:border-t-gray-500/30 dark:bg-black">
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-xl bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return <div>modal</div>;
};

export default Modal;
