import DateClick from './dateclick';

describe('Date Picker Click Test', () => {
  const datePicker = new DateClick();

  beforeEach(() => {
    // Ignoring uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should set the date and time to February 28, 2013 12:00', () => {
    cy.visit('https://demoqa.com/date-picker');
    
    datePicker.openDatePickerInput();
    datePicker.selectDatePickerYear('2013');
    datePicker.selectDatePickerMonth('February');
    datePicker.selectDatePickerDay('28');
    datePicker.selectDatePickerTime('12:00');
    
    //datePicker.verifyDatePickerInput('02/28/2013 12:00');
  });
});
