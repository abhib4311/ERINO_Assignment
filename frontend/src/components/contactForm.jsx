import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
function ContactForm() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(contact); // Pass data to the parent (ContactsTable)
        setContact({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            company: '',
            jobTitle: '',
        }); // Clear form after submission
    };
    const onSubmit = (contact) => {
        // console.log(contact);
        try {
            const response = axios.post('http://localhost:3000/api/contacts', contact);
            console.log(response.status);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Box sx={{ padding: 20, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h4">Add Contact</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={contact.firstName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={contact.lastName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Email"
                            name="email"
                            value={contact.email}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Phone Number"
                            name="phoneNumber"
                            value={contact.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Company"
                            name="company"
                            value={contact.company}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Job Title"
                            name="jobTitle"
                            value={contact.jobTitle}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Contact
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default ContactForm;
