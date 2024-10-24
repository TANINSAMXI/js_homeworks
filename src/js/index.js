'use strict'
;(function () {
    const product = {}

    Object.defineProperty(product, 'name', {
        get() {
            return this._name //
        },
        set(value) {
            if (typeof value === 'string' && value.trim() !== '') {
                this._name = value
            } else {
                throw new Error(' empty string !')
            }
        },
        enumerable: true,
        configurable: true,
    })

    Object.defineProperty(product, 'price', {
        get() {
            return this._price
        },
        set(value) {
            if (typeof value === 'number' && value > 0) {
                this._price = value
            } else {
                throw new Error('price must be bigger than 0 !')
            }
        },
        enumerable: true,
        configurable: true,
    })

    Object.defineProperty(product, 'quantity', {
        value: 2,
        writable: true,
        enumerable: true,
        configurable: true,
    })

    Object.defineProperty(product, 'totalValue', {
        get() {
            return this.price * this.quantity
        },
        enumerable: true,
        configurable: true,
    })

    product.name = 'JS'
    product.price = 10

    console.log(product.name)
    console.log(product.price)
    console.log(product.quantity)
    console.log(product.totalValue)
})()
