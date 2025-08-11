'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useAlertModalStore } from '@/store/alertModalStore';

const AlertModal = () => {
  const isOpen = useAlertModalStore((state) => state.isOpen);
  const desc = useAlertModalStore((state) => state.desc);
  const onConfirm = useAlertModalStore((state) => state.onConfirm);
  const closeModal = useAlertModalStore((state) => state.closeModal);

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={closeModal}>
      <AlertDialogContent className='dark:bg-choco-800 text-choco-700 dark:text-choco-100 bg-white'>
        <AlertDialogHeader>
          <AlertDialogTitle>알림</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleConfirm}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
