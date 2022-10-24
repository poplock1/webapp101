import { createElement } from "./tools/jsxFactory";
import { Product, Order } from "./data/entities";

export class OrderDetails {

    props: {
        order: Order,
        cancellCallback: () => void,
        submitCallback: () => void
    }

    getContent(): HTMLElement {
        return <div>
            <h3 className="text-center bg-primary text-white p-2">
                Informacje o zamówieniu
            </h3>
            <div className="p-3">
                <table className="table table-sm table-striped">
                    <thread>
                        <tr>
                            <th>Ilość</th><th>Produkt</th>
                            <th className="target-right">Cena</th>
                            <th className="target-right">Wartość</th>
                        </tr>
                    </thread>
                    <tbody>
                        {this.props.order.orderLines.map(line=>
                            <tr>
                                <td>{ line.quantity }</td>
                                <td>{ line.product.name }</td>
                                <td className="text-right">
                                    {line.product.price.toFixed(2)} zł
                                </td>
                                <td className="text-right">
                                    {(line.quantity*line.product.price).toFixed(2)} zł
                                </td>
                            </tr>
                            )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="text-right" colSpan="3">Razem:</th>
                            <th className="text-right">
                                { this.props.order.total.toFixed(2)} zł
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="text-center">
                <button className="btn btn-secondary m-1" onclick={ this.props.cancellCallback }>
                    Wróć
                </button>
                <button className="btn btn-primary m-1" onclick={ this.props.submitCallback }>
                    Złóż zamówienie
                </button>
            </div>
        </div>
    }
}