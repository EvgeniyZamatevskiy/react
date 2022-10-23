import { instance } from "api/config"
import { LoginDataType } from "./types"

export const AUTH = {
  login() {
    return instance.post<LoginDataType>("", {
      params: {}
    })
  }
}
