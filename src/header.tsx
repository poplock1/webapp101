import { createElement } from "./tools/jsxFactory";
import { Order } from "./data/entities";

export class Header {
  props: {
    order: Order;
    submitCallback: () => void;
  };

  getContent(): HTMLElement {
    let count = this.props.order.productCount;
    return (
      <div className="p-1 db-secondary text-white text-right">
        {count === 0
          ? "(brak produktów)"
          : `Liczba produktów: ${count}, ${this.props.order.total.toFixed(2)} zł`}
          <button className="btn btn-sm btn-primary m-1" onclick={this.props.submitCallback }>
            Złóż zamówienie
          </button>
      </div>
    );
  }
}
