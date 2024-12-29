import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gradient-to-b from-white to-green-100">
          <Container className="bg-white mx-auto my-8 p-8 rounded-2xl shadow-lg">
            <Heading className="text-3xl font-bold text-gray-800 mb-6">
              New Contact Form Submission
            </Heading>
            <Text className="text-gray-600 mb-6">
              A new message has been received through the Resume Craft contact
              form.
            </Text>
            <Hr className="border-gray-300 my-6" />

            <Section>
              <Text className="text-xl font-semibold text-green-600 mb-4">
                Sender Information
              </Text>
              <Text className="text-gray-600 mb-2">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-gray-600 mb-4">
                <strong>Email:</strong>{" "}
                <Link
                  href={`mailto:${email}`}
                  className="text-green-600 hover:underline"
                >
                  {email}
                </Link>
              </Text>
            </Section>
            <Hr className="border-gray-300 my-6" />

            <Section>
              <Text className="text-xl font-semibold text-green-600 mb-4">
                Message Details
              </Text>
              <Text className="text-gray-600 mb-2">
                <strong>Subject:</strong> {subject}
              </Text>
              <Text className="text-gray-700 mt-4 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {message}
              </Text>
            </Section>
            <Hr className="border-gray-300 my-6" />

            <Section>
              <Text className="text-xl font-semibold text-green-600 mb-4">
                Action Required
              </Text>
              <Text className="text-gray-600 mb-4">
                Please review this message and respond to the sender within our
                standard response time of 24-48 hours.
              </Text>
              <Text className="text-gray-600 mb-2">Quick Actions:</Text>
              <Link
                href={`mailto:${email}`}
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-center mt-2"
              >
                Reply to Sender
              </Link>
            </Section>

            <Text className="text-sm text-gray-500 text-center mt-8">
              This message was received on{" "}
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>

            <Text className="text-xs text-gray-400 text-center mt-4">
              AI ResumeCraft | Internal Communication System
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
