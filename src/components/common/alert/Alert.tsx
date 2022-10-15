import React, {FC} from "react"
import {useState} from "react"
import {AlertPropsType} from "./types"
import {ReturnComponentType} from "types"
import style from "./Alert.module.scss"

export const Alert: FC<AlertPropsType> = ({children, type, message}): ReturnComponentType => {

  const [isShow, setIsShow] = useState(true)

  const renderElAlert = function () {
    return React.cloneElement(children)
  }

  const handleClose = (event: any) => {
    event.preventDefault()
    setIsShow(false)
  }

  return (
    <div className={`${style.alert} ${style[type]} ${!isShow && style.hide}`}>
      <span className={style.closebtn} onClick={handleClose}>&#215;</span>
      {children ? renderElAlert() : message}
    </div>
  )
}
