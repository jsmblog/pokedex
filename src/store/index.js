import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "../slices/nameTrainer";
export default configureStore(
    {
      reducer: {
        nameTrainer
      },  
    }
)