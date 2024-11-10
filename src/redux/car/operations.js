import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async ({ filters, page }, thunkAPI) => {
    try {
      const url = new URL(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
      );

      if (filters.location) {
        url.searchParams.append("location", filters.location);
      }
      if (filters.form) {
        url.searchParams.append("form", filters.form);
      }
      Object.keys(filters.equipment).forEach((key) => {
        if (filters.equipment[key]) {
          url.searchParams.append(key, true);
        }
      });

      url.searchParams.append("page", page);

      const response = await axios.get(url.toString());

      if (response.data.length === 0) {
        toast.error("No campers found for your search.");
        return thunkAPI.rejectWithValue("No campers found");
      }

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("No campers found for your search.");
        return thunkAPI.rejectWithValue("No campers found");
      }

      toast.error("Failed to load campers. Please try again.");
      console.error("Error details:", error);
      return thunkAPI.rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchCamperDetails",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      toast.success("Camper details loaded successfully!");
      return response.data;
    } catch (error) {
      toast.error("Failed to load camper details. Please try again later.");
      console.error("Error details:", error);
      return thunkAPI.rejectWithValue(error.message || "An error occurred");
    }
  }
);
