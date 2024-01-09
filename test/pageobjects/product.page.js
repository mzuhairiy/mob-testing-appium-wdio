import { $ } from '@wdio/globals'

export default class ProductPage{
    get addToCart() {return $('~Add To Cart button');}
    get cart() {return $('//android.view.ViewGroup[@content-desc="cart badge"]');}
    get productName1() {return $('//*[@text="Sauce Labs Backpack"]')}
    get proceedBtn() {return $('~Proceed To Checkout button');}
    // cart badge
    get cartBadge1() {return $("//android.view.ViewGroup[@content-desc='cart badge']//android.widget.TextView[@text='1']");}

    async addProductToCart(){
        (await this.addToCart).click();
    }
}
