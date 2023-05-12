
interface OneInfoProps
{
  infoName: string;
  infoValue: string|number;
}
const OneInfo = ({infoName,infoValue}:OneInfoProps) => {
  return (
    <div className='info-item'>
      <p>{infoName}:</p>
      {infoValue == 'Available' ? (
        <span style={{ color: '#7EB942' }}>{infoValue}</span>
      ) : (
        <span>{infoValue}</span>
      )}
    </div>
  )
}

export default OneInfo