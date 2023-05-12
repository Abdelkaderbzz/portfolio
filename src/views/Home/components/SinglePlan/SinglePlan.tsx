
import { FaCheck } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { plansProps } from '../Plans/Plans';
interface Props
{
  plan: plansProps[];
}
const SinglePlan: React.FC<{ plan: plansProps }> = ({ plan }) =>
{
  
  return (
    <div
      className={plan?.popularity ? 'single-plan best-plan' : 'single-plan'}
    >
      {plan?.popularity && (
        <div className='most-popular'>{plan?.popularity}</div>
      )}
      <h5 className='plan-name'>{plan.name}</h5>
      <p className='plan-price'>
        <span>${plan.price} </span>/{plan.timeout}
      </p>
      <p className='plan-description'>{plan.description}</p>
      <div className='plan-offers'>
        {plan.availability.map((offer, index) => {
          return (
            <div key={index} className='single-offer available'>
              <FaCheck />
              <p>{offer}</p>
            </div>
          )
        })}
        {plan.notAvailable &&
          plan.notAvailable.map((offer, index) => {
            return (
              <div key={index} className='single-offer not-available'>
                <GrFormClose />
                <p>{offer}</p>
              </div>
            )
          })}
      </div>
      <button
        className={plan?.popularity ? 'order-btn most-order-btn' : 'order-btn'}
      >
        ORDER NOW
      </button>
    </div>
  )
}

export default SinglePlan