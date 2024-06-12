import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ReadingList.css';

const ReadingList = ({ readingList, onRemove }) => {
  return (
    <List>
      {readingList.map((book) => (
        <ListItem
          key={book.title}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onRemove(book)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={book.title} secondary={book.author} />
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
