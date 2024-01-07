/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class LeftSideMenuScreen {
    get expandMenuButton() {
        return $('~open menu');
    }
    get loginButton() {
        return $('~menu item log in');
    }
}
export default new LeftSideMenuScreen();