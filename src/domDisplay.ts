import { Product, Order } from "./data/entities";

export class DomDisplay {

    props: {
        products: Product[],
        order: Order
    }

    getContent(): HTMLElement {
        let elem = document.createElement("h3");
        elem.innerText = this.getElementText();
        elem.classList.add("bg-primary", "text-center", "text-white", "p-2");
        return elem;
    }

    getElementText() {
        return `Liczba produktów: ${this.props.products.length}, `
                + `Wartość całkowita zamówienia: ${ this.props.order.total } zł`;
    }
}
