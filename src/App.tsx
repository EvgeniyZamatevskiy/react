import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { Header } from 'components'

export const App: FC = (): ReturnComponentType => {
  return (
    <div>
      <Header />
    </div>
  )
}
