import React, { Fragment } from "react";

import { Dialog, Grid } from "@mui/material";

const LocationMap = ({ maxWidth, button, buttonClass }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Fragment>
      <button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
        {button}
        See Location
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <button onClick={handleClose} className="event-close-btn">
          <i className="fa fa-close"></i>
        </button>
        <Grid className="modalBody modal-body">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d122521.86455982782!2d80.40409241255256!3d16.332738109203863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a35f50151e7fc95%3A0x7b910715667b0864!2sGuntur%2C%20Andhra%20Pradesh%20522509!3m2!1d16.3327363!2d80.4865348!5e0!3m2!1sen!2sin!4v1747401847328!5m2!1sen!2sin"></iframe> */}
          <iframe
            title="Guntur Location Map"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d122521.86455982782!2d80.40409241255256!3d16.332738109203863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a35f50151e7fc95%3A0x7b910715667b0864!2sGuntur%2C%20Andhra%20Pradesh%20522509!3m2!1d16.3327363!2d80.4865348!5e0!3m2!1sen!2sin!4v1747401847328!5m2!1sen!2sin"
          />
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default LocationMap;
