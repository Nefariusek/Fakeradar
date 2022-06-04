import { Box, Button, Checkbox, FormControlLabel, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { FormEvent, ReactElement, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
//@ts-ignore
import FileUpload from 'react-mui-fileuploader';
import NavTabs from '../components/NavTabs';
import FormConfirmation from '../components/FormConfirmation';
import { divStyle } from '../constants/pagesStyles';
import { TITLE } from '../constants/strings';

const sources = [
  {
    value: 'mail',
    label: 'Mail',
  },
  {
    value: 'sms',
    label: 'SMS',
  },
  {
    value: 'social media',
    label: 'Social media',
  },
];

const textFieldStyle = {
  minWidth: '300px',
  maxWidth: '700px',
  width: '70%',
};

const smallTextFieldStyle = {
  minWidth: '120px',
  maxWidth: '310px',
  width: '33%',
};

const FormPage: React.FunctionComponent = (): ReactElement => {
  const [source, setSource] = useState(sources[0].value);
  const [message, setMessage] = useState('');
  const [details, setDetails] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [verified, setVerified] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleSourceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSource(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    setDetails(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setContact(event.target.value);
  };

  const validateForm = (): boolean => {
    if (!details || !message) {
      return false;
    }
    if (isChecked) {
      if (!name || !contact) {
        return false;
      }
    }
    return true;
  };

  const handleValidation = () => {
    console.log(details);
    console.log(message);
    if (validateForm()) {
      console.log('sent');
      setIsClicked(!isClicked);
    }
  };

  const handleFileUploadError = (error: any) => {
    alert('Screenshot upload error!');
  };

  const handleFilesChange = (files: any) => {
    // Do something...
  };

  function onReCaptchaChange(recaptchaValue: string | null) {
    console.log('Captcha clicked');
    setVerified(true);
  }

  return (
<<<<<<< HEAD
    <>
      <NavTabs view="REPORT" />
      <div className="FormPage" style={divStyle}>
        <Grid container textAlign="center" direction="row" justifyContent="center" gap="50px" alignItems="center">
          <img width="150px" height="150px" src="./radar_logo.svg" alt="logo"></img>
          <Typography variant="h1" color="info.main" fontWeight="550">
            {TITLE}
          </Typography>
        </Grid>
        <Grid container alignItems="center" justifyContent="space-around" direction="column" gap="2px" marginTop="40px">
          <TextField
            id="standard-select-currency"
            select
            value={source}
            label="Source of phishing:"
            onChange={handleChange}
            helperText="Please select source of phishing"
            required
            variant="filled"
            style={textFieldStyle}
          >
            {sources.map((src) => (
              <MenuItem key={src.value} value={src.value}>
                {src.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            helperText="Paste the link from a message"
            required
            label="Massage:"
            variant="filled"
            style={textFieldStyle}
          ></TextField>
          {source === 'sms' && (
            <TextField
              helperText="Enter senders phone number"
              required
              label="Senders phone number:"
              variant="filled"
              style={textFieldStyle}
            ></TextField>
          )}
          {source === 'mail' && (
            <TextField
              helperText="Enter senders address"
              required
              label="Senders address:"
              variant="filled"
              style={textFieldStyle}
            ></TextField>
          )}
          {source === 'social media' && (
            <TextField
              helperText="Enter senders username"
              required
              label="Senders username:"
              variant="filled"
              style={textFieldStyle}
            ></TextField>
          )}
          <TextField
            id="outlined-multiline-static"
            variant="outlined"
            label="Your problem:"
            helperText="Describe Your problem"
            multiline
            rows="8"
            style={textFieldStyle}
          ></TextField>
          <FileUpload
            multiFile={true}
            disabled={false}
            title="Please upload a screenshot of the message"
            header="Drag and drop file"
            leftLabel="or"
            rightLabel="to select files"
            buttonLabel="click here"
            buttonRemoveLabel="Remove all"
            maxFileSize={10}
            maxUploadFiles={3}
            maxFilesContainerHeight={357}
            maxFilesContainerWidth={700}
            minFilesContainerWidth={700}
            errorSizeMessage={'An error occured'}
            allowedExtensions={['jpg', 'jpeg', 'png']}
            onFilesChange={handleFilesChange}
            onError={handleFileUploadError}
            bannerProps={{ elevation: 0, variant: 'outlined' }}
            containerProps={{ elevation: 0, variant: 'outlined' }}
          />
          <FormControlLabel
            value="clicked"
            control={<Checkbox onChange={handleCheckboxChange} />}
            label="Did You click the link?"
            labelPlacement="end"
          />
          {isChecked && (
            <Grid container alignItems="center" justifyContent="center" direction="row" gap="60px">
              <TextField
                helperText="Please enter Your name"
                required
                label="Name:"
                variant="filled"
                style={smallTextFieldStyle}
              ></TextField>
              <TextField
                helperText="Leave contact"
                required
                label="Contact:"
                variant="filled"
                style={smallTextFieldStyle}
              ></TextField>
            </Grid>
          )}
          <Button variant="contained" onClick={handleFormSubmission}>
            Submit
          </Button>
        </Grid>
      </div>
    </>
=======
    <div className="FormPage" style={divStyle}>
      {!verified ? (
        <>
          <Grid container textAlign="center" direction="row" justifyContent="center" gap="50px" alignItems="center">
            <img width="150px" height="150px" src="./radar_logo.svg" alt="logo"></img>
            <Typography variant="h1" color="info.main" fontWeight="550">
              {TITLE}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="space-around"
            direction="column"
            gap="2px"
            marginTop="40px"
          >
            <TextField
              id="standard-select-currency"
              select
              value={source}
              label="Source of phishing:"
              onChange={handleSourceChange}
              helperText="Please select source of phishing"
              required
              variant="filled"
              style={textFieldStyle}
            >
              {sources.map((src) => (
                <MenuItem key={src.value} value={src.value}>
                  {src.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              helperText="Paste the link from a message"
              required
              label="Massage:"
              variant="filled"
              style={textFieldStyle}
              onChange={handleMessageChange}
            ></TextField>
            {source === 'sms' && (
              <TextField
                helperText="Enter senders phone number"
                required
                label="Senders phone number:"
                variant="filled"
                style={textFieldStyle}
                onChange={handleDetailsChange}
              ></TextField>
            )}
            {source === 'mail' && (
              <TextField
                helperText="Enter senders address"
                required
                label="Senders address:"
                variant="filled"
                style={textFieldStyle}
                onChange={handleDetailsChange}
              ></TextField>
            )}
            {source === 'social media' && (
              <TextField
                helperText="Enter senders username"
                required
                label="Senders username:"
                variant="filled"
                style={textFieldStyle}
                onChange={handleDetailsChange}
              ></TextField>
            )}
            <TextField
              id="outlined-multiline-static"
              variant="outlined"
              label="Your problem:"
              helperText="Describe Your problem"
              multiline
              rows="8"
              style={textFieldStyle}
              onChange={handleDescriptionChange}
            ></TextField>
            <FileUpload
              multiFile={true}
              disabled={false}
              title="Please upload a screenshot of the message"
              header="Drag and drop file"
              leftLabel="or"
              rightLabel="to select files"
              buttonLabel="click here"
              buttonRemoveLabel="Remove all"
              maxFileSize={10}
              maxUploadFiles={3}
              maxFilesContainerHeight={357}
              maxFilesContainerWidth={700}
              minFilesContainerWidth={700}
              errorSizeMessage={'An error occured'}
              allowedExtensions={['jpg', 'jpeg', 'png']}
              onFilesChange={handleFilesChange}
              onError={handleFileUploadError}
              bannerProps={{ elevation: 0, variant: 'outlined' }}
              containerProps={{ elevation: 0, variant: 'outlined' }}
            />
            <FormControlLabel
              value="clicked"
              control={<Checkbox onChange={handleCheckboxChange} />}
              label="Did You click the link?"
              labelPlacement="end"
            />
            {isChecked && (
              <Grid container alignItems="center" justifyContent="center" direction="row" gap="60px">
                <TextField
                  helperText="Please enter Your name"
                  required
                  label="Name:"
                  variant="filled"
                  style={smallTextFieldStyle}
                  onChange={handleNameChange}
                ></TextField>
                <TextField
                  helperText="Leave contact"
                  required
                  label="Contact:"
                  variant="filled"
                  style={smallTextFieldStyle}
                  onChange={handleContactChange}
                ></TextField>
              </Grid>
            )}
            {!isClicked ? (
              <Button variant="contained" onClick={handleValidation}>
                Submit
              </Button>
            ) : (
              <Grid item sx={{ minHeight: '90px' }}>
                <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} onChange={onReCaptchaChange} />
              </Grid>
            )}
          </Grid>
        </>
      ) : (
        <FormConfirmation />
      )}
    </div>
>>>>>>> develop
  );
};
export default FormPage;
