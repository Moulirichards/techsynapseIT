import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

interface QuotePopupProps {
  open: boolean;
  onClose: () => void;
}

const QuotePopup: React.FC<QuotePopupProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
        <div className="flex flex-col md:flex-row w-full bg-white rounded-lg overflow-hidden relative" style={{ minHeight: 400 }}>
          {/* Left Side - Illustration and Text */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 bg-blue-500" style={{ background: 'linear-gradient(to right, #2563eb, #7deff6)' }}>
            <h2 className="text-3xl font-bold text-white mb-2">Get A Free Quote Now</h2>
            <p className="text-white mb-6 text-center">Please complete this form to be connected by one of our experts.</p>
            <img src="/TechSynapsepop.png" alt="Quote Illustration" className="w-64 h-64 object-contain" />
          </div>
          {/* Right Side - Form */}
          <div className="flex-1 p-8 bg-gray-50 flex flex-col justify-center">
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400" />
              <input type="email" placeholder="Email Id" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400" />
              <textarea placeholder="Enter Message" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-400 resize-none" />
              {/* Simulated reCAPTCHA */}
              <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg p-4">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-gray-700">I'm not a robot</span>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-6 ml-auto" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">SUBMIT</button>
            </form>
          </div>
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold focus:outline-none z-10">
            <X className="h-6 w-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuotePopup; 