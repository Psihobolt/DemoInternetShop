import { Action, ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState } from "../app.state";
import { HydrationActions } from "./hydration.actions";

function isHydrateSuccess(action: Action): 
    action is ReturnType<typeof HydrationActions.hydrateSuccess> {
        return action.type === HydrationActions.hydrateSuccess.type;
}

export const hydrationMetaReducer = (reducer:  ActionReducer<AppState>): 
    ActionReducer<AppState> => {
        return (state, action) => {
            if (isHydrateSuccess(action)) {
                return action.state;
            } else {
                return reducer(state, action);
            }
        };
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];