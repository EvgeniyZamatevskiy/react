import { useCallback, useRef, useState } from 'react'
import clsx from 'clsx'
import { usePagination } from 'hooks'
import { DOTS } from 'constants/base'
import { makeRange } from './utils'
import { PaginationPropsType } from './types'
import ArrowIcon from './assets/arrow.svg'
import { DotsDropdownContent } from './components'

const paginationItemCss =
  'w-8 md:w-12 h-12 flex justify-center items-center font-semibold cursor-pointer hover:bg-[#E0E0E0] rounded-lg'

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationPropsType) => {
  const firstDotsDropdownRef = useRef(null)
  const secondDotsDropdownRef = useRef(null)

  const [firstDotsDropdownIsOpen, setFirstDotsDropdownState] = useState(false)
  const [secondDotsDropdownIsOpen, setSecondDotsDropdownState] = useState(false)

  const toggleFirstDotsDropdown = useCallback(() => setFirstDotsDropdownState((prevState) => !prevState), [])
  const toggleSecondDotsDropdown = useCallback(() => setSecondDotsDropdownState((prevState) => !prevState), [])

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (!currentPage || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const onSelect = (pageNumber: number) => () => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber)
    }
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className='flex items-center'>
      {currentPage !== 1 && (
        <li className={clsx(paginationItemCss, 'hidden md:flex md:visible')} onClick={onPrevious}>
          <img src={ArrowIcon} className='scale-x-[-1]' alt='go to prev page' />
        </li>
      )}
      {paginationRange.map((pageNumber, index) => {
        // 1st dropdown always follow after first page and has index 1
        const isFirstDotsDropdown = index === 1
        const ref = isFirstDotsDropdown ? firstDotsDropdownRef : secondDotsDropdownRef

        if (pageNumber === DOTS) {
          let range: number[] = []

          if (paginationRange[index - 1] === 1) {
            range = makeRange(2, (paginationRange[index + 1] as number) - 1)
          } else if (index + 1 === paginationRange.length - 1) {
            range = makeRange(
              (paginationRange[index - 1] as number) + 1,
              (paginationRange[paginationRange.length - 1] as number) - 1,
            )
          }

          const isOpen = isFirstDotsDropdown ? firstDotsDropdownIsOpen : secondDotsDropdownIsOpen
          const toggle = isFirstDotsDropdown ? toggleFirstDotsDropdown : toggleSecondDotsDropdown

          return (
            <li
              key={pageNumber + (isFirstDotsDropdown ? 'first' : 'second')}
              ref={ref}
              className={`${paginationItemCss} relative py-0 md:py-0 pointer-events-none md:pointer-events-auto`}
              onClick={toggle}
            >
              {DOTS}
              {isOpen && (
                <div className='absolute top-14 left-0 bg-white min-w-12'>
                  <DotsDropdownContent pagesRange={range} onPageChange={onPageChange} />
                </div>
              )}
            </li>
          )
        }

        const isSelectedPage = pageNumber === currentPage

        return (
          <li
            key={pageNumber}
            className={clsx(paginationItemCss, {
              'text-[#353EEF]': isSelectedPage,
              'cursor-default': isSelectedPage,
            })}
            onClick={onSelect(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      {currentPage !== lastPage && (
        <li className={clsx(paginationItemCss, 'hidden md:flex md:visible')} onClick={onNext}>
          <img src={ArrowIcon} alt='go to next page' />
        </li>
      )}
    </ul>
  )
}
