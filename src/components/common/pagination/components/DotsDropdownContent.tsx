type DotsDropdownContentProps = {
  pagesRange: number[]
  onPageChange: (page: number) => void
}

export const DotsDropdownContent = ({ pagesRange, onPageChange }: DotsDropdownContentProps) => {
  const onClick = (pageNumber: number) => () => {
    onPageChange(pageNumber)
  }

  return (
    <div className='flex flex-col py-1 max-h-[145px] overflow-y-scroll'>
      {pagesRange.map((pageNumber) => (
        <div
          key={pageNumber}
          className='flex w-full justify-center py-1 font-semibold text-sm cursor-pointer hover:bg-[#E0E0E0]'
          onClick={onClick(pageNumber)}
        >
          <span>{pageNumber}</span>
        </div>
      ))}
    </div>
  )
}
