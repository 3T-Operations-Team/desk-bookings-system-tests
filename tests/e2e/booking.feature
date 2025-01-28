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

  Scenario: Employee cannot book more than one desk for the same day
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee has booked desk 27
    When the employee selects desk 28
    Then desk 28 cannot be selected

  Scenario: Employee books a desk
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee has no desk booked
    And desk 27 is available
    When the employee selects desk 27
    And the employee books the desk
    Then the employee sees the message "Desk successfully booked"
    And desk 27 is now reserved for the employee
  #Scenario: Employee books a desk on multiple days
  #  Given the employee is logged in
  #  And the employee is on the desk booking page
  #  And the employee has booked desk 27
  #  When the employee selects a different day
  #  And the employee selects desk 27
  #  And the employee books the desk
  #  Then the employee sees the message "Desk successfully booked"
  #  And desk 27 is now reserved for the employee

  Scenario: Employee cancels a booking
    Given the employee is logged in
    And the employee is on the desk booking page
    And the employee has booked desk 27
    When the employee cancels the booking
    Then the employee sees the message "Booking canceled"
    And desk 27 is available
  #Scenario: Display all seats for the office
  #  Given the employee is logged in
  #  When the employee is on the Desk Booking page
  #  Then all 30 desks in the office are displayed
  #Scenario: Specific desks are always reserved
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  When the employee attempts to select the permanently reserved desk Manager
  #  Then the desk cannot be selected
  #Scenario: Show height adjustable desks
  #  Given the employee is logged in
  #  When the employee is on the Desk Booking page
  #  Then height adjustable desks are shown in "red"
  #Scenario: Employee cannot book a desk in the past
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  When the employee attempts to book a desk in the past
  #  Then the employee cannot select a date in the past

  Scenario: Employee navigates to My Bookings
    Given the employee is logged in
    And the employee is on the desk booking page
    When the employee navigates to My Bookings page
    Then the employee is in My Bookings page
