import React, { useRef, useEffect } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

interface QuotePopupProps {
  open: boolean;
  onClose: () => void;
}

const QuotePopup: React.FC<QuotePopupProps> = ({ open, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Handle swipe to close on mobile
  useEffect(() => {
    if (!open || !dialogRef.current) return;

    let startY = 0;
    let currentY = 0;
    const threshold = 100; // Minimum distance to trigger close

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      currentY = e.touches[0].clientY;
      const diff = currentY - startY;
      
      if (diff > 0) { // Only allow downward swipe
        e.preventDefault();
        if (dialogRef.current) {
          dialogRef.current.style.transform = `translateY(${Math.min(diff, threshold)}px)`;
          dialogRef.current.style.opacity = `${1 - (diff / threshold) * 0.3}`;
        }
      }
    };

    const handleTouchEnd = () => {
      const diff = currentY - startY;
      
      if (diff > threshold) {
        onClose();
      } else {
        // Reset position
        if (dialogRef.current) {
          dialogRef.current.style.transform = '';
          dialogRef.current.style.opacity = '';
        }
      }
    };

    const element = dialogRef.current;
    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [open, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none mx-4 sm:mx-0 max-h-[95vh] overflow-hidden">
        <div 
          ref={dialogRef}
          className="flex flex-col md:flex-row w-full bg-white rounded-lg overflow-hidden relative h-full max-h-[95vh] md:max-h-none transition-all duration-200"
        >
          {/* Left Side - Illustration and Text */}
          <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 bg-blue-500 min-h-[200px] md:min-h-0" style={{ background: 'linear-gradient(to right, #2563eb, #7deff6)' }}>
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 text-center">Get A Free Quote Now</h2>
            <p className="text-white mb-4 md:mb-6 text-center text-sm md:text-base px-2">Please complete this form to be connected by one of our experts.</p>
            <img src="/TechSynapsepop.png" alt="Quote Illustration" className="w-24 h-24 md:w-64 md:h-64 object-contain" />
          </div>
          {/* Right Side - Form */}
          <div className="flex-1 p-4 md:p-8 bg-gray-50 flex flex-col justify-center overflow-y-auto min-h-0">
            <form className="space-y-3 md:space-y-4">
              <input type="text" placeholder="Name" className="w-full px-3 md:px-4 py-3 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 text-sm md:text-base" />
              <input type="email" placeholder="Email Id" className="w-full px-3 md:px-4 py-3 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 text-sm md:text-base" />
              <input type="tel" placeholder="Phone Number" className="w-full px-3 md:px-4 py-3 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 text-sm md:text-base" />
              <textarea placeholder="Enter Message" rows={2} className="w-full px-3 md:px-4 py-3 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 resize-none text-sm md:text-base" />
              {/* Simulated reCAPTCHA */}
              <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-3 md:p-4">
                <input type="checkbox" className="w-5 h-5 md:w-5 md:h-5" />
                <span className="text-gray-700 text-sm md:text-base">I'm not a robot</span>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-5 md:h-6 ml-auto" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 text-sm md:text-base">SUBMIT</button>
            </form>
          </div>
          {/* Close Button - Made larger and more accessible on mobile */}
          <button 
            onClick={onClose} 
            className="absolute top-3 md:top-4 right-3 md:right-4 text-gray-500 hover:text-gray-900 bg-white rounded-full p-3 shadow-md focus:outline-none z-10 transition-all duration-200 hover:bg-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close popup"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          {/* Swipe indicator for mobile */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full md:hidden"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuotePopup; 