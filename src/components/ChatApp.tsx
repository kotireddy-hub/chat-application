// ChatApp.tsx
import React, { useState } from 'react';
import ContactList from './ContactList.tsx';
import ChatWindow from './ChatWindow.tsx';
import { data } from './data.ts';
import { Contact, ChatMessage } from './types';
import '../styles.css';

const ChatApp: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(data[0]);
  const [messages, setMessages] = useState<ChatMessage[]>(data[0].chat);

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setMessages(contact.chat); // Update messages when a contact is selected
  };

  const handleSendMessage = (message: string) => {
    if (selectedContact) {
      const newMessage: ChatMessage = {
        message,
        timeStamp: new Date().toLocaleTimeString(),
        sender: 'me'
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);

      // Update the selected contact's chat messages
      const updatedContact = {
        ...selectedContact,
        chat: updatedMessages,
      };

      // Update the contact list data
      setSelectedContact(updatedContact);
    }
  };

  return (
    <div className="chat-app">
      <ContactList contacts={data} onSelectContact={handleSelectContact} />
      {selectedContact && (
        <ChatWindow contact={selectedContact} messages={messages} onSendMessage={handleSendMessage} />
      )}
    </div>
  );
};

export default ChatApp;
