import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// project import
import axios from '../../utils/axios';

// types
import { LeadsProps, LeadsType } from '../../types/leads';

// import { SERVER_URL } from '../../config';

// initial state
const initialState: LeadsProps = {
  leads: [],
  loading: false,
  error: null
};

// ==============================|| SLICE - USER ||============================== //

export const fetchLeads = createAsyncThunk('leads/fetchLeads', async () => {
  const response = await axios.get(`api/v1/leads/getleads`);
  return response.data;
});

export const addLeads = createAsyncThunk('leads/addLeads', async (newLeads: LeadsType, { rejectWithValue }) => {
  try {
    const response = await axios.post(`api/v1/leads/register`, newLeads);
    return response.data;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

export const updateLeads = createAsyncThunk('leads/updateLeads', async (updatedLeads: LeadsType, { rejectWithValue }) => {
  try {
    let updatingData: any = Object.assign({}, updatedLeads);
    const response = await axios.put(`api/v1/leads/updateleads/${updatingData._id}`, updatingData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteLeads = createAsyncThunk('leads/deleteLeads', async (userId: string) => {
  await axios.delete(`api/v1/users/${userId}`);
  return userId;
});

export const getLeadsDetails = (_id: string) => async (dispatch: any) => {
  try {
    const response = await axios.get(`api/v1/leads/getleads/${_id}`);
    if (response.status === 200) {
      dispatch(setLeadsDetails(response.data));
    }
  } catch (error: any) {
    console.log('getLeadsDetails', error);
  }
}

const leads = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setLeadsDetails: (state, action: any) => {
      state.leads = action.payload[0].leadsDetails;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeads.fulfilled, (state, action: any) => {
        state.loading = false;
        state.leads = action.payload[0].allLeads;
      })
      .addCase(fetchLeads.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch leads';
      })
      .addCase(addLeads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addLeads.fulfilled, (state, action: PayloadAction<LeadsType>) => {
        state.loading = false;
        state.leads.push(action.payload);
      })
      .addCase(addLeads.rejected, (state, action: any) => {
        state.loading = false;
        if (action.payload[0]) {
          state.error = action.payload[0].message;
        }
        else {
          state.error = action.error.message;
        }
        // state.error = 'Failed to add leads';
      })
      .addCase(updateLeads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateLeads.fulfilled, (state, action: PayloadAction<LeadsType>) => {
        state.loading = false;
        const updatedLeads = action.payload;
        let updatingData: any = Object.assign({}, updatedLeads);
        const index = state.leads.findIndex((leads) => leads._id === updatingData._id);
        if (index !== -1) {
          state.leads[index] = updatedLeads;
        }
      })
      .addCase(updateLeads.rejected, (state, action: any) => {
        state.loading = false;
        if (action.payload[0]) {
          state.error = action.payload[0].message;
        }
        else {
          state.error = action.error.message;
        }
        state.error = 'Failed to update leads';
      })
      .addCase(deleteLeads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteLeads.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        const leadsId = action.payload;
        state.leads = state.leads.filter((leads) => leads._id !== leadsId);
      })
      .addCase(deleteLeads.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to delete leads';
      });
  }
});

export const {
  setLeadsDetails
} = leads.actions;

export default leads.reducer;
