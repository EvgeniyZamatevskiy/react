import React, {FC, useState} from "react"
import {ReturnComponentType} from "types"
import {EMPTY_STRING} from "constants/base"
import {EditableItemPropsType} from "./types"
import {Button} from "../button"
import {Input} from "../input"
import pencil from "assets/icons/pencil.svg"
import style from "./EditableItem.module.scss"

const ERROR_MESSAGE = "Title is required!"

export const EditableItem: FC<EditableItemPropsType> =
  ({
     currentValue,
     isDisabled,
     updateValue
   }): ReturnComponentType => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [updatedValue, setUpdatedValue] = useState(EMPTY_STRING)
    const [errorMessage, setErrorMessage] = useState(EMPTY_STRING)

    const onSetCurrentValueClick = (): void => {
      setIsEditMode(true)
      setUpdatedValue(currentValue)
    }

    const handleDeactivateIsEditModeKeyDown = (): void => setIsEditMode(false)

    const handleUpdateValueBlurOrKeyDown = (): void => {
      const updatedValueTrimmed = updatedValue.trim()

      if (updatedValueTrimmed !== EMPTY_STRING) {
        setIsEditMode(false)

        if (currentValue !== updatedValueTrimmed) {
          updateValue(updatedValueTrimmed)
        }

      } else {
        setErrorMessage(ERROR_MESSAGE)
      }
    }

    return (
      <>
        {isEditMode
          ? <>
            <Input
              isPrimary
              className={style.updatedValueInput}
              placeholder="Enter a new name"
              autoFocus
              setValue={setUpdatedValue}
              value={updatedValue}
              onBlur={handleUpdateValueBlurOrKeyDown}
              onEnter={handleUpdateValueBlurOrKeyDown}
              onEscape={handleDeactivateIsEditModeKeyDown}
              // errorMessage={errorMessage}
              // setErrorMessage={setErrorMessage}
            />
          </>
          : <Button
            className={style.editableItemBtn}
            disabled={isDisabled}
            onClick={onSetCurrentValueClick}
          >
            {currentValue}
            <img className={style.pencilIcon} src={pencil} alt="pencil"/>
          </Button>}
      </>
    )
  }
