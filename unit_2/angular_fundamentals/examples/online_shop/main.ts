import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

// Componente 1: Detalle del producto
@Component({
    // Selector por atributo aplicado a <tr> para que el host sea una fila
    // y evitar problemas de estructura de tabla en el DOM.
    selector: 'tr[app-product-detail]',
    standalone: true,
    styleUrls: ['table_style.css'],
    template: `
        <td style="text-align:center">{{ name }}</td>
        <td style="text-align:center"><span [class]="'label ' + categoryClass">{{ category }}</span></td>
        <td>{{ description }}</td>
        <td style="text-align:right">$ {{ price }}</td>
        <td style="text-align:center">
            <button (click)="toggleFavorite()">{{ favorite ? '🌟' : '⭐' }}</button>
        </td>
        <td style="text-align:center">
            <button (click)="addToCart()">🛒</button>
        </td>
    `,
})
export class ProductDetailComponent {
    // Propiedades públicas que representan los datos del producto.
    @Input()
    name: string = '';

    @Input()
    category: string = '';

    @Input()
    description: string = '';

    @Input()
    price: number = 0;

    @Input()
    favorite: boolean = false;

    // Devuelve la clase CSS para la categoría (usada en el binding [class])
    get categoryClass(): string {
        const key = this.category ? this.category.toLowerCase() : '';
        switch (key) {
            case 'periféricos':
            case 'perifericos':
                return 'label-peripherals';
            case 'monitores':
                return 'label-monitors';
            case 'audio':
                return 'label-audio';
            case 'cámaras':
            case 'camaras':
                return 'label-cameras';
            case 'tablets':
                return 'label-tablets';
            case 'teléfonos':
            case 'telefonos':
                return 'label-phones';
            case 'laptops':
                return 'label-laptops';
            case 'redes':
                return 'label-network';
            case 'almacenamiento':
                return 'label-storage';
            default:
                return 'label-default';
        }
    }

    // El hijo sólo notifica que un botón fue presionado; el padre será quien modifique el modelo.
    @Output()
    favoriteToggled = new EventEmitter<void>();
    @Output()
    productAddedToCart = new EventEmitter<void>();

    // Método estático para crear instancias de productos.
    static create(name: string, category: string, description: string, price: number): ProductDetailComponent {
        const product = new ProductDetailComponent();
        product.name = name;
        product.category = category;
        product.description = description;
        product.price = price;
        product.favorite = false;
        return product;
    }

    // Emitir la intención de toggle de favorito.
    toggleFavorite() {
        this.favoriteToggled.emit();
    }

    // Emitir la intención de agregar al carrito.
    addToCart() {
        this.productAddedToCart.emit();
    }
}

// Componente 2: Carrito de compras
@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    styleUrls: ['table_style.css'],
    template: `
        @if (cart && cart.length > 0) {
            <div>
                <h2>Carrito de compras:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Valor por unidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (item of cart; track item.productName) {
                            <tr>
                                <td style="text-align:center">{{ item.productName }}</td>
                                <td style="text-align:center">{{ item.qty }}</td>
                                <td style="text-align:right">$ {{ item.price }}</td>
                                <td style="text-align:right">$ {{ (item.price * item.qty).toFixed(2) }}</td>
                            </tr>
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"><strong>Gran Total</strong></td>
                            <td style="text-align:right"><strong>$ {{ cartTotal.toFixed(2) }}</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        }
    `,
})
export class ShoppingCartComponent {
    @Input()
    cart: { productName: string; qty: number; price: number }[] = [];

    get cartTotal(): number {
        return this.cart.reduce((sum, it) => sum + it.price * it.qty, 0);
    }
}

// Componente 3: Lista de productos
@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [ProductDetailComponent, ShoppingCartComponent, FormsModule],
    styleUrls: ['table_style.css'],
    template: `
        <h2>Lista de productos:</h2>
        <div>
            <label for="search">Buscar por nombre:</label>
            <input id="search" type="text" placeholder="Filtrar nombre..." [(ngModel)]="searchTerm" />
        </div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Etiqueta</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Favorito</th>
                    <th>Agregar al carrito</th>
                </tr>
            </thead>
            <tbody>
                @for (product of filteredProducts; track product.name) {
                    <tr app-product-detail
                        [name]="product.name"
                        [category]="product.category"
                        [description]="product.description"
                        [price]="product.price"
                        [favorite]="product.favorite"
                        (favoriteToggled)="onFavoriteToggled(product)"
                        (productAddedToCart)="onProductAdded(product)">
                    </tr>
                }
            </tbody>
        </table>

        @if (cart.length > 0) {
            <app-shopping-cart [cart]="cart"></app-shopping-cart>
        }
    `,
})
export class ProductListComponent {
    searchTerm: string = '';

    // Carrito: lista de items con cantidad y precio unitario. Se pasa al componente 2 mediante binding.
    cart: { productName: string; qty: number; price: number }[] = [];

    /**
     * Obtiene la lista de productos filtrada basada en el término de búsqueda.
     * Filtra los productos por nombre de forma case-insensitive.
     * 
     * @returns {ProductDetailComponent[]} Lista de productos que coinciden con el término de búsqueda.
     *                                     Si no hay término de búsqueda, retorna todos los productos.
     */
    get filteredProducts(): ProductDetailComponent[] {
        const term = this.searchTerm.trim().toLowerCase();
        if (!term) return this.products;
        return this.products.filter(p => p.name.toLowerCase().includes(term));
    }
    
    // Maneja la intención de toggle favorito: invierte el estado del favorito del producto
    onFavoriteToggled(product: ProductDetailComponent) {
        const idx = this.products.indexOf(product);
        if (idx !== -1) {
            this.products[idx].favorite = !this.products[idx].favorite;
        }
    }

    // Maneja la intención de agregar al carrito: suma 1 a la cantidad del producto
    onProductAdded(product: ProductDetailComponent) {
        const name = product.name;
        const existing = this.cart.find(i => i.productName === name);
        if (existing) {
            existing.qty += 1;
        } else {
            this.cart.push({ productName: name, qty: 1, price: product.price });
        }
    }

    // Crear un arreglo de productos.
    products: ProductDetailComponent[] = [
        ProductDetailComponent.create('Teclado', 'Periféricos', 'Teclado mecánico retroiluminado', 79.99),
        ProductDetailComponent.create('Mouse', 'Periféricos', 'Mouse ergonómico con múltiples botones', 29.99),
        ProductDetailComponent.create('Pantalla', 'Monitores', 'Pantalla 4K de 27 pulgadas', 129.99),
        ProductDetailComponent.create('Auriculares', 'Audio', 'Auriculares inalámbricos con cancelación de ruido', 89.99),
        ProductDetailComponent.create('Webcam', 'Cámaras', 'Cámara web HD 1080p con micrófono integrado', 49.99),
        ProductDetailComponent.create('Tablet', 'Tablets', 'Tablet de 10 pulgadas con stylus incluido', 199.99),
        ProductDetailComponent.create('Smartphone', 'Teléfonos', 'Teléfono inteligente con cámara de 108MP', 299.99),
        ProductDetailComponent.create('Laptop', 'Laptops', 'Laptop ultraligera con procesador i7', 899.99),
        ProductDetailComponent.create('Router', 'Redes', 'Router WiFi 6 de alta velocidad', 119.99),
        ProductDetailComponent.create('Disco SSD', 'Almacenamiento', 'Disco sólido de 1TB con alta velocidad de transferencia', 159.99)
    ];
}

// Componente raíz de la aplicación
@Component({
    selector: 'app-root',
    template: `
        <h1>Tienda en Línea: {{ title }}</h1>
        <app-product-list></app-product-list>
    `,
    imports: [ProductListComponent],
})
export class OnlineStoreApp {
    title = 'Workclass';
}

bootstrapApplication(OnlineStoreApp);