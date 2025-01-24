Feature: Booking functionality

  @acceptance
  Scenario: Book a desk
    Given I am logged in and on the main page
    And I select desk 27
    When I make a booking
    Then I should receive a booking confirmation

  @acceptance
  Scenario: Cancel booking
    Given I am logged in and on the main page
    When I cancel a booking
    Then I should receive a booking cancelation confirmation
