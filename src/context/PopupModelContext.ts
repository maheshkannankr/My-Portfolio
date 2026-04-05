'use client';

import { createContext, useContext } from 'react';

export type ModalType = 'PROJECT' | null;

export type ModalState = {
  type: ModalType;
  data: any;
};

export type PopupModelContextType = {
  openModel: (type: ModalType, data?: any) => void;
  closeModel: () => void;
  modal: ModalState;
};

export const PopupModelContext = createContext<PopupModelContextType | null>(
  null,
);

// ✅ Custom Hook (clean usage)
export const usePopupModel = () => {
  const context = useContext(PopupModelContext);
  if (!context) {
    throw new Error('usePopupModel must be used within PopupModelProvider');
  }
  return context;
};
