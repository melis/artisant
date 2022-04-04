import axios from 'axios';
import { ActionType, ProductType, Respons } from './productsReduser';


export const setProducts: (products: ProductType[])=> ActionType = (products: ProductType[] ) => {
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
                const {data }=await axios.get<Respons>('https://artisant.io/api/products')
                if (data.status!=='success') { throw new Error()}
               
               dispatch(setProducts(data.data.products.slice(0, 10)))
              
                
            }catch(e){
                dispatch(setError('SomeError'))
            }
          

        }
}