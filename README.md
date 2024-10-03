# Responsive React Project with Bootstrap and GSAP Animations

This is a fully responsive project built with **React** and **Bootstrap**, ensuring compatibility across devices. The project features smooth animations powered by **GSAP** and includes a **contact form** that allows users to submit their details, which are then saved to a database. A toast notification is displayed upon successful form submission. Additionally, an **Error Page** is included to handle any routing errors gracefully.

## Features
- **Responsive Design:** Ensures a seamless experience on devices of all sizes.
- **Bootstrap:** Used for styling and layout, ensuring mobile-first design and ease of use.
- **GSAP Animations:** Smooth animations for enhanced user experience.
- **Contact Form:** Users can submit their information, and the data is saved to a database using Axios. A toast notification is displayed on successful submission.
- **Toast Notification:** Users receive a visual confirmation upon successful form submission.
- **Error Page Handling:** An error page is implemented to manage any routing errors, providing users with feedback when something goes wrong.

## Technologies Used
- React
- Bootstrap (for responsive styling)
- GSAP (for animations)
- Axios (for API calls)
- React Hook Form (for form handling)
- Zod (for validation)
- Toastify (for displaying toast notifications)
- React Router (for routing and error handling)

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```
   The application will be running at `http://localhost:3000`.

## Usage

### Animations
The project utilizes **GSAP** for animations. You'll find animations applied to various components, ensuring a smooth and engaging user experience. GSAP helps make elements appear with transitions such as fade-ins, slide-ins, and other effects.

### Contact Form
The contact form allows users to submit their details. On submission:
- **Validation:** The form is validated using **Zod**.
- **Data Submission:** Upon passing validation, the data is sent to the backend using **Axios**.
- **Toast Notification:** A success toast message is displayed to the user, confirming their submission.

### Saving Data to the Database
The contact form is wired to save data in a mock API (or your database). It uses Axios to POST the form data to an endpoint, saving the information securely.

### Error Page Handling
An **Error Page** has been implemented to manage routing errors. When users encounter an error, they will see a friendly error message informing them of the issue, along with a button to return to the home page.

## Code Snippet (for Contact Form Submission)
```javascript
import axios from 'axios';

function onSubmit(values) {
  axios.post('https://your-database-url/api/contact', values)
    .then(response => {
      console.log('Data submitted:', response.data);
      // Show toast on success
      toast.success('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit the form.');
    });
}
