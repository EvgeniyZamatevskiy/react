import React from 'react'

type NoImagePropsType = {
  className?: string
}

export const NoImage: React.FC<NoImagePropsType> = ({className}) => {
  return (
    <div className={className}>
      <div className="aspect-square rounded-lg flex items-center justify-center bg-[#E9E9E9]">
        <div className="w-[50%] h-[50%] relative">
          <div
            className="w-[66.5%] h-[66.5%] bg-[#fff] absolute bottom-0 left-0 scale-y-[1] scale-x-[-1] rounded-tl-[1150.21px] z-10">
            <span
              className="z-20 absolute left-[55%] top-[55%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap text-[#B9B9B9] text-[12px] font-bold scale-x-[-1]">no image</span>
          </div>
          <span
            className="w-[66.5%] h-[66.5%] bg-[#DADADA] absolute top-0 right-0 scale-y-[1] scale-x-[-1] rounded-tl-[1150.21px]"/>
        </div>
      </div>
    </div>
  )
}
