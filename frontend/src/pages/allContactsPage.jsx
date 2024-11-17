import React, { useState } from 'react'
import ContactsTable from '../components/contactTable';
import { Box } from '@mui/material';

const allContactsPage = () => {
    const [contacts, setContacts] = useState([]);

    const handleClick = () => {
        window.location.href = '/contact';
    }
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    width: 1000,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                    <h1>Your contacts</h1>
                    <button onClick={handleClick}>Create contact</button>
                </Box>

                <ContactsTable />
            </Box>
        </>

    )
}

export default allContactsPage
