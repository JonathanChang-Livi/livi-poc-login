import dynamic from "next/dynamic";
import { UseBoundStore } from "zustand";
import { StoreApi } from "zustand/vanilla";

//@ts-ignore
// export const ShareStateProvider = dynamic(() => import('csm/provider'))

export interface IShareState<T> {
    current: T
    update: (value: T) => void
}

//@ts-ignore
export const useAuthState: UseBoundStore<StoreApi<IShareState<string | undefined>>> = dynamic(() => import('csm/useAuth'))
// export interface UserInfo {
//     username: string
//     accBalance: string
// }
//@ts-ignore
// export const useUserState: UseBoundStore<StoreApi<IShareState<UserInfo>>> = dynamic(() => import('csm/useUser'))
