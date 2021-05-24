import { createClient, dedupExchange, fetchExchange } from "urql";
// import { cacheExchange } from "@urql/exchange-graphcache";
import { BACKEND_URL } from "./constants";
import {
  Comment,
  NoteDocument,
  NoteQuery,
  TagsQuery,
  TagsDocument,
  Tag,
  InfoQuery,
  InfoDocument,
  BooksQuery,
  LatestBooksQuery,
  BooksDocument,
  LatestBooksDocument,
  NotesByDocument,
  NotesByQuery,
} from "../generated/graphql";

export const createUrqlClient = (TOKEN: string) => {
  const client = createClient({
    url: `${BACKEND_URL}/graphql`,
    fetchOptions: () => {
      return {
        headers: { authorization: TOKEN },
      };
    },
    // exchanges: [
    //   dedupExchange,
    //   cacheExchange({
    //     optimistic: {
    //       addComment: (variables, cache, _) => {
    //         const { commentId, noteId, text } = variables;

    //         const cachedComments = cache.readQuery<NoteQuery>({
    //           query: NoteDocument,
    //           variables: { id: noteId },
    //         })?.note?.comments;

    //         const addedComment: Comment = {
    //           id: commentId as string,
    //           noteId: noteId as string,
    //           text: text as string,
    //           createdAt: String(Date.now()),
    //           __typename: "Comment",
    //         };

    //         if (cachedComments) {
    //           return {
    //             __typename: "Note",
    //             id: noteId,
    //             comments: [...cachedComments, addedComment],
    //           } as any;
    //         }
    //       },
    //       addExistingTag: (variables, cache, _) => {
    //         const { noteId, tagId } = variables;

    //         const changedNote = cache.readQuery<NoteQuery>({
    //           query: NoteDocument,
    //           variables: { id: noteId },
    //         })?.note;

    //         const cachedTagsFromNote = changedNote?.tags || [];

    //         const allCachedTags = cache.readQuery<TagsQuery>({
    //           query: TagsDocument,
    //         })?.tags;

    //         const addedTag = allCachedTags?.find((t) => t?.id === tagId);

    //         if (addedTag) {
    //           addedTag.__typename = "Tag";
    //         }

    //         return {
    //           __typename: "Note",
    //           id: noteId,
    //           tags: [...cachedTagsFromNote, addedTag],
    //         } as any;
    //       },
    //       updateTag: (variables, cache, _) => {
    //         const { name, hue, tagId } = variables;

    //         const allFields = cache.inspectFields("Query");
    //         const noteQueries = allFields.filter((x) => x.fieldName === "note");
    //         noteQueries.forEach((q) => {
    //           const noteId = q?.arguments?.id;
    //           if (noteId) {
    //             cache.updateQuery<NoteQuery>(
    //               { query: NoteDocument, variables: { id: noteId } },
    //               (data) => {
    //                 data?.note?.tags?.forEach((t) => {
    //                   if (t?.id === tagId) {
    //                     t.name = name as string;
    //                     t.hue = hue as number;
    //                   }
    //                 });
    //                 return data;
    //               }
    //             );
    //           }
    //         });

    //         return null;
    //       },
    //       deleteTag: (variables, cache, _) => {
    //         const { tagId } = variables;

    //         cache.updateQuery<TagsQuery>(
    //           { query: TagsDocument, variables: { type: "latest" } },
    //           (data) => {
    //             if (data?.tags) {
    //               data.tags = data.tags.filter((t) => t?.id !== tagId);
    //             }
    //             return data;
    //           }
    //         );

    //         cache.updateQuery<TagsQuery>({ query: TagsDocument }, (data) => {
    //           if (data?.tags) {
    //             data.tags = data.tags.filter((t) => t?.id !== tagId);
    //           }
    //           return data;
    //         });

    //         return null;
    //       },
    //       addNewTag: (variables, cache, _) => {
    //         const { name, hue, noteId, tagId } = variables;

    //         const cachedTagsFromNote = cache.readQuery<NoteQuery>({
    //           query: NoteDocument,
    //           variables: { id: noteId },
    //         })?.note?.tags;

    //         const addedTag: Tag = {
    //           __typename: "Tag",
    //           name: name as string,
    //           hue: hue as number,
    //           id: tagId as string,
    //         };

    //         if (cachedTagsFromNote) {
    //           return {
    //             __typename: "Note",
    //             id: noteId,
    //             tags: [...cachedTagsFromNote, addedTag],
    //           } as any;
    //         }
    //       },
    //       deleteTagFromNote: (variables, cache, _) => {
    //         const { noteId, tagId } = variables;
    //         const allFields = cache.inspectFields("Query");

    //         const notesByQueries = allFields.filter(
    //           (x) => x.fieldName === "notesBy"
    //         );

    //         notesByQueries.forEach((x) => {
    //           if (x?.arguments?.type === "Tag") {
    //             cache.updateQuery<NotesByQuery>(
    //               {
    //                 query: NotesByDocument,
    //                 variables: { id: tagId, type: "Tag" },
    //               },
    //               (data) => {
    //                 console.log(data);
    //                 console.log(noteId);

    //                 if (data?.notesBy) {
    //                   data.notesBy = data.notesBy.filter(
    //                     (n) => n?.id !== noteId
    //                   );
    //                 }
    //                 console.log("new data", data);

    //                 return data;
    //               }
    //             );
    //           }
    //         });

    //         const cachedTagsFromNote = cache.readQuery<NoteQuery>({
    //           query: NoteDocument,
    //           variables: { id: noteId },
    //         })?.note?.tags;

    //         return {
    //           __typename: "Note",
    //           id: noteId,
    //           tags: cachedTagsFromNote?.filter((t) => t?.id !== tagId),
    //         } as any;
    //       },
    //       deleteComment: (variables, cache, _) => {
    //         const { noteId, commentId } = variables;

    //         const cachedComments = cache.readQuery<NoteQuery>({
    //           query: NoteDocument,
    //           variables: { id: noteId },
    //         })?.note?.comments;

    //         return {
    //           __typename: "Note",
    //           id: noteId,
    //           comments: cachedComments?.filter((c) => c?.id !== commentId),
    //         } as any;
    //       },
    //       updateNote: (variables, _, __) => ({
    //         __typename: "Note",
    //         id: variables.noteId as string,
    //         text: variables.text,
    //       }),
    //       updateComment: (variables, _, __) => ({
    //         __typename: "Comment",
    //         id: variables.commentId as string,
    //         text: variables.text,
    //       }),
    //       updateReviewAmount: (variables, cache, _) => {
    //         const { reviewAmount } = variables;

    //         cache.updateQuery<InfoQuery>({ query: InfoDocument }, (data) => {
    //           if (data?.info?.reviewAmount) {
    //             data.info.reviewAmount = reviewAmount as number;
    //           }

    //           return data;
    //         });

    //         return null;
    //       },
    //       updateReviewHistory: (_, cache, __) => {
    //         cache.updateQuery<InfoQuery>({ query: InfoDocument }, (data) => {
    //           if (data?.info?.streak) {
    //             data.info.streak = data.info.streak + 1;
    //           }

    //           if (data?.info?.reviewed) {
    //             data.info.reviewed = true;
    //           }
    //           return data;
    //         });

    //         return null;
    //       },
    //     },
    //     updates: {
    //       Mutation: {
    //         deleteTagFromNote: (_, { tagId, noteId }, cache) => {
    //           const allFields = cache.inspectFields("Query");

    //           const notesByQueries = allFields.filter(
    //             (x) => x.fieldName === "notesBy"
    //           );

    //           notesByQueries.forEach((x) => {
    //             if (x?.arguments?.type === "Tag") {
    //               cache.updateQuery<NotesByQuery>(
    //                 {
    //                   query: NotesByDocument,
    //                   variables: { id: tagId, type: "Tag" },
    //                 },
    //                 (data) => {
    //                   console.log(data);
    //                   console.log(noteId);

    //                   if (data?.notesBy) {
    //                     data.notesBy = data.notesBy.filter(
    //                       (n) => n?.id !== noteId
    //                     );
    //                   }
    //                   console.log("new data", data);

    //                   return data;
    //                 }
    //               );
    //             }
    //           });
    //         },
    //         deleteBook: (_, { bookId }, cache) => {
    //           const allFields = cache.inspectFields("Query");

    //           const notesByQueries = allFields.filter(
    //             (x) => x.fieldName === "notesBy"
    //           );
    //           notesByQueries.forEach((x) => {
    //             if (x?.arguments?.type === "tag") {
    //               cache.invalidate("Query", "notesBy", x.arguments);
    //             }
    //           });

    //           const dailyNotesIdsQueries = allFields.filter(
    //             (x) => x.fieldName === "dailyNotesIds"
    //           );
    //           dailyNotesIdsQueries.forEach((x) =>
    //             cache.invalidate(
    //               "Query",
    //               "dailyNotesIds",
    //               x.arguments ?? undefined
    //             )
    //           );

    //           cache.updateQuery<BooksQuery>(
    //             { query: BooksDocument },
    //             (data) => {
    //               if (data?.books) {
    //                 data.books = data.books.filter(
    //                   (book) => book?.id !== bookId
    //                 );
    //                 return data;
    //               }
    //               return data;
    //             }
    //           );

    //           cache.updateQuery<LatestBooksQuery>(
    //             { query: LatestBooksDocument },
    //             (data) => {
    //               if (data?.latestBooks) {
    //                 data.latestBooks = data.latestBooks.filter(
    //                   (book) => book?.id !== bookId
    //                 );
    //                 return data;
    //               }
    //               return data;
    //             }
    //           );
    //         },
    //         addExistingTag: (_, { noteId, tagId }, cache, __) => {
    //           const changedNote = cache.readQuery<NoteQuery>({
    //             query: NoteDocument,
    //             variables: { id: noteId },
    //           })?.note;

    //           const allFields = cache.inspectFields("Query");

    //           const notesByQueries = allFields.filter(
    //             (x) => x.fieldName === "notesBy"
    //           );

    //           if (changedNote) {
    //             notesByQueries.forEach((x) => {
    //               if (x?.arguments?.type === "Tag") {
    //                 cache.updateQuery<NotesByQuery>(
    //                   {
    //                     query: NotesByDocument,
    //                     variables: { id: tagId, type: "Tag" },
    //                   },
    //                   (data) => {
    //                     data?.notesBy?.push({
    //                       text: changedNote.text,
    //                       id: changedNote.id,
    //                       title: changedNote.title,
    //                       author: changedNote.author,
    //                     });

    //                     return data;
    //                   }
    //                 );
    //               }
    //             });
    //           }
    //         },
    //         addNewTag: (_, args, cache, __) => {
    //           const { name, hue, tagId } = args;

    //           const addedTag: Tag = {
    //             __typename: "Tag",
    //             name: name as string,
    //             hue: hue as number,
    //             id: tagId as string,
    //           };

    //           cache.updateQuery<TagsQuery>({ query: TagsDocument }, (data) => {
    //             data?.tags?.push(addedTag);
    //             return data;
    //           });

    //           cache.updateQuery<TagsQuery>(
    //             { query: TagsDocument, variables: { type: "latest" } },
    //             (data) => {
    //               data?.tags?.push(addedTag);
    //               return data;
    //             }
    //           );
    //         },
    //         updateTag: (_, args, cache, __) => {
    //           const { name, hue, tagId } = args;

    //           const allFields = cache.inspectFields("Query");
    //           const noteQueries = allFields.filter(
    //             (x) => x.fieldName === "note"
    //           );
    //           noteQueries.forEach((q) => {
    //             const noteId = q?.arguments?.id;

    //             if (noteId) {
    //               cache.updateQuery<NoteQuery>(
    //                 { query: NoteDocument, variables: { id: noteId } },
    //                 (data) => {
    //                   data?.note?.tags?.forEach((t) => {
    //                     if (t?.id === tagId) {
    //                       t.name = name as string;
    //                       t.hue = hue as number;
    //                     }
    //                   });
    //                   return data;
    //                 }
    //               );
    //             }
    //           });
    //         },
    //         deleteTag: (_, args, cache, __) => {
    //           const { tagId } = args;

    //           const allFields = cache.inspectFields("Query");

    //           const noteQueries = allFields.filter(
    //             (x) => x.fieldName === "note"
    //           );

    //           noteQueries.forEach((q) => {
    //             const noteId = q?.arguments?.id;

    //             if (noteId) {
    //               cache.updateQuery<NoteQuery>(
    //                 { query: NoteDocument, variables: { id: noteId } },
    //                 (data) => {
    //                   if (data?.note?.tags) {
    //                     data.note.tags = data.note.tags.filter(
    //                       (t) => t?.id !== tagId
    //                     );
    //                   }
    //                   return data;
    //                 }
    //               );
    //             }
    //           });

    //           cache.updateQuery<TagsQuery>({ query: TagsDocument }, (data) => {
    //             if (data?.tags) {
    //               data.tags = data.tags.filter((t) => t?.id !== tagId);
    //             }
    //             return data;
    //           });

    //           cache.updateQuery<TagsQuery>(
    //             { query: TagsDocument, variables: { type: "latest" } },
    //             (data) => {
    //               if (data?.tags) {
    //                 data.tags = data.tags.filter((t) => t?.id !== tagId);
    //               }
    //               return data;
    //             }
    //           );
    //         },
    //       },
    //     },
    //   }) as any,
    //   fetchExchange,
    // ],
  });

  return client;
};
