export const GET_CATEGORIES = ` { categories 
   {
      name
    }
  }
`;

export const PRODUCTS_PRICES = `{category { products
      {
        prices 
        {
          amount
          currency 
          {
            label
          }
        }
      }
    }
  }
`;

export const queryFn = (something) => {
  return ` {
  category(input:{ title:"${something}"}){
    products 
      {
        id
        name
        inStock
        prices
          {
            amount
            currency
              {
                label
              }
          }
        gallery
      }
    }
  }`;
};

export const CURRENCIES_LABEL = `{
    currencies
      {
        label,
        symbol
      }
  }
`;
