import { PrimaryState } from './primary.state';
 
export const selectAllSubject = (state: PrimaryState) => state.subject;
export const selectAllLevel = (state: PrimaryState) => state.level;
export const selectAllStudent = (state : PrimaryState) => state.student
export const selectAllConfirmedUser = (state : PrimaryState) => state.confirmed_user
// export const selectAllBooks = (state: AppState) => state.allBooks;
 
// export const selectVisibleBooks = createSelector(
//   selectUser,
//   selectAllBooks,
//   (selectedUser: User, allBooks: Book[]) => {
//     if (selectedUser && allBooks) {
//       return allBooks.filter((book: Book) => book.userId === selectedUser.id);
//     } else {
//       return allBooks;
//     }
//   }
// );