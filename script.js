document.getElementById('registerLink').onclick = function() {
    showSection('register');
};

document.getElementById('loginLink').onclick = function() {
    showSection('login');
};

function showSection(sectionId) {
    const sections = ['register', 'login', 'forum', 'library', 'events'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Example: Handling form submissions (further logic needed)
document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();
    // Implement registration logic
};

document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    // Implement login logic
};

document.getElementById('postForm').onsubmit = function(event) {
    event.preventDefault();
    // Implement post submission logic
};
