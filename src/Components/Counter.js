import { useAtom } from "jotai";
import React, { Component } from "react";
import { setTotalAtom, totalAtom } from "../Jotai/Atoms";

export function Counter({ countAtom, price, id }) {
  const [count, setCount] = useAtom(countAtom);
  const [total] = useAtom(totalAtom);
  const [, setTotal] = useAtom(setTotalAtom);

  return (
    <CounterClass
      total={total}
      id={id}
      setTotal={setTotal}
      count={count}
      setCount={setCount}
      price={price}
    />
  );
}

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      charge: "",
    };
  }
  componentDidMount() {
    const { price, setTotal, count, id } = this.props;
    setTotal({ id, charge: count * price });
  }
  componentDidUpdate() {
    const { price, setTotal, count, id } = this.props;
    if (this.state.count !== count) {
      this.setState({ count });
      setTotal({ id, charge: count * price });
    }
  }

  render() {
    const { count, setCount, id } = this.props;

    return (
      <>
        <p
          type="button"
          onClick={() =>
            setCount((c) => {
              return c - 1 < 1 ? 1 : c - 1;
            })
          }
        >
          -
        </p>
        <p>{count}</p>
        <p type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </p>
      </>
    );
  }
}

export default Counter;
