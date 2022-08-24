describe('Pokedex', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5000', { timeout: 90000 });
  });

  it('front page can be opened', function () {
    cy.contains('ivysaur');
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');
  });

  it('pokemon page can be navigated to', function () {
    cy
      .get('.list-item-name')
      .eq(5)
      .should('contain', 'charizard')
      .click();

    cy.contains('blaze');
    cy.contains('solar power');
  });
});