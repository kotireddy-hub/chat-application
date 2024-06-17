// ChatWindow.tsx
import React, { useState } from 'react';
import { Contact, ChatMessage } from './types';
import { TextField, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import '../styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ChatWindowProps {
  contact: Contact;
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ contact, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="contact-info">
          <img src={contact.profilePictureURL} alt={contact.name} className="contact-avatar" />
          <div>
            <h3>{contact.name}</h3>
            <p>Click here for contact info</p>
          </div>
        </div>
        <div className="chat-actions">
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
            <p>{msg.message}</p>
            <span className="timestamp">{msg.timeStamp}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <IconButton>
          <AddIcon />
        </IconButton>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <Button onClick={handleSendMessage}>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default ChatWindow;
