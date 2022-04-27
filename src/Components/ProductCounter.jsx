import { useAtom } from "jotai";
import React, { Component } from "react";
import {
  countAtom,
  decAtom,
  incAtom,
  resetCountAtom,
} from "../jotaiStore/Atoms";

export function ProductCounter() {
  const [readcountAtom] = useAtom(countAtom);
  const [, setCountInc] = useAtom(incAtom);
  const [, setCountDec] = useAtom(decAtom);
  const [, resetCount] = useAtom(resetCountAtom);

  return (
    <ProductCounterClass
      readcountAtom={readcountAtom}
      setCountInc={setCountInc}
      setCountDec={setCountDec}
      resetCount={resetCount}
    />
  );
}

class ProductCounterClass extends Component {
  render() {
    const { setCountDec, readcountAtom, setCountInc } = this.props;
    return (
      <div className="product-counter">
        <p type="button" onClick={setCountDec}>
          -
        </p>
        <p>{readcountAtom}</p>
        <p type="button" onClick={setCountInc}>
          +
        </p>
      </div>
    );
  }
}

export default ProductCounter;
