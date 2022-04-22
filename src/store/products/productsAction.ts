import axios from "axios";
import { Dispatch } from "redux";
import {
  ActionCreatorsTypes,
  ActionTypes,
  ProductType,
  Respons,
  SetProductsType,
  SetErrorType,
  SetLoadType,
} from "./productsReduser";

export const setProducts: (products: ProductType[]) => SetProductsType = (
  products: ProductType[]
) => {
  return { type: ActionTypes.SET_PRODUCTS, products };
};

export const setError = (error: string): SetErrorType => {
  return { type: ActionTypes.SET_ERROR, error };
};

export const setLoad = (): SetLoadType => {
  return { type: ActionTypes.SET_LOAD };
};

export const getProducts = () => {
  return async (dispatch: Dispatch<ActionCreatorsTypes>) => {
    dispatch(setLoad());
    try {
      const { data } = await axios.get<Respons>(
        "https://artisant.io/api/products"
      );
      if (data.status !== "success") {
        throw new Error();
      }

      dispatch(setProducts(data.data.products.slice(0, 30)));
    } catch (e) {
      dispatch(setError("SomeError"));
    }
  };
};
