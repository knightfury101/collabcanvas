"use client";

import { RenameModal } from "@/components/modals/rename-modal";
import { ProModal } from "@/components/modals/pro-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <RenameModal />
      <ProModal />
    </>
  );
};
