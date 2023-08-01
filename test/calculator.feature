Feature: Calculator

Scenario: Starting the calculator
    Given I create a new calculator
    Then the result is 0

Scenario: Basic Sum
    Given I create a new calculator
    When I sum 3
    Then the result is 3

Scenario: Sum 2 numbers
    Given I create a new calculator
    When I sum 2
    And I sum 2
    Then the result is 4

Scenario: Multiply 2 numbers
    Given I create a new calculator
    When I sum 2
    And I multiply by 5
    Then the result is 10

Scenario: Combine sum and multiply
    Given I create a new calculator
    When I sum 7
    And I sum 2
    And I sum 1
    And I multiply by 5
    And I sum 9
    Then the result is 59