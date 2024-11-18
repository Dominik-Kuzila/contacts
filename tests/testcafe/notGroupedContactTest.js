import { Selector } from 'testcafe';

fixture `Setup`
    .page `https://oto.lv.tab.digital`;
    
test(`New Contact - not grouped`, async t => {
    await t
        .pressKey('meta')    
        .typeText('#user', 'admin')
        .pressKey('tab')
        .typeText('#password', 'admin')
        .click(Selector('main span').withText('Log in'))
        .click(Selector('header div').withText('Contacts').nth(1))

        .click(Selector('#app-navigation-vue > header > div > button'))
        .typeText('#contact-fullname', 'Not Grouped Contact')
        .click(Selector('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-details > div > header > div.contact-header__actions > button'))
        .click(Selector('#notgrouped'))

        .expect('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-list > div > div.contacts-list > div:nth-child(1) > div:nth-child(1)').contains('Not Grouped Contact')


});