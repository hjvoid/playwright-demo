@feature
Feature: A user should access the correct service and be able to log an issue

    Scenario: I upload a file larger than 100mb
        Given I start the at the 'home' application page
        Then I should be on the 'home' page showing 'WELCOME TO THE HOMEPAGE'
        Then I choose 'Go to next page'
        Then I should be on the 'second-page' page showing 'SECOND PAGE'
