import { createYield } from "typescript"

export class FormLayoutsPage{
    //this is method 'submitInlineFormWithNameAndEmail'; (name, email) - those are parametrs
    submitInlineFormWithNameAndEmail(name, email){
        cy.contains('nb-card', 'Inline form').find('form').then (form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).find('[type="submit"]').click()
        })
    }

    submitBasicForm(email, password){
        cy.contains('nb-card', 'Basic form').find('form').then(basicForm => {
            cy.wrap(basicForm).find('[placeholder="Email"]').type(email)
            cy.wrap(basicForm).find('[placeholder="Password"]').type(password)
            cy.wrap(basicForm).find('[type="checkbox"]').check({force: true})
            cy.wrap(basicForm).submit()
        })

    }

}

export const onFormLayoutsPage = new FormLayoutsPage()