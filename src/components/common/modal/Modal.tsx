import React, { FC, MouseEvent } from "react"
import { ReturnComponentType } from "types"
import { ModalPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import { Button } from "components"
import close from "assets/icons/close.svg"
import style from "./Modal.module.scss"

export const Modal: FC<ModalPropsType> = ({children, isActiveModal, onDeactivateModalClick}): ReturnComponentType => {

  const overlayClass = `${style.overlay} ${style.animated} ${isActiveModal ? style.show : EMPTY_STRING}`

  const onAscentCancellationClick = (event: MouseEvent<HTMLDivElement>): void => event.stopPropagation()

  return (
    <div className={overlayClass} onClick={onDeactivateModalClick}>
      <div className={style.modal} onClick={onAscentCancellationClick}>
        <Button className={style.crossContainer} onClick={onDeactivateModalClick}>
          <img src={close} alt="close"/>
        </Button>
        {children}
      </div>
    </div>
  )
}
