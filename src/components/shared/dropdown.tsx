import * as Popover from "@radix-ui/react-popover";
import React from "react";
type Props = {
  children?: React.ReactNode;
  content: React.ReactNode;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>;
};
const Dropdown = ({
  children,
  content,
  align,
  openPopover,
  setOpenPopover,
}: Props) => {
  return (
    <Popover.Root open={openPopover} onOpenChange={setOpenPopover}>
      <Popover.Trigger className="inline-flex" asChild>
        {children}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align={align}
          className="z-50 items-center rounded-lg border border-gray-500/30 bg-white dark:bg-black drop-shadow-lg w-fit"
        >
          {content}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Dropdown;
