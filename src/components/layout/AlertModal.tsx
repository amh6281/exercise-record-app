'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
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
          <AlertDialogCancel className='border-choco-300 text-choco-700 hover:bg-choco-50 dark:border-choco-600 dark:text-choco-300 dark:hover:bg-choco-700 cursor-pointer'>
            취소
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className='bg-choco-600 hover:bg-choco-700 dark:bg-choco-500 dark:hover:bg-choco-600 cursor-pointer text-white'
          >
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
