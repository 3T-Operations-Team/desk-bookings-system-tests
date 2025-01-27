Feature: Employee books a desk
    Title: Employee books a desk
    As an employee, I want to book a desk, so that I can reserve my seat in the office.

  @acceptance
  Scenario: Employee cannot book a reserved desk
    Given the employee is logged in
    And the employee is on the desk booking page
    And desk 29 is already booked by another employee
    When the employee selects desk 29
    Then desk 29 is not selected
  #Scenario: Employee books a desk
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  And desk 27 is available
  #  When the employee selects desk 27
  #  And the employee books the desk
  #  Then the employee sees a confirmation message
  #  And desk 27 is now reserved for the employee
  #Scenario: Emplyoee cannot book more than one desk for the same day
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  And the employee has booked desk 27
  #  When the employee selects desk 28
  #  Then the desk 28 cannot be selected
  #Scenario: Employee books a desk on multiple days
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  And the employee has booked desk 27
  #  When the employee books desk 27 for a different day
  #  Then the employee sees a confirmation message
  #  And desk 7 is now reserved for the employee
  #Scenario: Employee cancels a booking
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  And the employee has booked desk 27
  #  When the employee cancels the booking
  #  Then the employee sees a cancellation message
  #  And desk 27 is no longer reserved for the employee
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
  #Scenario: Employee navigates to My Bookings
  #  Given the employee is logged in
  #  And the employee is on the Desk Booking page
  #  When the employee navigates to the Desk Booking page
  #  Then the employee can see the Desk Booking page
