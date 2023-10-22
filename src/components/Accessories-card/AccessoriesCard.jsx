import {BsCart2} from 'react-icons/bs'

const AccessoriesCard = ({Img}) => {
  return (
    <div className='w-full max-h-[200px] lg:max-h-[252px] border  rounded-[24px] flex flex-col justify-between overflow-hidden active:border active:border-[black] '>
      {/* #e2e8f0 */}
      <div className='flex items-center lg:max-w-[490.67px]  max-h-[147px] lg:max-h-[196px] gap-[24px] p-[16px]'>
        <div className='max-w-[115px] lg:max-w-[164px] '>
            <img src={Img } alt='steerwheel' className='w-full  max-h-[115px] lg:max-h-[164px] transition-transform transform hover:scale-75'/>
         </div>
        <div className='    text-[#1e293b]'>
            <p className='font-semibold max-w-[240px]  text-[18px] md:text-[18px] lg:text-[24px] text-[#1e293b]'>Engine Block Heater</p>
            <div className='mb-[10px] lg:mb-[14px]'>
              <span className='font-regular text-[14px] text-[#475569]'>Installation: </span>
              <span className='font-semibold text-[14px text-[#1e293b]]'>Yes</span>
            </div>
            <div>
              <span className='font-regular text-[14px] lg:text-[20px] mr-[10px] '>Price:</span>
              <span className='font-semibold text-[14px lg:texxt-[20px]]'>$475.00</span>
            </div>
            
            
        </div>
      </div>
      <button className='flex  border border-t outline-none w-[100%] h-[53px] md:w-[100%] md:h-[53px] lg:w-[100%]  lg:h-[56px] items-center justify-center gap-[12px] text-[#445567] active:bg-[#334155] active:text-[white] mx-auto'>
        <BsCart2 size={20} />
        <p className='text-[14px] lg:text-[16px] font-semibold lg:font-normal'>Add to Quote</p>
      </button>
    </div>
  )
} 

export default AccessoriesCard