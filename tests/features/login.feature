Feature: Login

  Scenario: Login válido em Orange HRM
    Given o usuário acessa a página de login
    When o usuário preenche o campo de "username" com "Admin"
    And o usuário preenche o campo de "password" com "admin123"
    And o usuário clica no botão de login
    Then o usuário deve ser redirecionado para o dashboard
