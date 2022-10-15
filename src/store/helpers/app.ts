import {AnyAction} from "@reduxjs/toolkit"

export const isErrorRejected = (action: AnyAction) => action.type.endsWith("rejected")
