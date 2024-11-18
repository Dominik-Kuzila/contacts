import { Selector } from 'testcafe';

fixture `Setup`
    .page `https://oto.lv.tab.digital`;
    
test(`Edit Contact`, async t => {
    await t
        .pressKey('meta')    
        .typeText('#user', 'admin')
        .pressKey('tab')
        .typeText('#password', 'admin')
        .click(Selector('main span').withText('Log in'))
        .click(Selector('header div').withText('Contacts').nth(1))

        .click(Selector('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-details > div > header > div.contact-header__actions > button'))
        .click(Selector('#contact-fullname'))
        .pressKey('ctrl + a')
        .pressKey('del')
        .typeText('#contact-fullname', 'Contact edit')
        .click(Selector('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-details > div > header > div.contact-header__actions > button'))

        .expect('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-details > div > header > div.contact-header__no-wrap > div.contact-header__infos > h2 > div').eql('Contact edit')


});