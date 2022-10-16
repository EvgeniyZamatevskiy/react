import React, {FC, KeyboardEvent, useEffect, useRef, useState} from "react"
import {ReturnComponentType} from "types"
import {EMPTY_STRING} from "constants/base"
import {EditableItemPropsType} from "./types"
import {Button, Input} from "components"
import {Key} from "enums"
import style from "./EditableItem.module.scss"

export const EditableItem: FC<EditableItemPropsType> = ({currentTitle, updateTitle}): ReturnComponentType => {

  const [isEditMode, setIsEditMode] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(EMPTY_STRING)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.select()
    }
  }, [isEditMode])

  const onSetCurrentTitleClick = (): void => {
    setIsEditMode(true)
    setUpdatedTitle(currentTitle)
  }

  const handleUpdateTitleBlurOrKeyDown = (): void => {
    setIsEditMode(false)

    const updatedTitleTrimmed = updatedTitle.replace(/\s+/g, " ").trim()

    if (currentTitle !== updatedTitleTrimmed) {
      updateTitle(updatedTitleTrimmed)
    }
  }

  const onUpdateTitleBlur = (): void => {
    handleUpdateTitleBlurOrKeyDown()
  }

  const onUpdateTitleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === Key.ENTER) {

      handleUpdateTitleBlurOrKeyDown()
      return
    }

    if (event.key === Key.ESCAPE) {
      setIsEditMode(false)
      return
    }
  }

  return (
    <>
      {isEditMode
        ? <Input
          ref={inputRef}
          className={style.updatedValueInput}
          setValue={setUpdatedTitle}
          value={updatedTitle}
          onBlur={onUpdateTitleBlur}
          onKeyDown={onUpdateTitleKeyDown}
        />

        : <Button className={style.editableItemBtn} onClick={onSetCurrentTitleClick}>
          {currentTitle || "Set status"}
        </Button>}
    </>
  )
}
