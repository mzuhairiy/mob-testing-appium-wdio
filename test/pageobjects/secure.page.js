import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CatalogScreen{
    get productsHeader(){
        return $('//*[@text="Products"]');
    }
}
export default new CatalogScreen();
