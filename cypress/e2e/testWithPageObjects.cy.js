import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.toolTipPage()
    })
    
    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Anna', 'test@test.com')
        onFormLayoutsPage.submitBasicForm('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectTommorowDateFromDatepackerPage(1)
        onDatepickerPage.selectDatePickerWithRangeToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Alex', 'Kov')
        onSmartTablePage.UpdateNameByFirstName('Alex', 26)
        onSmartTablePage.deleteRowByIndex(5)
    })


})
