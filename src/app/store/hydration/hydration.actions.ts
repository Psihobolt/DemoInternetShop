import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AppState } from "../app.state";

export const HydrationActions = createActionGroup({
    source: 'Hydration state',
    events: {
      'Hydrate': emptyProps(),
      'Hydrate Success': props<{ state: AppState }>(),
      'Hydrate Failure': emptyProps(),
    }
});