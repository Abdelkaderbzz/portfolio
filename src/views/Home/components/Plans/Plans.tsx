import SinglePlan from '../SinglePlan/SinglePlan'
export interface plansProps {
  name: string
  price: string
  timeout: string
  description: string
  availability: string[]
  notAvailable: string[]
  popularity?: string
}
interface singlePlanProps {
  singleplan: object
}
const plans: plansProps[] = [
  {
    name: 'Silver',
    price: '0.00',
    timeout: 'Hour',
    description: 'For Most Businesses that Want to Optimize Web Queries',
    availability: ['UI Design', 'Web Development'],
    notAvailable: [
      'Logo Design',
      'Seo Optimization',
      'WordPress Integration',
      '5 Websites',
      'Unlimited Users',
      '20 GB Bandwith',
    ],
  },
  {
    popularity: 'Most Popular',
    name: 'Gold',
    price: '50.00',
    timeout: 'Hour',
    description: 'For Most Businesses that Want to Optimize Web Queries',
    availability: [
      'UI Design',
      'Web Development',
      'Logo Design',
      'Seo Optimization',
    ],
    notAvailable: [
      'WordPress Integration',
      '5 Websites',
      'Unlimited Users',
      '20 GB Bandwith',
    ],
  },
  {
    name: 'Dimond',
    price: '80.00',
    timeout: 'Hour',
    description: 'For Most Businesses that Want to Optimize Web Queries',
    availability: [
      'UI Design',
      'Web Development',
      'Logo Design',
      'Seo Optimization',
      'WordPress Integration',
      '5 Websites',
      'Unlimited Users',
      '20 GB Bandwith',
    ],
    notAvailable: [],
  },
]

const Plans = () => {
  return (
    <div className='plans'>
      <h1 className='plans-title'>Price Plans</h1>
      <p className='plans-description'>
        asperiores tenetur ipsum incidunt! Magnam enim inventore molestias
      </p>
      <div className='plans-cards'>
        {plans.map((item, index) => {
          return <SinglePlan key={index} plan={item} />
        })}
      </div>
    </div>
  )
}

export default Plans
