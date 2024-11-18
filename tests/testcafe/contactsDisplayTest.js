import { Selector } from 'testcafe';

fixture `Setup`
    .page `https://oto.lv.tab.digital`;
    
test(`Contacts display`, async t => {
    await t
        .pressKey('meta')    
        .typeText('#user', 'admin')
        .pressKey('tab')
        .typeText('#password', 'admin')
        .click(Selector('main span').withText('Log in'))
        .click(Selector('header div').withText('Contacts').nth(1))

        .expect(Selector('#everyone > div > a').visible).eql(true)
        .expect(Selector('#notgrouped > div > a').visible).eql(true)
        .expect(Selector('#menu-vluqi-trigger > span > span').visible).eql(true)

});