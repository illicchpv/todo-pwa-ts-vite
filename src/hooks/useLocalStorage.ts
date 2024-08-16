// usage:
// const {setItem, getItem, remItem} = useLocalStorage('value')
// <button onClick={() => setItem(value)}>set</button>
// <button onClick={() => console.log('value: ', getItem())}>get</button>
// <button onClick={remItem}>rem</button>
export const useLocalStorage = (key: string) => {

  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('useLocalStorage setItem catch e: ', e);
    }
  }

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (e) {
      console.error('useLocalStorage getItem catch e: ', e);
    }
  }

  const remItem = () => {
    try {
      window.localStorage.removeItem(key)
    } catch (e) {
      console.error('useLocalStorage remItem catch e: ', e);
    }
  }

  const remUserInfo = (name: string, linkKey: string) => {
    try {
      const item = window.localStorage.getItem(key)
      const uList = item ? JSON.parse(item) : undefined
      if(!uList) return
      const newList = uList.filter((el:string) => el !== name.toLowerCase())
      window.localStorage.setItem(key, JSON.stringify(newList))
      window.localStorage.removeItem(linkKey)
    } catch (e) {
      console.error('useLocalStorage getItem catch e: ', e);
    }
  }

  return { setItem, getItem, remItem, remUserInfo,}
}