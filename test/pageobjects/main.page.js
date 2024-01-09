import { $ } from '@wdio/globals'

export default class MainPage{
    get leftSideButton() {return $('~open menu');}
    get productsHeader() {return $('//*[@text="Products"]');}
    get product1() {return $('(//android.view.ViewGroup[@content-desc="store item"])[1]');}
    get addToCart() {return $('~Add To Cart button');}
    get cart() {return $('//android.view.ViewGroup[@content-desc="cart badge"]');}
    get proceedBtn() {return $('~Proceed To Checkout button');}
    // cart badge
    get cartBadge1() {return $("//android.view.ViewGroup[@content-desc='cart badge']//android.widget.TextView[@text='1']");}

    async clickProduct1(){
        (await this.product1).click();
    }
}
