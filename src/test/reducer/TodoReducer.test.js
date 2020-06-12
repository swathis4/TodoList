import { reducer } from '../../components/reducer/TodoReducer'

describe('testing reducer', () => {
    test('should return default state', () =>{
        const newState = reducer(undefined, {});
        expect(newState).not.toBeNull();
    });

    test("Should returns the new state when adding todo list", () => {
        const state = {
          counter: null,
          todos: [],
        };
        const todoReducer = reducer(state, {
          type: "add",
          payload: {
            text: "test2"
          },
        });
    
        expect(todoReducer).not.toBeNull();
      });

      test("Should update the state when removing todo details", () => {
        const state = {
          counter: 3,
          todos: [
            {
                id: 1,
                text: "Scrum meeting",
            }, {
                id: 2,
                text: "Sprint planning",
              },
              {
                id: 3,
                text: "Retrospective meeting",
              }
          ]
        };
        const todoReducer = reducer(state, {
          type: "remove",
          payload: {
            id: 3
          }
        });
        expect(todoReducer).toEqual({
            counter: 3,
            todos: [
              { id: 1, text: 'Scrum meeting' },
              { id: 2, text: 'Sprint planning' }
            ]
          });
      });

      test("Should update the state when editing todo details", () => {
        const state = {
          counter: 3,
          todos: [
            {
                id: 1,
                text: "Scrum meeting",
            }, {
                id: 2,
                text: "Sprint planning",
              },
              {
                id: 3,
                text: "Retrospective meeting",
              }
          ]
        };
        const todoReducer = reducer(state, {
          type: "edit",
          payload: {
            id: 1,
            text: "text"
          }
        });
        // console.log("edit todo", todoReducer);
        expect(todoReducer).not.toBeNull();
      });
})