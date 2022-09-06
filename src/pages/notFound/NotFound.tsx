import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './NotFound.module.scss'

export const NotFound: FC = (): ReturnComponentType => <h1 className={style.notFound}>404 page not found</h1>
