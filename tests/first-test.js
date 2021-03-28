import { Selector } from "testcafe";
import { userEmailAccount } from './roles/roles.js'
import bookingPage from './page_model/BookingPage'

fixture`Book a meeting`
  // .page`https://www.vyte.in/my-page`

test("as Visitor I want to book a meeting", async t => {
  await t.navigateTo('https://www.vyte.in/my-page');
  await bookingPage.typeEventTitleInput("hey salut");
  await bookingPage.openDateTimePicker();
  await bookingPage.clickDayTab();
  await bookingPage.clickSlot('18:00');
  await bookingPage.saveDate();
  await bookingPage.submit();
  await bookingPage.typeName('Jean Christophe');
  await bookingPage.typeEmail('jean-christophe@vytein.com');
  await bookingPage.submitWhoAreYouModal();
  await bookingPage.congratulationTitle();
});
