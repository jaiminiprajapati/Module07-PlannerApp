# 📅 Calendar Application

## Overview
The Calendar Application is a sleek and user-friendly tool designed for busy employees to efficiently manage their daily schedules. This application features a modern interface with dynamically updated HTML and CSS powered by jQuery. Leveraging the Day.js library, date and time operations are seamlessly handled in the browser.

## 👀 Sneak Peek
![Screenshot of the application](<images/Screenshot 2024-01-23 102353.png>)

## User Story
As an employee with a hectic schedule, I want to add important events to a daily planner so that I can manage my time effectively.

## 🚀 Features
1. **Display Current Day**
Upon opening the planner, the current day is prominently displayed at the top of the calendar, providing users with quick access to the date they are viewing.

2. **Timeblocks for Business Hours**
As the user scrolls down, the app presents timeblocks for standard business hours, making it easy for users to plan and organize tasks throughout the workday.

3. **Color-coded Timeblocks**
Timeblocks are color-coded based on past, present, and future time periods for quick visual identification:
    Past: Distinct color
    Present: Highlighted for immediate attention
    Future: Distinguishable color
4. **Event Entry in Timeblocks**
Users can click on a timeblock to seamlessly enter details for an event, making it intuitive and quick to schedule tasks.

5. **Save Events in Local Storage**
The "Save" button within each timeblock allows users to store entered event details in local storage, ensuring data is retained even after page refreshes.

6. **Persistence Between Page Refreshes**
Events entered by the user persist between page refreshes, allowing users to close or refresh the page without losing their scheduled events.

## 💻 Technical Details

### **Frontend:**
- **HTML:** The structure of the application is built using HTML to create a well-organized and semantic layout.

- **CSS:** Styling is applied using CSS to ensure an attractive and responsive design, providing a seamless user experience.

- **Bootstrap:** The application leverages Bootstrap to enhance the responsiveness and aesthetic appeal of the user interface. Bootstrap components and utilities are utilized for efficient layout and styling.

- **jQuery:** The dynamic HTML and CSS are powered by jQuery, facilitating smooth interactions and updates without page reloads.

### **Date and Time Handling:**
- **Day.js:** Integrated to handle date and time operations seamlessly in the browser.

### **Storage:**
- **Local Storage:** Employed to save and retrieve user-entered event details, ensuring persistence between page refreshes.

## 🚦 Getting Started
1. Open the application in your web browser.
2. The current day is displayed at the top of the calendar.
3. Scroll down to view and interact with timeblocks for standard business hours.
4. Click on a timeblock to enter details for an event.
5. Click the "Save" button in the timeblock to store the event in your local storage.
6. Your events will persist between page refreshes.

## 📚 Resources
jQuery Documentation
Day.js Documentation