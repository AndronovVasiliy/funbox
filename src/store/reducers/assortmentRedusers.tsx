import { createSlice } from "@reduxjs/toolkit";

export interface ProductType {
    withTaste: string
    numberOfServings: number
    gift: string
    numberOfGifts: number
    id: number
    description: string,
    availability: boolean
    weight: number
}

const initialState: ProductType[] = [
    {
        withTaste: "фуа-гра",
        numberOfServings: 10,
        gift: "Мышь",
        numberOfGifts: 0,
        id: 1,
        description: 'Печень утки разваренная с артишоками',
        availability: true,
        weight: 0.5
    },
    {
        withTaste: "рыбой",
        numberOfServings: 40,
        gift: "Мыши",
        numberOfGifts: 2,
        id: 2,
        description: 'Головы щучьи с чесноком да свежайшая семгушка',
        availability: true,
        weight: 2
    },
    {
        withTaste: "курой",
        numberOfServings: 100,
        gift: "Мышей",
        numberOfGifts: 5,
        id: 3,
        description: 'Филе из циплят с трюфелями в бульоне',
        availability: false,
        weight: 5
    }
]

export const numbersReducers = createSlice({
    name: 'number',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})