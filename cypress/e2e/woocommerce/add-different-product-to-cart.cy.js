describe("Shopping Cart - Add 2 different products", () => {
  const product1 = "https://annhiensafety.com/san-pham/giay-ansa-dylan-high-s3";
  const product2 = "https://annhiensafety.com/san-pham/giay-safety-jogger-dakar-s3"; // ví dụ sp khác

  it("TC001 - Add the product 1 to the cart", () => {
    // Add sản phẩm 1
    cy.visit(product1);
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
    //cy.get('.woocommerce-message').should('contain.text', 'đã được thêm vào giỏ hàng');

    // Add sản phẩm 2
    cy.visit(product2);
    cy.get('.right-box-contain .note-box .dynamic-checkout .bg-theme').click();
  });

  
});
