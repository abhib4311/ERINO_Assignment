import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TableSortLabel, TablePagination, Button,
    Box
} from '@mui/material';

function ContactsTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('firstName');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const FetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/contacts');
                const { allContacts, message } = response.data;
                setContacts(allContacts);
                console.log(message);
                console.log("object")
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };
        FetchContacts();
    }, [])


    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const sortedContacts = [...contacts].sort((a, b) => {
    //     if (orderBy === 'firstName') {
    //         return order === 'asc'
    //             ? a.firstName.localeCompare(b.firstName)
    //             : b.firstName.localeCompare(a.firstName);
    //     }
    //     // You can add more sort conditions here for other columns like 'lastName', 'email', etc.
    //     return 0;
    // });

    const paginatedContacts = contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (<Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'firstName'}
                                direction={orderBy === 'firstName' ? order : 'asc'}
                                onClick={() => handleRequestSort('firstName')}
                            >
                                First Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Job Title</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedContacts.map((contact, index) => (
                        <TableRow key={index}>
                            <TableCell />
                            <TableCell>{contact.firstName}</TableCell>
                            <TableCell>{contact.lastName}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phoneNumber}</TableCell>
                            <TableCell>{contact.company}</TableCell>
                            <TableCell>{contact.jobTitle}</TableCell>
                            <TableCell>
                                <Button color="primary">Edit</Button>
                                <Button color="secondary">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={contacts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    </Box>
    );
}

export default ContactsTable;
