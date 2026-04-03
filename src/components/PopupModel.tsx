'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type PopupModelProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function PopupModel({
  isOpen,
  onClose,
  children,
}: PopupModelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="w-full h-full bg-black/90 backdrop-blur-xl relative overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-primary z-10"
            >
              <X size={28} />
            </button>

            {/* Content */}
            <div className="p-8 pt-16">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}