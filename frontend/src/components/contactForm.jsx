import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    Alert,
} from '@mui/material';

function ContactForm() {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phoneNumber: '',
    //     company: '',
    //     jobTitle: '',
    // });




    return (

        <Box
            sx={{
                width: 100 %,
                height: 100,
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
            }}
        />

    );
}

export default ContactForm;
