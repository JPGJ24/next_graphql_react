import { useEffect, useState } from "react";
import { ParametersStorage } from "../interfaces/luseLocalStorage";

export function useLocalStorage({ key, initialValue }:ParametersStorage){
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
     
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value:any) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue];
}

