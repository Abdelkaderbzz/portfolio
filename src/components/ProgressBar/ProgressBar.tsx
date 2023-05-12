interface ProgressProps {
  value: string
  percentage: string
}

const ProgressBar = ({ value, percentage }: ProgressProps) => {
  return (
    <div className='progress-bar'>
      <div>
        <p>{value}</p>
        <span>{percentage}</span>
      </div>
      <div className='bar'>
        <div style={{ width: `${percentage} ` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar
