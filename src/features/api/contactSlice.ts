import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import emailjs from "@emailjs/browser";
import type { RootState } from "../../store";

// Define a type for the slice state
interface ContactState {
  loading: boolean;
  error: string;
  sent: boolean;
}

// Define the initial state using that type
const initialState: ContactState = {
  loading: false,
  error: "",
  sent: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendContact.fulfilled, (state, { payload }) => {
      if (payload != 200) {
        state.error = "No se pudo enviar el formulario";
      }
      state.loading = false;
      state.sent = true;
    });
    builder.addCase(sendContact.rejected, (state, { payload }) => {
      state.loading = false;
      state.sent = true;
      state.error = "Hubo un error al mandar el mensaje";
    });
  },
});

export const sendContact = createAsyncThunk<
  any,
  HTMLFormElement,
  { rejectValue: unknown }
>("contact", async (form) => {
  // const response = emailjs.sendForm(
  //   "service_kd6llmt",
  //   "template_raup2pp",
  //   form,
  //   "EFt_NIkhYbQ13JV0A"
  // );

  // const data = await response;

  // return data.status;
});

//export const {  } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSending = (state: RootState) => state.contact.loading;
export const selectSent = (state: RootState) => state.contact.sent;
export const selectErrorContact = (state: RootState) => state.contact.error;

export default contactSlice.reducer;
