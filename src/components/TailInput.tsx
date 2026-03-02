import { forwardRef } from "react"

interface TailInputProps {
  type : string; 
  name : string;
  id? : string;  
  placeholder? : string;
}

const TailInput = forwardRef<HTMLInputElement, TailInputProps>(
  ({ type, name, id, placeholder }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          name={name}
          id={id || name}
          placeholder={placeholder}
          ref={ref}
          className="w-full p-2 text-gray-900 border border-[#003675] rounded-lg
                    bg-gray-50 text-base focus:ring-[#003675] focus:border-[#003675]" 
        />
      </div>
    );
  }
);

TailInput.displayName = "TailInput";
export default TailInput;