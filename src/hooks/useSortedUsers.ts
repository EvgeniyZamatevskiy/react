import { useMemo } from "react"
import { UserType } from "types"

export const useSortedUsers = (users: UserType[], sortValue: string): UserType[] => {

  const sortedUsers = useMemo(() => {

    if (sortValue) {
      return [...users].sort((a, b) => {
        return a[sortValue as keyof UserType] > b[sortValue as keyof UserType] ? 1 : -1
      })
    } else {
      return users
    }
  }, [users, sortValue])

  return sortedUsers
}
