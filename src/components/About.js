// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="p-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Our team is dedicated to bringing you the highest quality ingredients and exceptional service.
        Whether you are here to enjoy a hearty meal or a refreshing drink, we have something for everyone.
      </p>
      <p className="text-2xl font-bold italic mb-4">
        Message from the Developer
      </p>
      <p className="text-lg mb-4">
      Welcome to Tomato! I'm Sumant, the developer behind this Zomato Clone project. This project is a showcase of advanced web development techniques and technologies. It demonstrates a variety of modern practices and highlights the capabilities of React and related tools.
      This project incorporates a range of technologies and libraries to create a dynamic and engaging user experience. Below, you’ll find a summary of the key components and concepts used in this project.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">Key Technologies and Libraries:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>React</strong>: The core library for building user interfaces, utilizing both function-based components and one class-based component with lifecycle methods.</li>
        <li><strong>Tailwind CSS</strong>: For sleek and responsive UI design, providing a utility-first CSS framework that simplifies styling.</li>
        <li><strong>Redux Toolkit</strong>: For state management, helping us manage and centralize state efficiently.</li>
        <li><strong>React Router</strong>: To handle dynamic routing and navigation within the application.</li>
        <li><strong>Jest and React Testing Library</strong>: Employed for testing, ensuring the reliability and correctness of our components.</li>
        <li><strong>Parcel</strong>: The bundler used to package the project, offering fast build times and a zero-config setup.</li>
      </ul>
      <h2 className="text-xl font-bold mt-4 mb-2">API Integration:</h2>
      <p className="text-lg mb-4">
        <strong>AWS Lambda and API Gateway</strong>: These services are used to create and manage the API for fetching restaurant details, ensuring scalable and secure access to data.
      </p>
      <h2 className="text-xl font-bold mt-4 mb-2">Key Concepts Demonstrated:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Node Modules</strong>: Managing dependencies through npm.</li>
        <li><strong>Props/State</strong>: For passing data and managing component state.</li>
        <li><strong>Function Mapping and Hooks</strong>: Using React hooks for state and lifecycle management in function-based components.</li>
        <li><strong>Conditional Rendering</strong>: Displaying content based on certain conditions.</li>
        <li><strong>Dynamic Routing and Outlet Component</strong>: Handling dynamic routes and nested routes within the application.</li>
        <li><strong>Custom Hooks and Higher-Order Components</strong>: For code reusability and enhancing component functionality.</li>
        <li><strong>Controlled vs Uncontrolled Components</strong>: Demonstrating different approaches to form handling.</li>
        <li><strong>DevTools</strong>: Utilizing React DevTools for debugging and performance optimization.</li>
      </ul>
      <p className="text-lg mb-4">
        Please note that this project is still under development. We are continuously working to enhance features, optimize performance, and add more functionality. Your feedback is highly appreciated as we move forward!
      </p>
      <p className="text-lg">
        Thank you for visiting our project page. We hope you find it insightful and informative!
      </p>
    </div>
  );
};

export default About;
