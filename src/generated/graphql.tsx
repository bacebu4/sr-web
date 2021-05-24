import gql from "graphql-tag";
import * as Urql from "urql";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Note = {
  __typename?: "Note";
  id: Scalars["ID"];
  text: Scalars["String"];
  title: Scalars["String"];
  author: Scalars["String"];
  tags?: Maybe<Array<Maybe<Tag>>>;
  deleted?: Maybe<Scalars["Boolean"]>;
  comments: Array<Maybe<Comment>>;
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  name: Scalars["String"];
  hue: Scalars["Int"];
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["ID"];
  text: Scalars["String"];
  createdAt: Scalars["String"];
  noteId: Scalars["String"];
};

export type Book = {
  __typename?: "Book";
  id: Scalars["ID"];
  title: Scalars["String"];
  author: Scalars["String"];
};

export type Info = {
  __typename?: "Info";
  reviewAmount: Scalars["Int"];
  latestReviewDate?: Maybe<Scalars["String"]>;
  streakBeginningDate?: Maybe<Scalars["String"]>;
  streak: Scalars["Int"];
  missed: Scalars["Int"];
  reviewed: Scalars["Boolean"];
  email: Scalars["String"];
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  /** Get note ids to display in review mode */
  dailyNotesIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notesBy?: Maybe<Array<Maybe<Note>>>;
  note?: Maybe<Note>;
  info?: Maybe<Info>;
  books?: Maybe<Array<Maybe<Book>>>;
  latestBooks?: Maybe<Array<Maybe<Book>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  reviewHistoryThisWeek?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
};

export type QueryNotesByArgs = {
  id?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
};

export type QueryNoteArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryTagsArgs = {
  type?: Maybe<Scalars["String"]>;
};

export type UpdatedNote = {
  __typename?: "UpdatedNote";
  id: Scalars["ID"];
  text: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addComment?: Maybe<Note>;
  addExistingTag?: Maybe<Note>;
  addNewTag?: Maybe<Note>;
  updateTag?: Maybe<Scalars["Boolean"]>;
  deleteTag?: Maybe<Scalars["Boolean"]>;
  deleteBook?: Maybe<Scalars["Boolean"]>;
  deleteTagFromNote?: Maybe<Note>;
  deleteComment?: Maybe<Note>;
  updateReviewHistory?: Maybe<Info>;
  updateReviewAmount?: Maybe<Info>;
  deleteNote?: Maybe<Scalars["Boolean"]>;
  updateNote?: Maybe<Note>;
  updateComment?: Maybe<Comment>;
  login?: Maybe<Scalars["String"]>;
  register?: Maybe<Scalars["String"]>;
  searchNotes?: Maybe<Array<Maybe<Note>>>;
};

export type MutationAddCommentArgs = {
  noteId?: Maybe<Scalars["ID"]>;
  commentId?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["String"]>;
};

export type MutationAddExistingTagArgs = {
  noteId?: Maybe<Scalars["ID"]>;
  tagId?: Maybe<Scalars["ID"]>;
};

export type MutationAddNewTagArgs = {
  noteId?: Maybe<Scalars["ID"]>;
  tagId?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  hue?: Maybe<Scalars["Int"]>;
};

export type MutationUpdateTagArgs = {
  tagId?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  hue?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteTagArgs = {
  tagId?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteBookArgs = {
  bookId?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteTagFromNoteArgs = {
  noteId?: Maybe<Scalars["ID"]>;
  tagId?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteCommentArgs = {
  commentId?: Maybe<Scalars["ID"]>;
  noteId?: Maybe<Scalars["ID"]>;
};

export type MutationUpdateReviewAmountArgs = {
  reviewAmount?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteNoteArgs = {
  noteId?: Maybe<Scalars["String"]>;
};

export type MutationUpdateNoteArgs = {
  noteId?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
};

export type MutationUpdateCommentArgs = {
  commentId?: Maybe<Scalars["ID"]>;
  text?: Maybe<Scalars["String"]>;
};

export type MutationLoginArgs = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type MutationRegisterArgs = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type MutationSearchNotesArgs = {
  substring?: Maybe<Scalars["String"]>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type AddCommentMutationVariables = Exact<{
  noteId: Scalars["ID"];
  commentId: Scalars["ID"];
  text: Scalars["String"];
}>;

export type AddCommentMutation = { __typename?: "Mutation" } & {
  addComment?: Maybe<
    { __typename?: "Note" } & Pick<Note, "id"> & {
        comments: Array<
          Maybe<
            { __typename?: "Comment" } & Pick<
              Comment,
              "id" | "text" | "createdAt" | "noteId"
            >
          >
        >;
      }
  >;
};

export type AddExistingTagMutationVariables = Exact<{
  noteId: Scalars["ID"];
  tagId: Scalars["ID"];
}>;

export type AddExistingTagMutation = { __typename?: "Mutation" } & {
  addExistingTag?: Maybe<
    { __typename?: "Note" } & Pick<Note, "id"> & {
        tags?: Maybe<
          Array<
            Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>
          >
        >;
      }
  >;
};

export type AddNewTagMutationVariables = Exact<{
  noteId: Scalars["ID"];
  tagId: Scalars["ID"];
  name: Scalars["String"];
  hue: Scalars["Int"];
}>;

export type AddNewTagMutation = { __typename?: "Mutation" } & {
  addNewTag?: Maybe<
    { __typename?: "Note" } & Pick<Note, "id"> & {
        tags?: Maybe<
          Array<
            Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>
          >
        >;
      }
  >;
};

export type DeleteBookMutationVariables = Exact<{
  bookId: Scalars["ID"];
}>;

export type DeleteBookMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteBook"
>;

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars["ID"];
  noteId: Scalars["ID"];
}>;

export type DeleteCommentMutation = { __typename?: "Mutation" } & {
  deleteComment?: Maybe<
    { __typename?: "Note" } & Pick<Note, "id"> & {
        comments: Array<
          Maybe<
            { __typename?: "Comment" } & Pick<
              Comment,
              "id" | "text" | "createdAt" | "noteId"
            >
          >
        >;
      }
  >;
};

export type DeleteNoteMutationVariables = Exact<{
  noteId: Scalars["String"];
}>;

export type DeleteNoteMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteNote"
>;

export type DeleteTagMutationVariables = Exact<{
  tagId: Scalars["ID"];
}>;

export type DeleteTagMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteTag"
>;

export type DeleteTagFromNoteMutationVariables = Exact<{
  noteId: Scalars["ID"];
  tagId: Scalars["ID"];
}>;

export type DeleteTagFromNoteMutation = { __typename?: "Mutation" } & {
  deleteTagFromNote?: Maybe<
    { __typename?: "Note" } & Pick<Note, "id"> & {
        tags?: Maybe<
          Array<
            Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>
          >
        >;
      }
  >;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "login"
>;

export type RegisterMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "register"
>;

export type SearchNotesMutationVariables = Exact<{
  substring: Scalars["String"];
}>;

export type SearchNotesMutation = { __typename?: "Mutation" } & {
  searchNotes?: Maybe<
    Array<
      Maybe<
        { __typename?: "Note" } & Pick<Note, "text" | "id" | "title" | "author">
      >
    >
  >;
};

export type UpdateCommentMutationVariables = Exact<{
  commentId: Scalars["ID"];
  text: Scalars["String"];
}>;

export type UpdateCommentMutation = { __typename?: "Mutation" } & {
  updateComment?: Maybe<
    { __typename?: "Comment" } & Pick<Comment, "id" | "text">
  >;
};

export type UpdateNoteMutationVariables = Exact<{
  noteId: Scalars["String"];
  text: Scalars["String"];
}>;

export type UpdateNoteMutation = { __typename?: "Mutation" } & {
  updateNote?: Maybe<{ __typename?: "Note" } & Pick<Note, "id" | "text">>;
};

export type UpdateReviewAmountMutationVariables = Exact<{
  reviewAmount: Scalars["Int"];
}>;

export type UpdateReviewAmountMutation = { __typename?: "Mutation" } & {
  updateReviewAmount?: Maybe<
    { __typename?: "Info" } & Pick<Info, "reviewAmount" | "id">
  >;
};

export type UpdateReviewHistoryMutationVariables = Exact<{
  [key: string]: never;
}>;

export type UpdateReviewHistoryMutation = { __typename?: "Mutation" } & {
  updateReviewHistory?: Maybe<
    { __typename?: "Info" } & Pick<Info, "streak" | "reviewed" | "id">
  >;
};

export type UpdateTagMutationVariables = Exact<{
  tagId: Scalars["ID"];
  name: Scalars["String"];
  hue: Scalars["Int"];
}>;

export type UpdateTagMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "updateTag"
>;

export type BooksQueryVariables = Exact<{ [key: string]: never }>;

export type BooksQuery = { __typename?: "Query" } & {
  books?: Maybe<
    Array<
      Maybe<{ __typename?: "Book" } & Pick<Book, "title" | "author" | "id">>
    >
  >;
};

export type DailyNotesIdsQueryVariables = Exact<{ [key: string]: never }>;

export type DailyNotesIdsQuery = { __typename?: "Query" } & Pick<
  Query,
  "dailyNotesIds"
>;

export type InfoQueryVariables = Exact<{ [key: string]: never }>;

export type InfoQuery = { __typename?: "Query" } & {
  info?: Maybe<
    { __typename?: "Info" } & Pick<
      Info,
      | "reviewAmount"
      | "email"
      | "latestReviewDate"
      | "streakBeginningDate"
      | "missed"
      | "reviewed"
      | "streak"
      | "id"
    >
  >;
};

export type LatestBooksQueryVariables = Exact<{ [key: string]: never }>;

export type LatestBooksQuery = { __typename?: "Query" } & {
  latestBooks?: Maybe<
    Array<
      Maybe<{ __typename?: "Book" } & Pick<Book, "id" | "title" | "author">>
    >
  >;
};

export type NoteQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type NoteQuery = { __typename?: "Query" } & {
  note?: Maybe<
    { __typename?: "Note" } & Pick<
      Note,
      "text" | "id" | "title" | "author" | "deleted"
    > & {
        tags?: Maybe<
          Array<
            Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>
          >
        >;
        comments: Array<
          Maybe<
            { __typename?: "Comment" } & Pick<
              Comment,
              "id" | "text" | "createdAt" | "noteId"
            >
          >
        >;
      }
  >;
};

export type NotesByQueryVariables = Exact<{
  type: Scalars["String"];
  id: Scalars["ID"];
}>;

export type NotesByQuery = { __typename?: "Query" } & {
  notesBy?: Maybe<
    Array<
      Maybe<
        { __typename?: "Note" } & Pick<Note, "text" | "id" | "title" | "author">
      >
    >
  >;
};

export type NotesByBookQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type NotesByBookQuery = { __typename?: "Query" } & {
  notesBy?: Maybe<
    Array<Maybe<{ __typename?: "Note" } & Pick<Note, "text" | "id">>>
  >;
};

export type NotesByTagQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type NotesByTagQuery = { __typename?: "Query" } & {
  notesBy?: Maybe<
    Array<
      Maybe<
        { __typename?: "Note" } & Pick<Note, "text" | "id" | "title" | "author">
      >
    >
  >;
};

export type ReviewHistoryThisWeekQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ReviewHistoryThisWeekQuery = { __typename?: "Query" } & Pick<
  Query,
  "reviewHistoryThisWeek"
>;

export type TagsQueryVariables = Exact<{
  type?: Maybe<Scalars["String"]>;
}>;

export type TagsQuery = { __typename?: "Query" } & {
  tags?: Maybe<
    Array<Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>>
  >;
};

export type AllTagsScreenQueryVariables = Exact<{ [key: string]: never }>;

export type AllTagsScreenQuery = { __typename?: "Query" } & {
  tags?: Maybe<
    Array<Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>>
  >;
};

export type HomeScreenQueryVariables = Exact<{ [key: string]: never }>;

export type HomeScreenQuery = { __typename?: "Query" } & Pick<
  Query,
  "dailyNotesIds"
> & {
    info?: Maybe<
      { __typename?: "Info" } & Pick<
        Info,
        | "reviewAmount"
        | "email"
        | "latestReviewDate"
        | "streakBeginningDate"
        | "missed"
        | "reviewed"
        | "streak"
        | "id"
      >
    >;
    latestBooks?: Maybe<
      Array<
        Maybe<{ __typename?: "Book" } & Pick<Book, "id" | "title" | "author">>
      >
    >;
    tags?: Maybe<
      Array<Maybe<{ __typename?: "Tag" } & Pick<Tag, "id" | "name" | "hue">>>
    >;
  };

export const AddCommentDocument = gql`
  mutation AddComment($noteId: ID!, $commentId: ID!, $text: String!) {
    addComment(noteId: $noteId, commentId: $commentId, text: $text) {
      id
      comments {
        id
        text
        createdAt
        noteId
      }
    }
  }
`;

export function useAddCommentMutation() {
  return Urql.useMutation<AddCommentMutation, AddCommentMutationVariables>(
    AddCommentDocument
  );
}
export const AddExistingTagDocument = gql`
  mutation AddExistingTag($noteId: ID!, $tagId: ID!) {
    addExistingTag(noteId: $noteId, tagId: $tagId) {
      id
      tags {
        id
        name
        hue
      }
    }
  }
`;

export function useAddExistingTagMutation() {
  return Urql.useMutation<
    AddExistingTagMutation,
    AddExistingTagMutationVariables
  >(AddExistingTagDocument);
}
export const AddNewTagDocument = gql`
  mutation AddNewTag($noteId: ID!, $tagId: ID!, $name: String!, $hue: Int!) {
    addNewTag(noteId: $noteId, tagId: $tagId, name: $name, hue: $hue) {
      id
      tags {
        id
        name
        hue
      }
    }
  }
`;

export function useAddNewTagMutation() {
  return Urql.useMutation<AddNewTagMutation, AddNewTagMutationVariables>(
    AddNewTagDocument
  );
}
export const DeleteBookDocument = gql`
  mutation DeleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId)
  }
`;

export function useDeleteBookMutation() {
  return Urql.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(
    DeleteBookDocument
  );
}
export const DeleteCommentDocument = gql`
  mutation DeleteComment($commentId: ID!, $noteId: ID!) {
    deleteComment(commentId: $commentId, noteId: $noteId) {
      id
      comments {
        id
        text
        createdAt
        noteId
      }
    }
  }
`;

export function useDeleteCommentMutation() {
  return Urql.useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(DeleteCommentDocument);
}
export const DeleteNoteDocument = gql`
  mutation DeleteNote($noteId: String!) {
    deleteNote(noteId: $noteId)
  }
`;

export function useDeleteNoteMutation() {
  return Urql.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(
    DeleteNoteDocument
  );
}
export const DeleteTagDocument = gql`
  mutation DeleteTag($tagId: ID!) {
    deleteTag(tagId: $tagId)
  }
`;

export function useDeleteTagMutation() {
  return Urql.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(
    DeleteTagDocument
  );
}
export const DeleteTagFromNoteDocument = gql`
  mutation DeleteTagFromNote($noteId: ID!, $tagId: ID!) {
    deleteTagFromNote(noteId: $noteId, tagId: $tagId) {
      id
      tags {
        id
        name
        hue
      }
    }
  }
`;

export function useDeleteTagFromNoteMutation() {
  return Urql.useMutation<
    DeleteTagFromNoteMutation,
    DeleteTagFromNoteMutationVariables
  >(DeleteTagFromNoteDocument);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const RegisterDocument = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const SearchNotesDocument = gql`
  mutation SearchNotes($substring: String!) {
    searchNotes(substring: $substring) {
      text
      id
      title
      author
    }
  }
`;

export function useSearchNotesMutation() {
  return Urql.useMutation<SearchNotesMutation, SearchNotesMutationVariables>(
    SearchNotesDocument
  );
}
export const UpdateCommentDocument = gql`
  mutation UpdateComment($commentId: ID!, $text: String!) {
    updateComment(commentId: $commentId, text: $text) {
      id
      text
    }
  }
`;

export function useUpdateCommentMutation() {
  return Urql.useMutation<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >(UpdateCommentDocument);
}
export const UpdateNoteDocument = gql`
  mutation UpdateNote($noteId: String!, $text: String!) {
    updateNote(noteId: $noteId, text: $text) {
      id
      text
    }
  }
`;

export function useUpdateNoteMutation() {
  return Urql.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(
    UpdateNoteDocument
  );
}
export const UpdateReviewAmountDocument = gql`
  mutation UpdateReviewAmount($reviewAmount: Int!) {
    updateReviewAmount(reviewAmount: $reviewAmount) {
      reviewAmount
      id
    }
  }
`;

export function useUpdateReviewAmountMutation() {
  return Urql.useMutation<
    UpdateReviewAmountMutation,
    UpdateReviewAmountMutationVariables
  >(UpdateReviewAmountDocument);
}
export const UpdateReviewHistoryDocument = gql`
  mutation UpdateReviewHistory {
    updateReviewHistory {
      streak
      reviewed
      id
    }
  }
`;

export function useUpdateReviewHistoryMutation() {
  return Urql.useMutation<
    UpdateReviewHistoryMutation,
    UpdateReviewHistoryMutationVariables
  >(UpdateReviewHistoryDocument);
}
export const UpdateTagDocument = gql`
  mutation UpdateTag($tagId: ID!, $name: String!, $hue: Int!) {
    updateTag(tagId: $tagId, name: $name, hue: $hue)
  }
`;

export function useUpdateTagMutation() {
  return Urql.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(
    UpdateTagDocument
  );
}
export const BooksDocument = gql`
  query Books {
    books {
      title
      author
      id
    }
  }
`;

export function useBooksQuery(
  options: Omit<Urql.UseQueryArgs<BooksQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<BooksQuery>({ query: BooksDocument, ...options });
}
export const DailyNotesIdsDocument = gql`
  query DailyNotesIds {
    dailyNotesIds
  }
`;

export function useDailyNotesIdsQuery(
  options: Omit<Urql.UseQueryArgs<DailyNotesIdsQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<DailyNotesIdsQuery>({
    query: DailyNotesIdsDocument,
    ...options,
  });
}
export const InfoDocument = gql`
  query Info {
    info {
      reviewAmount
      email
      latestReviewDate
      streakBeginningDate
      missed
      reviewed
      streak
      id
    }
  }
`;

export function useInfoQuery(
  options: Omit<Urql.UseQueryArgs<InfoQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<InfoQuery>({ query: InfoDocument, ...options });
}
export const LatestBooksDocument = gql`
  query LatestBooks {
    latestBooks {
      id
      title
      author
    }
  }
`;

export function useLatestBooksQuery(
  options: Omit<Urql.UseQueryArgs<LatestBooksQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<LatestBooksQuery>({
    query: LatestBooksDocument,
    ...options,
  });
}
export const NoteDocument = gql`
  query Note($id: ID!) {
    note(id: $id) {
      text
      id
      title
      author
      tags {
        id
        name
        hue
      }
      deleted
      comments {
        id
        text
        createdAt
        noteId
      }
    }
  }
`;

export function useNoteQuery(
  options: Omit<Urql.UseQueryArgs<NoteQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<NoteQuery>({ query: NoteDocument, ...options });
}
export const NotesByDocument = gql`
  query NotesBy($type: String!, $id: ID!) {
    notesBy(type: $type, id: $id) {
      text
      id
      title
      author
    }
  }
`;

export function useNotesByQuery(
  options: Omit<Urql.UseQueryArgs<NotesByQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<NotesByQuery>({ query: NotesByDocument, ...options });
}
export const NotesByBookDocument = gql`
  query NotesByBook($id: ID!) {
    notesBy(type: "book", id: $id) {
      text
      id
    }
  }
`;

export function useNotesByBookQuery(
  options: Omit<Urql.UseQueryArgs<NotesByBookQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<NotesByBookQuery>({
    query: NotesByBookDocument,
    ...options,
  });
}
export const NotesByTagDocument = gql`
  query NotesByTag($id: ID!) {
    notesBy(type: "tag", id: $id) {
      text
      id
      title
      author
    }
  }
`;

export function useNotesByTagQuery(
  options: Omit<Urql.UseQueryArgs<NotesByTagQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<NotesByTagQuery>({
    query: NotesByTagDocument,
    ...options,
  });
}
export const ReviewHistoryThisWeekDocument = gql`
  query ReviewHistoryThisWeek {
    reviewHistoryThisWeek
  }
`;

export function useReviewHistoryThisWeekQuery(
  options: Omit<
    Urql.UseQueryArgs<ReviewHistoryThisWeekQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<ReviewHistoryThisWeekQuery>({
    query: ReviewHistoryThisWeekDocument,
    ...options,
  });
}
export const TagsDocument = gql`
  query Tags($type: String) {
    tags(type: $type) {
      id
      name
      hue
    }
  }
`;

export function useTagsQuery(
  options: Omit<Urql.UseQueryArgs<TagsQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<TagsQuery>({ query: TagsDocument, ...options });
}
export const AllTagsScreenDocument = gql`
  query AllTagsScreen {
    tags {
      id
      name
      hue
    }
  }
`;

export function useAllTagsScreenQuery(
  options: Omit<Urql.UseQueryArgs<AllTagsScreenQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<AllTagsScreenQuery>({
    query: AllTagsScreenDocument,
    ...options,
  });
}
export const HomeScreenDocument = gql`
  query HomeScreen {
    info {
      reviewAmount
      email
      latestReviewDate
      streakBeginningDate
      missed
      reviewed
      streak
      id
    }
    dailyNotesIds
    latestBooks {
      id
      title
      author
    }
    tags(type: "latest") {
      id
      name
      hue
    }
  }
`;

export function useHomeScreenQuery(
  options: Omit<Urql.UseQueryArgs<HomeScreenQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<HomeScreenQuery>({
    query: HomeScreenDocument,
    ...options,
  });
}
