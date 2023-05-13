
interface inputFieldProps {
  type: string
  pHolderValue: string
  labelValue: string
  name: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  classes: string
  errorValue: string | undefined
  handleBlur:(event: React.FocusEvent<HTMLInputElement>)=>void
}

const InputField = ({handleBlur,errorValue,classes, type, pHolderValue, labelValue,name,handleChange ,value }:inputFieldProps) => {
  return (
    <div className='input-field'>
      <label htmlFor=''>{labelValue}</label>
      <input onBlur={handleBlur} className={classes} type={type} placeholder={pHolderValue} onChange={handleChange} value={value} name={name} />
     <p className="error-message">{errorValue}</p> 
    </div>
  )
}

export default InputField
