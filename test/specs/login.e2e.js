import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    beforeEach(async () => {
        //access hamburger button by accessibility id locator
        await $('~open menu').click();
        //access login menu with text locator
        await $('//*[@text="Log In"]').click();
        //assert
        await expect($('//*[@text="Select a username and password from the list below, or click on the usernames to automatically populate the username and password."]')).toBeDisplayed();
    })

    it('should failed to login with invalid credentials', async () => {
        await $('//*[@content-desc="Username input field"]').setValue('boba@example.com');
        await $('//*[@content-desc="Password input field"]').setValue('10203040');
        await $('~Login button').click();
        await driver.pause(2000);

        await expect($('//*[@text="Provided credentials do not match any user in this service."]')).toBeDisplayed();
    })

    it('should login with valid credentials', async () => {
        (await $('//*[@content-desc="Username input field"]')).clearValue();
        (await $('//*[@content-desc="Password input field"]')).clearValue();
        await $('//*[@content-desc="Username input field"]').setValue('bob@example.com');
        await $('//*[@content-desc="Password input field"]').setValue('10203040');
        await $('~Login button').click();
        await driver.pause(2000);

        await expect($('//*[@text="Products"]')).toBeDisplayed();
    })
})

