<script>
    // Select all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // Add click event listener to each button
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the corresponding content div
            const content = button.nextElementSibling;

            // Toggle the 'show' class to display or hide the content
            content.classList.toggle('show');
        });
    });
</script>
