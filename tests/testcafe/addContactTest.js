import { Selector } from 'testcafe';

fixture `Setup`
    .page `https://oto.lv.tab.digital`;
    
test(`Add Contact to group`, async t => {
    await t
        .pressKey('meta')    
        .typeText('#user', 'admin')
        .pressKey('tab')
        .typeText('#password', 'admin')
        .click(Selector('main span').withText('Log in'))
        .click(Selector('header div').withText('Contacts').nth(1))

        .click(Selector('#menu-scovn-trigger > span > span > span > svg'))
        .click(Selector('#menu-scovn > li.action.active > button > span.action-button__text'))
        .click(Selector('#modal-description-bykdr > div > div > div.entity-picker__options > div:nth-child(1) > div:nth-child(1) > div > a'))
        .click(Selector('#modal-description-bykdr > div > div > div.entity-picker__navigation > button.navigation__button-right.primary'))

        .expect('#app-content-vue > div > div > div.splitpanes__pane.splitpanes__pane-list > div > div.contacts-list > div:nth-child(1) > div:nth-child(1)').eql('Test Contact')

});