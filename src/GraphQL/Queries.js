export const GET_CATEGORIES = `
  {
    categories {
      name
    }
  }
`;
export const PRODUCT_CARD = `{category { products {
        id
        name
        inStock
        prices {
          amount
          currency {
            symbol
          }
        }
        gallery
      }
    }
  }
`;

//
//

export const queryFn = (something) => {
  return ` {
  category(input:{ title:"${something}"}){
    products {
      id
      name
      inStock
      prices {
        amount
        currency {
          symbol
        }
      }
      gallery
    }
  }
}`;
};

const variables = { title: "what-is-a-rest-api" };

// const something = {
//   title: "tech",
// };

export const CURRENCIES_LABEL = `
  {
    currencies{label,symbol}
  }
  `;
