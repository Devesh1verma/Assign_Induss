import { useRef } from "react"
import CountUp from 'react-countup';

const Counters = () => {

    const countUpRef = useRef(null);
  return (
    <div className='pt-5 pb-3'>

        <div className='row gx-0'>
            <div className="col-sm-4 pe-3">
                <h1 className='countup-heading'>1M+</h1>
                <p className='countup-desc'>Customers visit Omega every month to get their service done.</p>
            </div>
            <div className="col-sm-4 px-3">
                <h1 className='countup-heading'>
        <CountUp
          start={0}
          end={92}
          duration={3}
          suffix="%"
          ref={countUpRef}
        />
        </h1>
                <p className='countup-desc'>Satisfaction rate comes from our awesome customers.</p>

            </div>
            <div className="col-sm-4 ps-3">
            <h1 className='countup-heading'>4.9/5.0
                
            </h1>
            <p className='countup-desc'>Average customer ratings we have got all over internet.</p>
            </div>
        </div>

    </div>
  )
}

export default Counters