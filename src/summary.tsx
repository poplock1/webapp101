import { createElement } from "./tools/jsxFactory";

export class Summary {

    props: {
        orderId: number,
        callback: () => void
    }

    getContent(): HTMLElement {
        return <div className="m-2 text-center">
            <h2>Dziękujemy!</h2>
            <p>Dziękujemy za złożone zamówienia.</p>
            <p>Numer zamówienia #{ this.props.orderId }</p>
            <p>Zamównione produkty zostaną wkrótce wysłane.</p>
            <button className="btn btn-primary" onclick={this.props.callback}>
                OK
            </button>
        </div>
    }
}