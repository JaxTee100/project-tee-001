import React from 'react'
import { AccessoriesCard } from '../../components'
import {PiFunnelSimpleBold} from 'react-icons/pi'
import { Acc1, Acc2, Acc3, Acc4, Acc5, Acc6, Acc7, Acc8, Acc9, Acc10, Acc11, Acc12, Acc13, Acc14, Acc15 } from '../../assets/accessories'

const Accesories = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-[24px] md:gap-[16px] lg:gap-[32px] max-w-[358px] md:max-w-[696px]  lg:max-w-[1536px] mx-auto'>
        <div className=' flex flex-col w-full'>
            <h2 className='font-semibold text-[16px] md:text-[24px] lg:text-[32px] text-[#1e293b]'>CR-V Hybrid Touring</h2>
            <div className='flex justify-between items-center'>
                <p className='text-[12px] md:text-[16px] lg:text-[18px] font-normal text-[#1e293b]'>Here are some accessories for your car</p>
                <div className='flex  items-center w-[81px] h-[27px] gap-[8px]'>
                    <PiFunnelSimpleBold className='text-[18px] text-[#1e293b]'/>
                    <p className='text-[12px] md:text-[18px] font-normal'>Filters</p>
                </div>
            </div>
        </div>
      <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mx-auto'>
          <AccessoriesCard Img={Acc1} />
          <AccessoriesCard Img={Acc2} />
          <AccessoriesCard Img={Acc3} />
          <AccessoriesCard Img={Acc4} />
          <AccessoriesCard Img={Acc5} />
          <AccessoriesCard Img={Acc6} />
          <AccessoriesCard Img={Acc7} />
          <AccessoriesCard Img={Acc8} />
          <AccessoriesCard Img={Acc9} />
          <AccessoriesCard Img={Acc10} />
          <AccessoriesCard Img={Acc11} />
          <AccessoriesCard Img={Acc12} />
          <AccessoriesCard Img={Acc13} />
          <AccessoriesCard Img={Acc14} />
          <AccessoriesCard Img={Acc15} />

        

      </div>
    </div>
  )
}

export default Accesories
