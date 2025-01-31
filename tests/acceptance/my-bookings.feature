Feature: Employee views their bookings
    Title: Employee views their bookings
    As an employee, I want to view the desks I have booked, so that I can easily confirm when I am in the office.

  Background:
    Given the employee is logged in
    And the employee is on the My Bookings page

  @acceptance
  Scenario: Employee navigates to Desk Bookings
    When the employee navigates to the Desk Booking page
    Then the employee can see the Desk Booking page

  Scenario: Employee views current desk bookings
    Given the employee has booked desk 20 today
    Then the employee sees desk 20 and todays date in Booked Desks table

  Scenario: Not able to page left or right when the employee has 5 bookings
    Given the employee has booked desk 20 for 5 different days
    Then table pagination is not enabled in the Booked Desks table

  Scenario: Default pagination begins when the employee has more than 5 bookings
    Given the employee has booked desk 20 for 6 different days
    Then table pagination is enabled in the Booked Desks table

  Scenario: Employee cancels all bookings
    When the employee selects all bookings
    And the employee deletes all bookings
    Then Booked Desks table is empty

  Scenario: Employee views past desk bookings
    Given the employee has booked desk 20 yesterday
    Then the employee sees desk 20 and yesterdays date in Past Bookings
