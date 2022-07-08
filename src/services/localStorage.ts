export const setDataToLocalStorage = (localStorageName: string, stringData: string,): void => {
	return localStorage.setItem(localStorageName, stringData)
}

export const getParseLocalStorageData = (localStorageName: string): any[] => {
	return JSON.parse(localStorage.getItem(localStorageName) || '[]')
}
