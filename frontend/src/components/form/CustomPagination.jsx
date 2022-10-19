import * as React from 'react';
import { Pagination, Stack, Grid } from '@mui/material';

export default function CustomPagination(props) {
    const { page, handlePageChange, totalPage, count, perPage } = props;
    const startPageNum = 1 + (perPage * (page - 1));
    const endPageNum = perPage * page < count ? perPage * page : count;
    return (
        <Grid container direction="row" justifyContent="flex-end" alignItems="center" mt={3} mb={3}>
            <Stack spacing={2} direction="row" alignItems={'center'}>
                <div>{`${startPageNum}-${endPageNum} of ${count}`}</div>
                <Pagination count={totalPage} page={page} onChange={handlePageChange} size="large" />
            </Stack>
        </Grid>
    );
}
