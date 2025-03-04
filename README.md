# Resume Application

## Overview
This project is a Single Page Application (SPA) built using Angular. It serves as a personal resume showcasing various sections such as personal information, educational qualifications, technical skills, and certificates.

## Features
- **Single Page Application (SPA)**: The application loads a single HTML page and dynamically updates the content as the user navigates through different sections without refreshing the page.

## Components
The application consists of the following components:

1. **AppComponent**: The root component that serves as the entry point for the application.
2. **PersonalinfoComponent**: Displays personal information such as name, contact details, and address.
3. **QualificationComponent**: Shows educational qualifications including school/college details and percentages.
4. **TechnicalskillsComponent**: Lists technical skills categorized into languages and technologies.
5. **CerificatesComponent**: Displays certificates earned with icons.

## Services
- **DataService**: A service that provides data for personal information, educational qualifications, technical skills, and certificates. It acts as a centralized data source for the components.

## Routes
The application uses the following routes to navigate between different components:

- `/person`: Displays the **PersonalinfoComponent**.
- `/qualif`: Displays the **QualificationComponent**.
- `/skills`: Displays the **TechnicalskillsComponent**.
- `/cert`: Displays the **CerificatesComponent**.

## Installation
To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Conclusion
This SPA provides a comprehensive view of a resume, allowing users to easily navigate through different sections. The use of Angular components and services ensures a modular and maintainable codebase.