import { AbstractDataSource } from "./abstractDataSource";
import { Product } from "./entities";

export class LocalDataSource extends AbstractDataSource {

    protected loadProducts(): Promise<Product[]> {
        return Promise.resolve([
            {
                id: 1,
                name: "P1",
                category: "Sporty wodne",
                description: "P1 (Sporty wodne)",
                price: 3
            },
            {
                id: 2,
                name: "P2",
                category: "Sporty wodne",
                description: "P2 (Sporty wodne)",
                price: 4
            },
            {
                id: 3,
                name: "P3",
                category: "Bieganie",
                description: "P3 (Bieganie)",
                price: 5
            },
            {
                id: 4,
                name: "P4",
                category: "Szachy",
                description: "P4 (Szachy)",
                price: 6
            },
            {
                id: 5,
                name: "P5",
                category: "Szachy",
                description: "P5 (Szachy)",
                price: 7
            }
        ]);
    }

    storeOrder(): Promise<number> {
        console.log("Złożenie zamowienia");
        console.log(JSON.stringify(this.order));
        return Promise.resolve(1);
    }
}