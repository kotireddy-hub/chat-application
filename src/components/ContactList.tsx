// ContactList.tsx
import React from 'react';
import { Contact } from './types';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles.css';

interface ContactListProps {
  contacts: Contact[];
  onSelectContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onSelectContact }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleMenuItemClick = (action: string) => {
    console.log(`${action} clicked for contact ${selectedIndex}`);
    handleClose();
  };

  return (
    <List className="contact-list">
      {contacts.map((contact, index) => (
        <ListItem
          key={contact.userId}
          button
          onClick={() => onSelectContact(contact)}
          selected={selectedIndex === index}
        >
          <ListItemAvatar>
            <Avatar src={contact.profilePictureURL} />
          </ListItemAvatar>
          <ListItemText primary={contact.name} secondary={contact.chat[contact.chat.length - 1].message} />
          {contact.unreadCount > 0 && <span className="unread-count">{contact.unreadCount}</span>}
          <IconButton
            edge="end"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={(event) => handleClick(event, index)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedIndex === index}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleMenuItemClick('Mark as unread')}>Mark as unread</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Delete')}>Delete</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Cancel')}>Cancel</MenuItem>
          </Menu>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
