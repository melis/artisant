

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

    export interface Product {
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


type StateType={
    products: Product[],
    load: boolean,
    error: null | string 
}

const productState: StateType = {
    products: [],
    load: false,
    error: null
  };
  
export type ActionType={ type: 'SET_PRODUCTS', products: Product[] } | { type: 'SET_ERROR', error: string} | {type: 'SET_LOAD'}

 
  const reducer = (state = productState, action: ActionType): StateType => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {  products: [...state.products, ...action.products], load: false, error: null };
    case "SET_LOAD":
        return { ...state, load: true, error: null}
        case "SET_ERROR":
        return { ...state, load: false, error: action.error}
      default:
        return state;
    }
  };
  
  export default reducer;