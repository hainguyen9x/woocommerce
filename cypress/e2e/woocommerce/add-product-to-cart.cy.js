describe('Shopping Cart Management - annhiensafety.com', () => {

  beforeEach(() => {
    cy.visit('https://annhiensafety.com/san-pham/giay-ansa-dylan-high-s3');
  });

    it('TC001 - Add the product to the cart', () => {
    // Assumes there's an "Add to Cart" button with a recognizable selector
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Confirmation cart icon is updated
    cy.get('input[name="quantity"]').should('have.value', '1');
    cy.get('.cart-title > button');
    cy.wait(5000);
  });

    it("TC002 - View cart after adding product", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Verify that there is at least one product in the cart
    cy.get('.onhover-div').should("have.length.at.least", 1);
    cy.wait(5000);
  });  

    it("TC003 - Update product quantity", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Update quantity product
    cy.get('.drop-contain .cart_qty .input-group .qty-right-plus').click();
    // Verify product has updated
    cy.get('.drop-contain .cart_qty .input-group .input-number').should("have.value", "2");
    cy.wait(5000);
  });

    it("TC004 - Remove product from cart", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Delete product
    cy.get('.delete-button').click();
    cy.wait(5000);
  });
 
    it("TC005 - View detail cart", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // View cart
    cy.get('[href="/vi/gio-hang"]').click();
    cy.wait(5000);
  });

    it("TC006 - Check price of the product", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Check the price
    cy.get('.onhover-div .price-box > .theme-color')
    .invoke('text')
    .then((text) => {
    expect(text.trim()).to.eq('370.000 vnd')
    });
  });

    it("TC007 - Back to shopping", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // View cart
    cy.get('[href="/vi/gio-hang"]').click();
    //back to shopping
    cy.get('.shopping-button').click();
    cy.wait(5000);
    cy.url().should('eq', 'https://annhiensafety.com/');
  });

  it("TC008 - Go to Payments page", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Click button payments
    cy.get('.theme-bg-color').click();
    cy.wait(5000);
  }); 

  it("TC009 - Verify payment details page", () => {
    // Add product to cart
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    // Click button payments
    cy.get('.theme-bg-color').click();
    cy.get('.pos-detail-card').scrollIntoView().should('be.visible');
    // Verify have the title "Thanh toán"
    cy.get('.pos-detail-card .title-header h5.fw-bold')
    .should('have.text', 'Thanh toán');
  });
});