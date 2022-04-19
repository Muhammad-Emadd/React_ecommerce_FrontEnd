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

export const getCardDetails = (something) => {
  return ` {
    product(id: "${something}") {
      id
      name
      inStock
      gallery
      description
      prices {
        currency {
          label
        }
        amount
      }
      attributes {
        id
        name
        type
        items {
          displayValue
          id
          value
        }
      }
    }
  }`;
};
