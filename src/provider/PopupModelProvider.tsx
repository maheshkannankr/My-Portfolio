'use client';

import { useState, ReactNode, useEffect } from 'react';
import { PopupModelContext, ModalState } from '@/context/PopupModelContext';

import PopupModel from '@/components/PopupModel';
import ProjectOverviewModal from '@/components/ProjectOverviewModal';

export const PopupModelProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalState>({
    type: null,
    data: null,
  });

  const openModel = (type: any, data?: any) => {
    setModal({ type, data });
  };

  const closeModel = () => {
    setModal({ type: null, data: null });
  };

  useEffect(() => {
    if (modal.type !== null) {
      // ✅ Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // ✅ Restore scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [modal.type]);

  return (
    <PopupModelContext.Provider value={{ openModel, closeModel, modal }}>
      {children}

      {/* 🔥 THIS IS STEP 3 (WRITE HERE) */}
      <PopupModel isOpen={modal.type !== null} onClose={closeModel}>
        {modal.type === 'PROJECT' && (
          <ProjectOverviewModal project={modal.data} />
        )}
      </PopupModel>
    </PopupModelContext.Provider>
  );
};
