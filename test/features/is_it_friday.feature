Feature: Is it friday yet

  Everybody wants to know when it is Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether today is Friday yet
    Then I should be told "<answer>"

  Examples:
    | day           | answer        |
    | Friday        | Fuck Yeah     |
    | Monday        | Nope          |
    | anythingelse  | Nope          |
