
export class SmartTable {

    UpdateNameByFirstName(name, age){
        cy.get('tbody').contains('tr', 'Larry').then (tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
    })

})

export const onSmartTablePage = new SmartTable()