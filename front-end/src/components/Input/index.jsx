/* eslint-disable react/prop-types */
function Input({ text, onChange, name, checked }) {
  return (
    <div className={`pl-2 pr-2 flex justify-center items-center gap-1 text-red-900 hover:text-white hover:border-black border_grad hover:bg-red-900  font-bold cursor-pointer ${checked ? "selected" : ""}`}>
      <input
        type="radio"
        id={text}
        name={name}
        value={text}
        className="cursor-pointer w-0"
        onChange={onChange}
        checked={checked}
      />
      <label className="cursor-pointer" htmlFor={text}>
        {text}
      </label>
    </div>
  );
}
export default Input;
