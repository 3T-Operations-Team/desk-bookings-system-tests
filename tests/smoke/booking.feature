Feature: Booking functionality

  @smoke
  Scenario: Book a desk
    Given I am logged in and on the main page
    And I select an available desk
    When I make a booking
    Then I should receive a booking confirmation

  @smoke
  Scenario: Cancel booking
    Given I am logged in and on the main page
    When I cancel a booking
    Then I should receive a booking cancelation confirmation
