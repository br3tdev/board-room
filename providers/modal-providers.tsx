"use client";

import * as React from "react";

import RenameModal from "@/components/modals/rename-modal";

export interface IModalProviderProps {}

export default function ModalProvider(props: IModalProviderProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <RenameModal />
    </>
  );
}
