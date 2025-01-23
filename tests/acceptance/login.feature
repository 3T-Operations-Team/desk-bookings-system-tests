Feature: Employee login
    Title: Employee login
    As an employee, I want to login, so that I can access my own account.

  @acceptance
  Scenario: Employee logs in with correct email and password
    Given the employee is on the login page
    When the employee enters their correct email
    And the employee enters their correct password
    And the employee tries to login
    Then the employee is redirected to the Desk Booking page
    And the employee is logged into their account

  Scenario: Employee is already logged in
    Given the employee is logged in
    When the employee navigates to the login page
    Then the employee is redirected to the Desk Booking page

  Scenario: Employee logs out
    Given the employee is logged in
    And the employee is on the desk booking page
    When the employee logs out
    Then the employee is redirected to the login page

  Rule: Incorrect credentials do not allow the user to login

    Scenario: Employee logs in with incorrect email
      Given the employee is on the login page
      When the employee enters an incorrect email
      And the employee enters their correct password
      And the employee tries to login
      Then the employee remains on the login page
      And the employee is not logged into their account

    Scenario: Employee logs in with incorrect password
      Given the employee is on the login page
      When the employee enters their correct email
      And the employee enters an incorrect password
      Then the employee remains on the login page
      And the employee is not logged into their account
