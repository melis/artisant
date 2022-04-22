export interface Avatar {
  original: string;
  compressed: string;
}

export interface OtherFile {
  original: string;
}

export interface AdditionalPhoto {
  original: string;
  compressed: string;
}

export interface Image {
  original: string;
  compressed: string;
}

export interface CreatedBy {
  user_id: number;
  display_name: string;
  public_address: string;
  custom_url: string;
  image: Image;
}

export interface Attribute {
  value: string;
  trait_type: string;
}

export interface JsonNftData {
  name: string;
  image: string;
  attributes: Attribute[];
  description: string;
  external_url: string;
}

export interface ProductType {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  avatar: Avatar;
  other_file: OtherFile;
  additional_photos: AdditionalPhoto[];
  created_by: CreatedBy;
  json_nft_data: JsonNftData;
  json_nft_link: string;
  tx_status: string;
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number;
  on_main_page: boolean;
  is_wearable: boolean;
  latest_price: string;
  quantity_available: number;
}

export interface Respons {
  status: string;
  data: {
    products: ProductType[];
    creators: any;
  };
}

export type StateType = {
  products: ProductType[];
  load: boolean;
  error: null | string;
};

const productState: StateType = {
  products: [],
  load: false,
  error: null,
};

export enum ActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_LOAD = "SET_LOAD",
  SET_ERROR = "SET_ERROR",
}

export interface SetProductsType {
  type: ActionTypes.SET_PRODUCTS;
  products: ProductType[];
}

export interface SetLoadType {
  type: ActionTypes.SET_LOAD;
}

export interface SetErrorType {
  type: ActionTypes.SET_ERROR;
  error: string;
}
export type ActionCreatorsTypes = SetProductsType | SetErrorType | SetLoadType;

const reducer = (
  state: StateType = productState,
  action: ActionCreatorsTypes
): StateType => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { products: action.products, load: false, error: null };
    case ActionTypes.SET_LOAD:
      return { ...state, load: true, error: null };
    case ActionTypes.SET_ERROR:
      return { ...state, load: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
