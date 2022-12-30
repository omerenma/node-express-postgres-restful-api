import { User, UserStore } from "../models/users";

const store = new UserStore();

describe('User Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('index method should return a list of users', async () => {
        const result = await store.index();
        expect(result.length).toBeGreaterThanOrEqual(0)
    })
//     it('should have a show method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('should have a create method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('should have a update method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('should have a delete method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('create method should add a user', async () => {
//       const result = await store.create({
//         id:6,
//       first_name: 'Julius',
//       last_name: 'Kingsley',
//       sex: 'Male',
//       age: 29
//       })
//       console.log(result, 'add user test result')
//     expect(result).toEqual({
//       id:6,
//       first_name: 'Julius',
//       last_name: 'Kingsley',
//       sex: 'Male',
//       age: 29
//     });
//   });

//   it('index method should return a list of books', async () => {
//     const result = await store.index();
//     // expect(result).toEqual([{
//     //   id: "1",
//     //   title: 'Bridge to Terabithia',
//     //   totalPages: 250,
//     //   author: 'Katherine Paterson',
//     //   summary: 'Childrens'
//     // }]);
//   });

//   it('show method should return the correct book', async () => {
//     const result = await store.show("1");
//     expect(result).toEqual({
//       id: "1",
//       title: 'Bridge to Terabithia',
//       totalPages: 250,
//       author: 'Katherine Paterson',
//       summary: 'Childrens'
//     });
//   });

//   it('delete method should remove the book', async () => {
//     store.delete("1");
//     const result = await store.index()

//     expect(result).toEqual([]);
//   });
})