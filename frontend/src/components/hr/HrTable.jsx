import { Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useHistory } from 'react-router';
import { getValueOption } from '../../utils/common';
import { hrResultOption, interviewStatusOption } from '../../constants';
import { getDateFormat } from '../../utils/common';
import { getDateTimeFormat } from '../../utils/common';

import { StyledTableCell, StyledTableRow } from '../common/StyledTable';
import CustomButton from '../form/CustomButton';
import CustomPagination from '../form/CustomPagination';

export default function LeadsTable(props) {
    const { leads, page, handlePageChange, isLoading } = props;
    const totalPage = leads ? leads.total_pages : 0;
    const perPage = leads ? leads.per_page : 0;
    const count = leads ? leads.count : 0;
    const hasLeads = leads && leads.results && !!leads.results.length;
    const history = useHistory();

    return (
        <>
            {isLoading ? (
                <Box sx={{ display: 'flex', margin: '18px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : hasLeads ? (
                <TableContainer sx={{ mt: 3 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID.</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Phone Number</StyledTableCell>
                                <StyledTableCell align="center">Calling Recruiter</StyledTableCell>
                                <StyledTableCell align="center">Date of Calling</StyledTableCell>
                                <StyledTableCell align="center">HR Interview Status</StyledTableCell>
                                <StyledTableCell align="center">HR Interview Date and Time</StyledTableCell>
                                <StyledTableCell align="center">HR Result</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leads &&
                                leads.results.map((lead, vocabulary, index) => {
                                    return (
                                        <>
                                        {
                                            (lead.communication_result ==='qualified') &&(
                                                <StyledTableRow key={lead.id}>
                                                    
                                            <StyledTableCell align="center">{lead.id}</StyledTableCell>
                                            <StyledTableCell
                                                sx={{ cursor: 'pointer', color: 'blue' }}
                                                align="center"
                                                onClick={() =>
                                                    history.push(`/hr/edit/${lead.id}`, {
                                                        id: lead.id
                                                    })
                                                }
                                            >
                                                {lead.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{lead.email}</StyledTableCell>
                                            <StyledTableCell align="center">{lead.phone}</StyledTableCell>

                                            <StyledTableCell align="center">{lead.hr_calling_recruiter}</StyledTableCell>
                                            <StyledTableCell align="center">{getDateFormat(lead.hr_date_of_calling)}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                {getValueOption(interviewStatusOption, lead.hr_interview_status)}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{getDateTimeFormat(lead.hr_interview_date)}</StyledTableCell>


                                           
                                            <StyledTableCell align="center">
                                                {getValueOption(hrResultOption, lead.hr_result)}
                                            </StyledTableCell>
                                            
                                            {/* <StyledTableCell align="center">{lead.updated_by && lead.updated_by.user_name}</StyledTableCell> */}
                                            {/* <StyledTableCell align="center">
                                                {lead.updated_by && lead.updated_by.user_name}
                                                <br />
                                            </StyledTableCell> */}
                                            
                                        
                                        
                                        
                                    </StyledTableRow>

                                            )

                                        }
                                        </>
                                    )
                                    
                                    
})}
                        </TableBody>
                    </Table>
                    <CustomPagination
                        page={page}
                        handlePageChange={handlePageChange}
                        totalPage={totalPage}
                        count={count}
                        perPage={perPage}
                    />
                </TableContainer>
            ) : (
                <h3>NO DATA</h3>
            )}
        </>
    );
}
