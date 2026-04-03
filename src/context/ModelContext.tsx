'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

import PopupModel from '@/components/PopupModel';

type ModelContextType = {
  isOpen: boolean;
  openModel: (content: ReactNode) => void;
  closeModel: () => void;
  modelContent: ReactNode | null;
};

const ModelContext = createContext<ModelContextType | null>(null);
