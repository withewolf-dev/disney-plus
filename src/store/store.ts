import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../slice/user-slice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
