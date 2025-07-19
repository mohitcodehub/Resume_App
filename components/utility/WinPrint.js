import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {

const print = () => {
    window.print();
    };

return (
    <button
        aria-label="Download Resume"
        className="exclude-print fixed bottom-6 right-6 font-bold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl border-2 border-white/20 hover:shadow-3xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
        onClick={print}
      >
       <MdPictureAsPdf className="w-12 h-12" title="Download Resume"/>
      </button>
    );
};

export default WinPrint;