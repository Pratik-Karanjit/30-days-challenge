import { model } from "mongoose";
import { userSchema } from "./userSchema.js";

export let User = model("User", userSchema);
