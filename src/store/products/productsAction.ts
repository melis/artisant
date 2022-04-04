import axios from 'axios';
import { ActionType, Product } from './productsReduser';


export const setProducts: (products: Product[])=> ActionType = (products: Product[] ) => {
    return { type: 'SET_PRODUCTS', products };
  };
  
export const setError=(error: string) : ActionType =>{
    return {type: 'SET_ERROR', error}
}

export const setLoad=() :ActionType =>{
    return {type: 'SET_LOAD'}
}

export const getProducts =()=>{

        return async (dispatch: any)=>{
            dispatch(setLoad())
            try{
                const {data}=await axios.get('https://artisant.io/api/products')
                if (data) { throw new Error()}
                setProducts(data)
            }catch(e){
                dispatch(setError('SomeError'))
            }
          

        }
}