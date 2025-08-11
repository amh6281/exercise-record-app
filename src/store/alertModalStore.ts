import { create } from 'zustand';

export interface AlertModalState {
  isOpen: boolean;
  desc: string;
  onConfirm?: () => void;
}

interface AlertModalActions {
  openModal: (params: { desc: string; onConfirm?: () => void }) => void;
  closeModal: () => void;
}

const initialState: AlertModalState = {
  isOpen: false,
  desc: '',
  onConfirm: undefined,
};

export const useAlertModalStore = create<AlertModalState & AlertModalActions>((set) => ({
  ...initialState,

  openModal: (params) => {
    set({
      isOpen: true,
      desc: params.desc,
      onConfirm: params.onConfirm,
    });
  },

  closeModal: () => {
    set(initialState);
  },
}));
