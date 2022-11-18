import { useMemo } from "react"
import { UserType } from "types"

export const useSearchedUsers = (users: UserType[], searchTitle: string): UserType[] => {

  const sortedAndSearchPosts = useMemo(() => {
    return users.filter(({title}) => title.toLowerCase().includes(searchTitle.toLowerCase()))
  }, [searchTitle, users])

  return sortedAndSearchPosts
}
