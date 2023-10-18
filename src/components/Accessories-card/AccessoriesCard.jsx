import {BsCart2} from 'react-icons/bs'

const AccessoriesCard = ({Img}) => {
  return (
    <div className='bg-white w-[350px] md:w-[336px] lg:w-[490.67px] h-[200px] lg:h-[252px] border  rounded-[24px] flex flex-col justify-between overflow-hidden active:border active:border-[black] '>
      {/* #e2e8f0 */}
      <div className='flex items-center lg:w-[490.67px]  h-[147px] lg:h-[196px] gap-[24px] p-[16px]'>
        <div>
            <img src={Img } alt='steerwheel' className='w-[115px] lg:w-[164px] h-[115px] lg:h-[164px] transition-transform transform hover:scale-75'/>
         </div>
        <div className=' w-[165px] lg:w-[270px] h-[92px] lg:h-[109px] text-[#1e293b]'>
            <h1 className='font-semibold text-[16px] lg:text-[25px] text-[#1e293b]'>Engine Block Heater</h1>
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
      <button className='flex  border border-t outline-none w-[358px] h-[53px] md:w-[336px] md:h-[53px] lg:w-[490.67px] lg:h-[56px] items-center justify-center gap-[12px] text-[#445567] active:bg-[#334155] active:text-[white]'>
        <BsCart2 size={20} />
        <p className='text-[14px] lg:text-[16px] font-semibold lg:font-normal'>Add to Quote</p>
      </button>
    </div>
  )
} 

export default AccessoriesCard