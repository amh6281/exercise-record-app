import { create } from 'zustand';

export interface AlertModalState {
  isOpen: boolean;
  desc: string;
  onConfirm?: () => void;
}

interface AlertModalActions {
  showAlert: (params: { desc: string; onConfirm?: () => void }) => void;
  hideAlert: () => void;
  confirm: () => void;
}

const initialState: AlertModalState = {
  isOpen: false,
  desc: '',
  onConfirm: undefined,
};

export const useAlertModalStore = create<AlertModalState & AlertModalActions>((set, get) => ({
  ...initialState,

  showAlert: (params) => {
    set({
      isOpen: true,
      desc: params.desc,
      onConfirm: params.onConfirm,
    });
  },

  hideAlert: () => {
    set(initialState);
  },

  confirm: () => {
    const { onConfirm } = get();
    if (onConfirm) {
      onConfirm();
    }
    get().hideAlert();
  },
}));
