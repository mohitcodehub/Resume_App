import React, { } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCP = ({ formClose, setFormClose }) => {
  return (
    <button
      aria-label="Form Open/Close"
      className="exclude-print fixed bottom-6 left-6 font-bold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl border-2 border-white/20 hover:shadow-3xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose ? <BsFillArrowRightCircleFill className="w-12 h-12" title="Form Open" /> : <BsFillArrowLeftCircleFill className="w-12 h-12" title="Form Close" />}
    </button>
  )
}

export default FormCP;