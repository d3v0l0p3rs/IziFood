import React from "react";

import { CustomDialogProps } from "./customdialog.types";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CustomDialog: React.FC<CustomDialogProps> = (
  props: CustomDialogProps
) => {
  return (
    <Dialog open={props.show}>
      <DialogTitle id="form-dialog-title">Crear orden</DialogTitle>

      <DialogContent>
        <TextField autoFocus margin="dense" label="Cliente" fullWidth />

        <TextField margin="dense" id="asd" label="Producto" fullWidth />

        <TextField margin="dense" type="number" label="Teléfono" fullWidth />

        <TextField margin="dense" type="number" label="Costo" fullWidth />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => props.negativeAction()}>Cancelar</Button>
        <Button onClick={() => props.positiveAction()}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
