import { Button, Grid, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { PATH_TO_EDUCATIONPAGE } from '../constants/paths';
import { CONFIRMATION_TEXT, LEAVE_HIM_ALONE, REPORT_TROLL } from '../constants/strings';
import { Link } from 'react-router-dom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface FormConfirmationProps {
  resetForm: () => void;
}

const FormConfirmation = (props: FormConfirmationProps): ReactElement => {
  const { resetForm } = props;
  const handleSubmitForm = (): void => {
    console.log('trolololo');
  };

  const handleResignation = (): void => {
    resetForm();
  };

  return (
    <Grid
      container
      textAlign="center"
      direction="column"
      justifyContent="center"
      gap="20px"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h3" color="primary.main" style={{ marginBottom: '2%' }}>
        {CONFIRMATION_TEXT}
      </Typography>
      <Button
        component={Link}
        to={PATH_TO_EDUCATIONPAGE}
        endIcon={<LocalFireDepartmentIcon />}
        onClick={handleSubmitForm}
        variant="outlined"
        color="error"
        size="large"
      >
        {REPORT_TROLL}
      </Button>
      <Button onClick={handleResignation} size="small">
        {LEAVE_HIM_ALONE}
      </Button>
    </Grid>
  );
};

export default FormConfirmation;
