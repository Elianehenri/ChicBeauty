

// Função para lidar com o envio do formulário
function submitForm(event) {
    event.preventDefault(); // Evita o comportamento padrão de submissão

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    // Simulação de autenticação (substituir por lógica real de autenticação)
    const email = emailInput.value;
    const password = passwordInput.value;

    // Limpar campos após a submissão
    emailInput.value = '';
    passwordInput.value = '';

    // Redirecionar para a tela principal (index.html) após o login bem-sucedido
    setTimeout(() => {
        window.location.href = './index.html'; // Altere para o caminho correto da tela principal
    }, 2000); // Redireciona após 2 segundos (tempo de simulação)
}

// Adicione um event listener para o evento 'submit' do formulário
document.querySelector('#loginForm').addEventListener('submit', submitForm);
