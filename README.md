# feedback-grievance-system# Aromatic Bar Feedback Form

This project is a feedback form for the Aromatic Bar, designed to collect and display customer feedback regarding their dining experience. The application is built using React and includes form validation, local storage for data persistence, and a responsive design.

## Features

- Collect customer feedback with validation
- Store feedback in local storage
- Display feedback in a table format
- Responsive design

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/shamusketeer/aromatic-bar-feedback.git
    cd aromatic-bar-feedback
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm start
    ```

    The application will open in your default web browser at `http://localhost:3000`.

## Project Structure

The project structure is as follows:

### Components

- **FeedbackForm.js:** Component for the feedback form.
- **FeedbackList.js:** Component to display the list of feedback entries.

### Styling

The application uses CSS for styling, which is located in the `App.css` file.

## Usage

1. **Navigating the App:**
   - Use the navigation buttons to switch between the feedback form and the feedback list.

2. **Submitting Feedback:**
   - Fill out the feedback form with the required information.
   - Click the "Submit" button to save the feedback. Form validation ensures all required fields are completed correctly.

3. **Viewing Feedback:**
   - Navigate to the feedback list to view all submitted feedback.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Follow the standard GitHub workflow for contributions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

