import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const ImportButton = () => {
  const handleImport = () => {
    // logic for importing employee data
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<CloudUploadIcon />}
      onClick={handleImport}
    >
      Import
    </Button>
  );
};

export default ImportButton;