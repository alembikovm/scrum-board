import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEntities, fetchUpdateEntity } from "./entityAPI";

const initialState = {
  data: [],
  status: "idle",
};

export const getEntities = createAsyncThunk("entity/getEntities", async () => {
  const response = await fetchEntities();
  console.log(response);
  return response;
});

export const updateEntity = createAsyncThunk(
  "entity/updateEntity",
  async (entity) => {
    const response = await fetchUpdateEntity(entity);
    console.log(response);
    return response;
  }
);

export const entitySlice = createSlice({
  name: "entities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEntities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEntities.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action?.payload || initialState.data;
      })

      .addCase(updateEntity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateEntity.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = state.data.map((entity) =>
          entity.id !== action.payload.id ? entity : action.payload
        );
      });
  },
});

export const selectEntities = (state) => state.entities.data;

export default entitySlice.reducer;
