var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Stepikova_NewStepCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Stepikova_NewStepCheckout/js/view/shipping-payment-mixin': true
            }
        }
    }
}
