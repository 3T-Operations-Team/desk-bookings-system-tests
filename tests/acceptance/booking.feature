Feature: Employee books a desk
    Title: Employee books a desk
    As an employee, I want to book a desk, so that I can reserve my seat in the office.

  @acceptance
  Scenario: Employee cannot book a reserved desk
    Given the employee is logged in
    And the employee is on the desk booking page
    And desk 29 is already booked by another employee
    When the employee selects desk 29
    Then desk 29 cannot be selected
    And it is not possible to book desk

  Scenario: Employee books a desk
    Given the employee is logged in
    And the employee is on the desk booking page
    And desk 27 is available
    When the employee selects desk 27
    And the employee books the desk
    Then the employee sees the message "Desk successfully booked"
    And desk 27 is now reserved for the employee

  Scenario: Employee cannot book more than one desk for the same day
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee has booked desk 27
    When the employee selects desk 28
    Then desk 28 cannot be selected

  Scenario: Employee books a desk on multiple days
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee has booked desk 27
    When the employee selects day 30
    And the employee selects desk 27
    And the employee books the desk
    Then the employee sees the message "Desk successfully booked"
    And desk 27 is now reserved for the employee

  Scenario: Employee cancels a desk booking on multiple days
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee selects day 30
    And the employee has booked desk 27
    When the employee cancels the booking
    Then the employee sees the message "Booking canceled"
    And desk 27 is available

  Scenario: Employee cancels a booking
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee selects day 26
    And the employee has booked desk 27
    When the employee cancels the booking
    Then the employee sees the message "Booking canceled"
    And desk 27 is available

  Scenario: Specific desks are always reserved
    Given the employee is logged in
    And the employee is on the desk booking page
    When the employee attempts to select the permanently reserved desk Manager
    Then desk Manager cannot be selected

  Scenario: Show height adjustable desks
    Given the employee is logged in
    When the employee is on the desk booking page
    Then desk 6 should be special
    And desk 11 should be special
    And desk 15 should be special
    And desk 24 should be special
    And desk 27 should be special
    And desk 28 should be special

  Scenario: Employee cannot book a desk in the past
    Given the employee is logged in
    And the employee is on the desk booking page
    When the employee selects day 10 in the past
    Then day 10 is not selected

  Scenario: Employee navigates to My Bookings
    Given the employee is logged in
    And the employee is on the desk booking page
    When the employee navigates to My Bookings page
    Then the employee is in My Bookings page
