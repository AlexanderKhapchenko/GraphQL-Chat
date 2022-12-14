module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.12). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMessage {
  count: Int!
}

type AggregateReply {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  createdAt: DateTime!
  text: String!
  likes: Int!
  dislikes: Int!
  replies(where: ReplyWhereInput, orderBy: ReplyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reply!]
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  likes: Int!
  dislikes: Int!
  replies: ReplyCreateManyWithoutMessageInput
}

input MessageCreateOneWithoutRepliesInput {
  create: MessageCreateWithoutRepliesInput
  connect: MessageWhereUniqueInput
}

input MessageCreateWithoutRepliesInput {
  id: ID
  text: String!
  likes: Int!
  dislikes: Int!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  likes_ASC
  likes_DESC
  dislikes_ASC
  dislikes_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  likes: Int!
  dislikes: Int!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  likes: Int
  dislikes: Int
  replies: ReplyUpdateManyWithoutMessageInput
}

input MessageUpdateManyMutationInput {
  text: String
  likes: Int
  dislikes: Int
}

input MessageUpdateOneRequiredWithoutRepliesInput {
  create: MessageCreateWithoutRepliesInput
  update: MessageUpdateWithoutRepliesDataInput
  upsert: MessageUpsertWithoutRepliesInput
  connect: MessageWhereUniqueInput
}

input MessageUpdateWithoutRepliesDataInput {
  text: String
  likes: Int
  dislikes: Int
}

input MessageUpsertWithoutRepliesInput {
  update: MessageUpdateWithoutRepliesDataInput!
  create: MessageCreateWithoutRepliesInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  likes: Int
  likes_not: Int
  likes_in: [Int!]
  likes_not_in: [Int!]
  likes_lt: Int
  likes_lte: Int
  likes_gt: Int
  likes_gte: Int
  dislikes: Int
  dislikes_not: Int
  dislikes_in: [Int!]
  dislikes_not_in: [Int!]
  dislikes_lt: Int
  dislikes_lte: Int
  dislikes_gt: Int
  dislikes_gte: Int
  replies_every: ReplyWhereInput
  replies_some: ReplyWhereInput
  replies_none: ReplyWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createReply(data: ReplyCreateInput!): Reply!
  updateReply(data: ReplyUpdateInput!, where: ReplyWhereUniqueInput!): Reply
  updateManyReplies(data: ReplyUpdateManyMutationInput!, where: ReplyWhereInput): BatchPayload!
  upsertReply(where: ReplyWhereUniqueInput!, create: ReplyCreateInput!, update: ReplyUpdateInput!): Reply!
  deleteReply(where: ReplyWhereUniqueInput!): Reply
  deleteManyReplies(where: ReplyWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  reply(where: ReplyWhereUniqueInput!): Reply
  replies(where: ReplyWhereInput, orderBy: ReplyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reply]!
  repliesConnection(where: ReplyWhereInput, orderBy: ReplyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReplyConnection!
  node(id: ID!): Node
}

type Reply {
  id: ID!
  message: Message!
  createdAt: DateTime!
  text: String!
}

type ReplyConnection {
  pageInfo: PageInfo!
  edges: [ReplyEdge]!
  aggregate: AggregateReply!
}

input ReplyCreateInput {
  id: ID
  message: MessageCreateOneWithoutRepliesInput!
  text: String!
}

input ReplyCreateManyWithoutMessageInput {
  create: [ReplyCreateWithoutMessageInput!]
  connect: [ReplyWhereUniqueInput!]
}

input ReplyCreateWithoutMessageInput {
  id: ID
  text: String!
}

type ReplyEdge {
  node: Reply!
  cursor: String!
}

enum ReplyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
}

type ReplyPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
}

input ReplyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ReplyScalarWhereInput!]
  OR: [ReplyScalarWhereInput!]
  NOT: [ReplyScalarWhereInput!]
}

type ReplySubscriptionPayload {
  mutation: MutationType!
  node: Reply
  updatedFields: [String!]
  previousValues: ReplyPreviousValues
}

input ReplySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReplyWhereInput
  AND: [ReplySubscriptionWhereInput!]
  OR: [ReplySubscriptionWhereInput!]
  NOT: [ReplySubscriptionWhereInput!]
}

input ReplyUpdateInput {
  message: MessageUpdateOneRequiredWithoutRepliesInput
  text: String
}

input ReplyUpdateManyDataInput {
  text: String
}

input ReplyUpdateManyMutationInput {
  text: String
}

input ReplyUpdateManyWithoutMessageInput {
  create: [ReplyCreateWithoutMessageInput!]
  delete: [ReplyWhereUniqueInput!]
  connect: [ReplyWhereUniqueInput!]
  set: [ReplyWhereUniqueInput!]
  disconnect: [ReplyWhereUniqueInput!]
  update: [ReplyUpdateWithWhereUniqueWithoutMessageInput!]
  upsert: [ReplyUpsertWithWhereUniqueWithoutMessageInput!]
  deleteMany: [ReplyScalarWhereInput!]
  updateMany: [ReplyUpdateManyWithWhereNestedInput!]
}

input ReplyUpdateManyWithWhereNestedInput {
  where: ReplyScalarWhereInput!
  data: ReplyUpdateManyDataInput!
}

input ReplyUpdateWithoutMessageDataInput {
  text: String
}

input ReplyUpdateWithWhereUniqueWithoutMessageInput {
  where: ReplyWhereUniqueInput!
  data: ReplyUpdateWithoutMessageDataInput!
}

input ReplyUpsertWithWhereUniqueWithoutMessageInput {
  where: ReplyWhereUniqueInput!
  update: ReplyUpdateWithoutMessageDataInput!
  create: ReplyCreateWithoutMessageInput!
}

input ReplyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: MessageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [ReplyWhereInput!]
  OR: [ReplyWhereInput!]
  NOT: [ReplyWhereInput!]
}

input ReplyWhereUniqueInput {
  id: ID
}

type Subscription {
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  reply(where: ReplySubscriptionWhereInput): ReplySubscriptionPayload
}
`
      }
    