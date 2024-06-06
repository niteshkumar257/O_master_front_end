// LoadingModal.jsx
import React from 'react';
import { Modal, Box } from '@mui/material';
import { Audio } from 'react-loader-spinner';

const LoadingModal = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadious:9,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="loading-modal-title"
      aria-describedby="loading-modal-description"
    >
      <Box sx={style}>
        <Audio
          height="80"
          width="50"
          radius="9"
          color="#947e01"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Box>
    </Modal>
  );
};

export default LoadingModal;
