// Importing necessary hooks and components
import { useState } from "react";
import { MdEmail } from "react-icons/md"; // Icon for email
import styled from "styled-components";

// Container for the entire Contact component, including animations for smooth fade-in effect
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 20px;
  background: transparent;
  animation: fadeIn 1s ease-in-out; // Fade-in animation for the container

  @keyframes fadeIn {
    0% {
      opacity: 0; // Starts invisible
    }
    100% {
      opacity: 1; // Becomes fully visible
    }
  }
`;

// Wrapper component to hold the content of the form. Also has an animation to slide the form up.
const Wrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  width: 100%;
  animation: slideUp 1s ease-out; // Slide-up animation for the form section

  @keyframes slideUp {
    0% {
      transform: translateY(30px); // Starts a little below the final position
      opacity: 0; // Starts invisible
    }
    100% {
      transform: translateY(0); // Final position at the top
      opacity: 1; // Becomes fully visible
    }
  }
`;

// Title for the contact form
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text_primary}; // Dynamically set based on the theme
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out; // Animation for fading in the title
`;

// Description text under the title
const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text_secondary}; // Dynamically set based on the theme
  margin-bottom: 30px;
  animation: fadeIn 2s ease-in-out; // Animation for fading in the description
`;

// Form styling with padding, border-radius, and box-shadow to give it a card-like look
const Form = styled.form`
  background: transparent;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15); // Soft shadow for depth
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; // Aligns inputs vertically
  gap: 16px; // Space between form fields
  color: black;
  animation: formFadeIn 1.5s ease-in-out; // Animation for fading in the form

  @keyframes formFadeIn {
    0% {
      opacity: 0; // Starts invisible
    }
    100% {
      opacity: 1; // Becomes fully visible
    }
  }
`;

// Label styling for form fields. Includes hover effects for better interactivity.
const Label = styled.label`
  font-size: 1rem;
  color: #6288b0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  color: black;
  &:hover {
    color: white; // Changes color when hovered over
  }
`;

// Input field styling, including focus and hover effects for better user interaction
const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #6288b0;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6288b0;
    box-shadow: 0 0 8px #6288b0; // Adds a glow effect when focused
  }

  &:hover {
    border-color: #6288b0; // Slight color change on hover
  }
`;

// Textarea styling for the message field. Includes focus and hover effects like the input field
const TextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #6288b0;
  border-radius: 8px;
  color: #6288b0;
  background: transparent;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #6288b0;
    box-shadow: 0 0 8px #6288b0; // Adds a glow effect when focused
  }

  &:hover {
    border-color: #6288b0; // Slight color change on hover
  }
`;

// Submit button styling with hover and active states for interactive user feedback
const SubmitButton = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #6288b0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05); // Scales button when hovered over
  }

  &:active {
    background-color: #537b9b; // Darkens button on click
  }
`;

// Status message that will show success or error feedback after form submission
const StatusMessage = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: ${({ isSuccess }) => isSuccess ? "green" : "red"}; // Dynamically changes color based on success/failure
  animation: fadeIn 1.5s ease-in-out;
`;

// Main Contact component that handles form submission and status feedback
function Contact() {
  const [statusMessage, setStatusMessage] = useState(""); // State for status message
  const [isSuccess, setIsSuccess] = useState(false); // State to track if the form submission was successful

  // Handles form submission, sends the data to the API, and updates status message
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setStatusMessage("Sending..."); // Displaying the  sending message
    setIsSuccess(false); // Reseting the success flag

    const formData = new FormData(event.target); // Collect form data

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData, // Send form data to API
      });
      const data = await response.json(); // Parse response from API

      if (data.success) {
        setIsSuccess(true); // If successful, set success state to true
        setStatusMessage("Message sent successfully!"); // Display success message
        event.target.reset(); // Reset the form after successful submission
      } else {
        throw new Error(data.message || "Failed to send message."); // If API responds with failure, throw an error
      }
    } catch {
      setIsSuccess(false); // If there's an error, set success state to false
      setStatusMessage("Error: Unable to send message."); // Displaying the error message
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <Description>
          I’d like to connect and hear your thoughts! Feel free to reach out.
        </Description>
        <Form onSubmit={handleSubmit}> {/* Handles form submission onSubmit */}
          {/* Label and Input fields for email, name, and message */}
          <Label style={{ marginRight: "8px", color: "white" }}>
            <MdEmail size={24} style={{ marginRight: "8px", color: "white" }} />
            Email
          </Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <Label style={{ marginRight: "8px", color: "white" }}>Name</Label>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Label style={{ marginRight: "8px", color: "white" }}>Message</Label>
          <TextArea
            style={{ marginRight: "8px", color: "white" }}
            name="message"
            placeholder="Write your message here"
            required
          />
          <input
            type="hidden"
            name="access_key"
            value="ea9c64f0-2c57-4853-b10a-5e74dd384593" // Hidden field with access key for API
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
        {statusMessage && (
          <StatusMessage isSuccess={isSuccess}>{statusMessage}</StatusMessage>
        )}
      </Wrapper>
    </Container>
  );
}

export default Contact;
