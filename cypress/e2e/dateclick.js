class DateClick {
  openDatePickerInput() {
    cy.get('#dateAndTimePickerInput').click();
  }

  selectDatePickerYear(year) {
    cy.get('.react-datepicker__year-read-view').click();
    
    if (year === '2013') {
      cy.get('.react-datepicker__year-dropdown').contains('2019').click();
      cy.get('.react-datepicker__year-read-view').click(); 
      cy.get('.react-datepicker__year-dropdown').contains('2014').click();
      cy.get('.react-datepicker__year-read-view').click();
    }
    cy.get('.react-datepicker__year-dropdown').contains(year).click();
  }

  selectDatePickerMonth(month) {
    cy.get('.react-datepicker__month-read-view').click();
    cy.get('.react-datepicker__month-option').contains(month).click();
  }

  selectDatePickerDay(day) {
    cy.get(`.react-datepicker__day--0${day}`).last().click();
  }

  selectDatePickerTime(time) {
    cy.get('.react-datepicker__time-list')
      .contains(time)
      .click({ force: true });
  }

  verifyDatePickerInput(expectedDate) {
    cy.get('#dateAndTimePickerInput').should('have.value', expectedDate);
  }
}

export default DateClick;
