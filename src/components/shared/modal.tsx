'use client'
import useMediaQuery from "@/hooks/useMediaQuery";
import * as Dialog from "@radix-ui/react-dialog";
import React, { Dispatch, SetStateAction } from "react";
import { Drawer } from "vaul";

type Props = {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, showModal, setShowModal }: Props) => {
  const { isMobile } = useMediaQuery();
  if (!isMobile) {
    return (
      <Dialog.Root open={showModal} onOpenChange={setShowModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-gray-100 dark:bg-black/50 bg-opacity-50 backdrop-blur-sm transform transition-all" />
          <Dialog.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="fixed inset-0 z-50 m-auto max-h-fit w-full max-w-md overflow-hidden border border-gray-500/30 bg-white dark:bg-black shadow-xl md:rounded-xl"
          >
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
  return (
    <Drawer.Root open={showModal} onOpenChange={setShowModal}>
      <Drawer.Overlay className="fixed inset-0 z-40 dark:bg-black dark:bg-opacity-20 backdrop-blur" />
      <Drawer.Portal>
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-50 rounded-t-xl border-t bg-white dark:border-t-gray-500/30 dark:bg-black">
          <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-xl bg-inherit">
            <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
          </div>
          {children}
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Modal;
