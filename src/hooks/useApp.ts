import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import type {RootState, AppDispatch} from '../store'

// типизированный аналог useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
// типизированный аналог useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
