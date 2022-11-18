import React, { FC, useEffect, useState } from "react"
import { PaginationPropsType } from "./types"
import { Button } from "components"
import { ReturnComponentType } from "types"
import { usePages } from "hooks"
import classes from "./index.module.scss"

export const Pagination: FC<PaginationPropsType> =
  ({
     totalItemsCount,
     pageCount,
     page,
     handleSetPageClick,
     portionSize = 10
   }): ReturnComponentType => {

    const [portionNumber, setPortionNumber] = useState(1)

    const pagesCount = Math.ceil(totalItemsCount / pageCount)
    const pages = usePages(pagesCount)

    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    const pagesFiltered = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    const pagesRender = pagesFiltered.map(p => {

      const onSetPageClick = (): void => handleSetPageClick(p)

      return (
        <Button key={p} className={`${classes.button} ${page === p && classes.active}`} onClick={onSetPageClick}>
          {p}
        </Button>
      )
    })

    const onDecreasePortionNumberClick = (): void => setPortionNumber(portionNumber - 1)

    const onIncreasePortionNumberClick = (): void => setPortionNumber(portionNumber + 1)

    useEffect(() => {
      setPortionNumber(Math.ceil(page / portionSize))
    }, [page])

    return (
      <div className={classes.pagination}>
        {portionNumber > 1 &&
          <Button className={classes.button} onClick={onDecreasePortionNumberClick}>&laquo;</Button>}
        {pagesRender}
        {portionCount > portionNumber &&
          <Button className={classes.button} onClick={onIncreasePortionNumberClick}>&raquo;</Button>}
      </div>
    )
  }
