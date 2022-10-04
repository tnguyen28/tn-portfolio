import { createModel } from "@rematch/core";

export const counts = createModel()({
  state: {
    count: 0,
    call: "",
  },

  reducers: {
    increment(state, payload: number) {
      return {
        ...state,
        count: payload,
      };
    },
    setCall(state, payload: string) {
      return {
        ...state,
        call: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number, state) {
      dispatch.count.increment(payload);
    },

    async call() {
        try {
            const response = await fetch("/api/hello");
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
      
            dispatch.counts.setCall(body.express);
        } catch (err){
            console.log(err)
        }
    },
  }),
});
