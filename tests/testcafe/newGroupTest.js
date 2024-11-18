import { Selector } from 'testcafe';

fixture `Setup`
    .page `https://oto.lv.tab.digital`;
    
test(`New Group`, async t => {
    await t
        .pressKey('meta')    
        .typeText('#user', 'admin')
        .pressKey('tab')
        .typeText('#password', 'admin')
        .click(Selector('main span').withText('Log in'))
        .click(Selector('header div').withText('Contacts').nth(1))

        .click(Selector('#menu-rhrdb-trigger'))
        .typeText('#contact-fullname', 'Test Group')
        .click(Selector('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-details > div > header > div.contact-header__actions > button'))
        
        .expect('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-list > div > div.contacts-list > div:nth-child(1) > div:nth-child(4)').eql('Test Group')


});