
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home-btn").addEventListener("click", function() {
        window.location.href = "/index.html"; // Redirects to index.html
    });
    
    document.getElementById("experience-btn").addEventListener("click", function() {
        window.location.href = "../pages/experience.html"; // Redirects to experience.html
    });
    
    document.getElementById("projects-btn").addEventListener("click", function() {
        window.location.href = "../pages/projects.html"; // Redirects to projects.html
    });
    
    document.getElementById("blogs-btn").addEventListener("click", function() {
        window.location.href = "../pages/blogs.html"; // Redirects to blogs.html
    });
    
    document.getElementById("resume-btn").addEventListener("click", function() {
        window.location.href = "../pages/resume.html"; // Redirects to resume.html
    });
    
});
