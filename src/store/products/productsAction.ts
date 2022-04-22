import axios from "axios";
import { Dispatch } from "redux";
import {
  ActionBodyTypes,
  ActionTypes,
  ProductType,
  Respons,
} from "./productsReduser";

export const setProducts: (products: ProductType[]) => ActionBodyTypes = (
  products: ProductType[]
) => {
  return { type: ActionTypes.SET_PRODUCTS, products };
};

export const setError = (error: string): ActionBodyTypes => {
  return { type: ActionTypes.SET_ERROR, error };
};

export const setLoad = (): ActionBodyTypes => {
  return { type: ActionTypes.SET_LOAD };
};

export const getProducts = () => {
  return async (dispatch: Dispatch<ActionBodyTypes>) => {
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
