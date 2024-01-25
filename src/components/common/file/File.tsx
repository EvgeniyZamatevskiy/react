import clsx from 'clsx'
import { useRef } from 'react'
import type { ChangeEvent, FC } from 'react'
import { convertBase64 } from 'utils'
import { FilePropsType } from './types'

export const File: FC<FilePropsType> = ({ children, className, setImage, onChange, ...restProps }) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const onSelectFileClick = () => {
    fileRef.current?.click()
  }

  const onUploadFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
      return
    }

    if (!setImage) return

    const { files } = event.currentTarget
    if (!files?.length) return

    const file = files[0]

    const base64 = (await convertBase64(file)) as string
    setImage(base64)
  }

  return (
    <>
      <label onClick={onSelectFileClick} htmlFor='file' className={clsx('cursor-pointer', className)}>
        {children}
      </label>
      <input ref={fileRef} className='hidden' type='file' onChange={onUploadFileChange} {...restProps} />
    </>
  )
}
