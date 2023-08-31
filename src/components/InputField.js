import React from 'react'

const InputField = ({placeholder,type}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      class="input input-bordered w-full max-w-xs"
    />
  );
}

export default InputField