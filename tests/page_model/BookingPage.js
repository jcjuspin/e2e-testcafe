import { t, Selector } from "testcafe";
import { AngularJSSelector } from "testcafe-angular-selectors";

class BookingPage {
  constructor() {
    this.eventTitleInput = Selector('.new-event-title');
    this.dateTimePickerButton = Selector('.add-date-button');
    // this.slot = Selector('.dhx_scale_hour').withText('15:00')
    this.dayTabButton = Selector('.dhx_cal_tab').withAttribute(
      'name',
      'day_tab'
    );
    this.saveDateButton = Selector('.btn-success');
    this.submitButton = Selector('.btn-success');
    this.inputName = Selector('#InputName')
    this.inputEmail = Selector('input').withAttribute('type', 'email')
    this.submitWhoAreYouModalButton = Selector('.input-container')
    this.congratulationTitle = Selector('h2').withText('Thanks! Your appointment request has been sent')
  }

  slot(slot) {
    return Selector('.dhx_scale_hour').withText(slot);
  }

  async typeEventTitleInput(eventTitle) {
    await t.typeText(this.eventTitleInput, eventTitle);
  }

  async openDateTimePicker() {
    await t.click(this.dateTimePickerButton);
  }

  async clickSlot(slot) {
    await t.click(this.slot(slot));
  }

  async clickDayTab() {
    await t.click(this.dayTabButton);
  }

  async saveDate() {
    await t.click(this.saveDateButton);
  }
  async submit() {
    await t.click(this.submitButton);
  }

  async typeName(name) {
    await t.typeText(this.inputName, name)
  }

  async typeEmail(email) {
    await t.typeText(this.inputEmail, email)
  }

  async submitWhoAreYouModal() {
    await t.click(this.submitWhoAreYouModalButton)
  }


}

export default new BookingPage();
