describe('Verify number of menu items on Footer', () => {
    it('Status', () => {
      //go to url
      cy.visit('https://www.w3schools.com')
      // get item in footer
      cy.scrollTo('bottom')
      // check logo footer
      cy.get('.ga-bottom > .fa')
      .should('be.visible')
      // check item spaces
      cy.get('#spacemyfooter').find('.footerlinks_1').eq(1).find('a')
      .should('have.attr', 'href', '/spaces/index.php')
      .should("have.css","outline-color","rgb(255, 244, 163)")
      .should('be.visible')
      // check item upgrade
      cy.get('#spacemyfooter').find('.footerlinks_1').eq(2).find('a')
      .should('have.attr', 'href', '/plus/index.php')
      .should("have.css","outline-color","rgb(255, 244, 163)")
      .should('be.visible')
      // check item adfree
      cy.get('#spacemyfooter').find('.footerlinks_1').eq(3).find('a')
      .should("have.css","outline-color","rgb(255, 244, 163)")
      .should('have.attr', 'href', '/plus/index.php')
      .should('be.visible')
      // check item newsletter
      cy.get('#spacemyfooter').find('.footerlinks_1').eq(4).find('a')
      .should('have.attr', 'href', 'https://campus.w3schools.com/pages/newsletter')
      .should("have.css","outline-color","rgb(255, 244, 163)")
      .should('be.visible')
      // check item  certified
      cy.get('#spacemyfooter').find('.footerlinks_1').eq(5).find('a')
      .should('have.attr', 'href', 'https://campus.w3schools.com/collections/certifications')
      .should("have.css","outline-color","rgb(255, 244, 163)")
      .should('be.visible')
      // check item contact us
      cy.get('#spacemyfooter').find('.footerlinks_1').eq(6).find('a')
      .should('have.attr', 'href', 'javascript:void(0);')
      .should("have.css","outline-color","rgb(255, 244, 163)")
      .should('be.visible')
      
    })
  })
  describe('Login function', () => {
    it('Status', () => {
      //go to url
      cy.visit('https://www.w3schools.com')
      cy.get('.tnb-login-btn').click()
      cy.url().should('eq','https://profile.w3schools.com/login?redirect_url=https%3A%2F%2Fwww.w3schools.com%2F')
      cy.get('div').find('.LoginPanel_login_signup__N4spj')
      cy.get('h2').should('contain', 'Log In')
    })
  })