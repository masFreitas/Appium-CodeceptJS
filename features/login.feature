Feature: Business rules
  As a user
  Would like to login to the application
  To be able to access the system

  Scenario: Login with success
    Given I fill email field
    And I fill password field
    When I tap on Entrar
    Then I see the Salvar button
