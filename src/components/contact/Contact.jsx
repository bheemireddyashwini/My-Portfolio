import { useState } from "react";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 20px;
  background: transparent;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  width: 100%;
  animation: slideUp 1s ease-out;

  @keyframes slideUp {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  animation: fadeIn 2s ease-in-out;
`;

const Form = styled.form`
  background: transparent;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: black;
  animation: formFadeIn 1.5s ease-in-out;

  @keyframes formFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #6288b0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  color: black;
  &:hover {
    color: white;
  }
`;

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
    box-shadow: 0 0 8px #6288b0;
  }

  &:hover {
    border-color: #6288b0;
  }
`;

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
    box-shadow: 0 0 8px #6288b0;
  }

  &:hover {
    border-color: #6288b0;
  }
`;

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
    transform: scale(1.05);
  }

  &:active {
    background-color: #537b9b;
  }
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: ${({ isSuccess }) =>
    isSuccess ? "green" : "red"}; // Success green and error red
  animation: fadeIn 1.5s ease-in-out;
`;

function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("Sending...");
    setIsSuccess(false);

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setStatusMessage("Message sent successfully!");
        event.target.reset();
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch {
      setIsSuccess(false);
      setStatusMessage("Error: Unable to send message.");
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <Description>
          I’d love to connect and hear your thoughts! Feel free to reach out.
        </Description>
        <Form onSubmit={handleSubmit}>
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
            value="ea9c64f0-2c57-4853-b10a-5e74dd384593"
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
